"""Audit static SEO output or capture a read-only production baseline."""
import json, sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET
ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://aptpro.co.ke'
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=''; self.description=''; self.canonical=''; self.robots=''; self.headings={'h1':[], 'h2':[]}; self.links=[]; self.ids=set(); self.schemas=[]; self.text=[]; self.active=None; self.buffer=[]; self.skip=0
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='meta' and a.get('name')=='description': self.description=a.get('content','')
        if tag=='meta' and a.get('name')=='robots': self.robots=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical': self.canonical=a.get('href','')
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag in ('title','h1','h2') or (tag=='script' and a.get('type')=='application/ld+json'): self.active=tag; self.buffer=[]
        if tag in ('script','style'): self.skip+=1
    def handle_data(self,data):
        if self.active: self.buffer.append(data)
        if not self.skip: self.text.append(data)
    def handle_endtag(self,tag):
        if tag==self.active:
            value=''.join(self.buffer).strip()
            if tag=='title': self.title=value
            elif tag=='script': self.schemas.append(json.loads(value))
            else: self.headings[tag].append(value)
            self.active=None
        if tag in ('script','style'): self.skip=max(0,self.skip-1)
    def report(self):
        return {'title':self.title,'description':self.description,'canonical':self.canonical,'robots':self.robots,'headings':self.headings,'structuredData':self.schemas,'internalLinks':sorted(set(h for h in self.links if h.startswith(('/','#',ORIGIN)))),'visibleWords':len(' '.join(self.text).split())}
def audit(production=False):
    urls=[e.text for e in ET.parse(ROOT/'out/sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]; pages={}; reports={}; errors=[]
    for url in urls:
        route=urlsplit(url).path.rstrip('/') or '/'; status=None
        if production:
            with urlopen(Request(url,headers={'User-Agent':'Aptpro-SEO-Audit/1.0'}),timeout=30) as r: html=r.read().decode('utf-8'); status=r.status
        else: html=(ROOT/'out'/('index.html' if route=='/' else route.strip('/')+'.html')).read_text(encoding='utf-8')
        p=Page(); p.feed(html); pages[route]=p; reports[route]={'httpStatus':status,**p.report()}
        nodes=[]
        for schema in p.schemas: nodes.extend(schema.get('@graph',[schema]))
        provider_id=ORIGIN+'/#organization'
        providers=[n for n in nodes if n.get('@id')==provider_id]
        if not production and len(providers)!=1: errors.append(f'{route}: expected one stable provider entity')
        for node in nodes:
            if node.get('@type')=='Service' and not production:
                if node.get('provider',{}).get('@id')!=provider_id: errors.append(f'{route}: Service provider reference incorrect')
                if node.get('url')!=p.canonical: errors.append(f'{route}: Service URL differs from canonical')
                if not node.get('name') or not node.get('description'): errors.append(f'{route}: incomplete Service entity')
            if node.get('@type')=='BreadcrumbList' and not production:
                items=node.get('itemListElement',[])
                if [i.get('position') for i in items]!=list(range(1,len(items)+1)): errors.append(f'{route}: breadcrumb positions invalid')
                if not items or items[-1].get('item')!=p.canonical: errors.append(f'{route}: breadcrumb destination incorrect')
        if not production and route!='/' and not any(n.get('@type')=='BreadcrumbList' for n in nodes): errors.append(f'{route}: missing semantic breadcrumb')
        if not production and ('devops@aptpro.co.ke' in html or '.workers.dev' in html): errors.append(f'{route}: internal operational identifier exposed')
        if len(p.headings['h1'])!=1: errors.append(f'{route}: expected one H1')
        if not p.title or not p.description: errors.append(f'{route}: missing title/description')
        if p.canonical!=ORIGIN+('' if route=='/' else route): errors.append(f'{route}: incorrect canonical')
        if 'noindex' in p.robots: errors.append(f'{route}: unexpectedly noindex')
    for field in ('title','description'):
        for value,count in Counter(getattr(p,field) for p in pages.values()).items():
            if count>1: errors.append(f'Duplicate {field}: {value}')
    if not production:
        for route,p in pages.items():
            for link in p.links:
                parts=urlsplit(link)
                if parts.netloc and parts.netloc!='aptpro.co.ke': continue
                if parts.scheme and parts.scheme not in ('http','https'): continue
                target=unquote(parts.path).rstrip('/') or route
                if parts.path=='/': target='/'
                if target in pages:
                    if parts.fragment and unquote(parts.fragment) not in pages[target].ids: errors.append(f'{route}: broken fragment {link}')
                elif not (ROOT/'out'/target.lstrip('/')).is_file(): errors.append(f'{route}: broken internal link {link}')
        html_routes={'/' if p.relative_to(ROOT/'out').as_posix()=='index.html' else '/'+p.relative_to(ROOT/'out').as_posix()[:-5] for p in (ROOT/'out').rglob('*.html')}-{'/404','/_not-found','/_not-found/index'}
        if html_routes!=set(pages): errors.append(f'Sitemap mismatch: {sorted(html_routes ^ set(pages))}')
        robots=(ROOT/'out/robots.txt').read_text()
        if 'Allow: /' not in robots or f'Sitemap: {ORIGIN}/sitemap.xml' not in robots: errors.append('Robots policy or sitemap incorrect')
        nf=Page(); nf.feed((ROOT/'out/404.html').read_text(encoding='utf-8'))
        if 'noindex' not in nf.robots: errors.append('404 must be noindex')
    return {'origin':ORIGIN,'pages':reports,'errors':sorted(set(errors)),'routeCount':len(pages)}
if __name__=='__main__':
    result=audit('--production' in sys.argv)
    if '--output' in sys.argv: Path(sys.argv[sys.argv.index('--output')+1]).write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({'routeCount':result['routeCount'],'errors':result['errors']},indent=2))
    if result['errors'] and '--production' not in sys.argv: raise SystemExit(1)
