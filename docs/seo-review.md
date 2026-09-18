# Aptpro SEO / GEO / AEO review

Review date: 18 September 2026. Local upgrade from `17a31b8`. No push or deployment is authorised for this review. Search observations are a current research snapshot from the available search service, not a location-controlled Google rank report. No ranking or traffic gains are claimed.

## Baseline

The production and local baselines are recorded in `seo-baseline-production.json` and `seo-baseline-local.json`. Production inspection covered all ten sitemap-listed public routes, including titles, descriptions, canonicals, H1/H2, JSON-LD and internal links. Every route returned HTTP 200. Titles/descriptions were unique and each page had one H1; canonicals used the non-WWW domain.

| Route | Visible words including shared navigation/footer | Main gap |
| --- | ---: | --- |
| / | 1515 | Good visual/service breadth, but the entity definition and service/industry answer paths could be clearer |
| /website-design | 689 | Four narrow FAQs, generic repeated service/outcome paragraphs, weak buying guidance |
| /erp-systems | 750 | Workflow depth existed, but capability paragraphs repeated and buyer acceptance/migration detail was limited |
| /cybersecurity | 672 | Strong visual system, but engagement outputs, limits and buying questions needed direct answers |
| /it-infrastructure | 579 | Repeated card descriptions and limited support/recovery expectations |
| /projects | 993 | Honest statuses, but no detailed engineering case-study route or contextual sector links |
| /about | 428 | Limited explicit entity, regional scope and procurement detail |
| /contact | 361 | Many required fields and overlapping project-type options |
| /services | 659 | Website work was fourth; service cards defaulted to contact rather than the service explanation |
| /solutions | 717 | Problem-led material with little connection to specific implementation/evaluation paths |

Existing Service schemas embedded separate unnamed provider objects rather than referencing one stable entity. The homepage defined ProfessionalService, but there was no shared WebSite/entity graph or BreadcrumbList. Industry content was scattered in service lists and projects. Website and ERP copy overlapped on the homepage without a documented intent map. WWW served duplicate content with a correct non-WWW canonical. Wrangler used a single-page-application fallback, inappropriate for true unknown-route 404s in this multi-page static export. A request with the same audit user agent confirmed HTTP 200 on a nonexistent production path (see seo-baseline-routing.json); an initial generic Python request received 403, demonstrating that edge policy can affect anonymous probes. No security settings were changed.

## Keyword and intent map

One URL owns each primary commercial intent. Website synonyms remain on one website-design URL. Home establishes the brand and broad consultancy; services is a directory; industry pages add sector requirements rather than repeat the generic service page.

| URL | Primary intent/query | Secondary scope |
| --- | --- | --- |
| / | Aptpro / technology consultancy Kenya | Kenyan business technology provider, website and systems capability |
| /website-design | website design Kenya; website designers Kenya | web design Kenya, website designers in Kenya, website development Kenya, web development Kenya, web design company Kenya, website development company Kenya, professional/business website design Kenya; Nairobi modifiers where relevant |
| /erp-systems | ERP systems Kenya; custom ERP Kenya | ERP company Kenya, business software Kenya, workflow digitisation, RBAC, migration |
| /cybersecurity | cybersecurity services Kenya | cybersecurity company Kenya, cyber security company Kenya, authorised assessments, access reviews |
| /it-infrastructure | IT infrastructure Kenya; IT support Kenya | business IT support, networking, local systems, email and backups; Nairobi where appropriate |
| /automation | business automation Kenya; system integration Kenya | workflow automation, reporting, approvals, integration feasibility; AI as an evaluation question, not an unsupported service-delivery claim |
| /industries | industry technology solutions Kenya | sector-specific IT and business-system requirements |
| /industries/veterinary | veterinary systems Kenya | veterinary ERP requirements, PACS/DICOM, laboratory planning, clinical IT |
| /industries/property-management | property-management technology Kenya | apartment websites, viewing enquiries, property workflows, CCTV/network planning |
| /industries/professional-services | professional-services websites and systems Kenya | consultancy websites, client handovers, reporting, secure access |
| /industries/energy-solar | solar-business website and IT services Kenya | WordPress support, energy service architecture, enquiry workflows |
| /industries/smes | technology solutions for Kenyan SMEs | SME websites, beyond Excel, phased automation, infrastructure/security |
| /projects | Aptpro projects / engineering experience | evidence by scope, technology and delivery status |
| /projects/veterinary-systems | veterinary ERP and PACS case study | NASCAH public engineering scope, integration status, deployment planning |
| /about | Aptpro Business & IT Solutions | Kenya-based consultancy, engineering method, regional delivery scope |
| /contact | contact Aptpro / website project enquiry | website/redesign, ERP, security, IT, automation and existing-system support |
| /services | Aptpro technology services Kenya | service navigation and scope selection |
| /solutions | business workflow consulting Kenya | requirements analysis and phased technology planning |

The research covered each query requested in the task, including Nairobi variants, ERP/business software, cybersecurity, IT and automation. No search-volume numbers are available from this research, so priorities use commercial fit and observed intent rather than invented volume or difficulty scores. Broad “web developers” searches also return careers/training material; company and business-site intent is more useful for conversion.

## Implementation

Eight new public routes: automation, industry hub, five industry detail pages and veterinary engineering case study. All ten existing public pages receive relevant content, links or metadata improvements. ModernUI components, homepage composition, Cybersecurity terminal/architecture/cards and navigation/mobile drawer mechanisms remain intact. Industries enters the existing company navigation; automation enters the existing services menu. No dependency or third-party tracking script is added to the application.

Website design gains clear Kenya-focused H1 and metadata, six differentiated project types, seven engineering foundations, an eight-stage NumberedStep process, ten buying FAQs, project evidence, a scoping checklist and sector/system links. Costs and timelines are explained through scope factors, without fixed-price or turnaround promises. WordPress/custom development, responsive design, SEO, security, performance, maintenance, analytics and integration are explained with boundaries.

Kenya remains the primary country entity. Nairobi is used as a service market rather than a fabricated address. East Africa is a secondary, explicitly scoped remote-delivery capability, with no country pages or office claims. SME content follows website → focused automation → shared systems → infrastructure → security. Procurement content covers requirements, architecture, roles, acceptance, migration, documentation, testing, training, release/rollback and support responsibilities without claiming certification, giant teams or standard SLAs.

Veterinary scope covers practice records, appointments, clinical handovers, pharmacy/stock, billing, reporting, RBAC, migration planning, Orthanc PACS/DICOM, laboratory planning and infrastructure. The NASCAH ERP remains active implementation; imaging support and laboratory planning are separate scopes. Property content is a proposed service fit, with no fabricated completed deployments. Energy content uses the existing public Tesni support scope. Professional-services and SME material connects realistic operating problems to a manageable engagement.

The contact brief has seven clear project types, defaults to WhatsApp, removes duplicate category choices and makes phone/timeline optional. Email is needed when email is selected. Messages remain visitor-reviewed WhatsApp/email handoffs; no storage backend or analytics is introduced.

## Structured data and AI discoverability

A shared graph defines one Organization/ProfessionalService entity at `https://aptpro.co.ke/#organization` and WebSite at `https://aptpro.co.ke/#website`. The multi-type entity avoids inventing separate businesses. Service entities use stable IDs and reference that provider. Kenya is a Country and East Africa a Place in areaServed. Only country-level address information is used; no fake locations, reviews, ratings, awards or certifications. Services and industries have visible semantic breadcrumbs and matching BreadcrumbList.

Direct answer passages define Aptpro, available services, SME fit, redesign/WordPress/custom options, veterinary experience and regional scope. FAQ answers begin directly and explain limits. Important content is in exported HTML, not hidden AI-only copy.

Visible FAQs are retained, but FAQPage markup is not expanded and the prior website FAQPage is removed. Google’s current changelog says FAQ rich results stopped appearing on 7 May 2026 and its documentation was subsequently removed: https://developers.google.com/search/updates . This choice is about current applicability, not a promise of FAQ snippets.

No llms.txt is added. Google states no special AI file or schema is needed and documents that llms.txt does not affect Google visibility/rankings: https://developers.google.com/search/docs/appearance/ai-features and https://developers.google.com/search/updates . Other systems may use such files, but current evidence does not establish a measurable benefit for Aptpro’s public marketing pages. Accurate static text, links and entity markup are the priority.

## Robots and crawler policy

Current and retained policy: `User-agent: *`, `Allow: /`, canonical sitemap URL and host. Public pages allow index/follow; the 404 is explicitly noindex. Googlebot, Bingbot and robots-compliant search crawlers can crawl public pages. No redundant bot-specific groups, crawl delays or broad block changes are introduced.

OpenAI documents OAI-SearchBot as its search crawler and GPTBot as a separate training crawler, with independent controls: https://developers.openai.com/api/docs/bots . The existing wildcard policy permits both, and it remains unchanged in this task. Training policy is an owner decision separate from search discovery. Robots is not an access-control system. After deployment, authenticated Cloudflare review should check that existing WAF/Bot settings do not accidentally challenge intended search crawlers; no security controls should be disabled globally.

Bing recommends sitemap discovery and Webmaster Tools review: https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search . No claim is made that allowing a crawler guarantees citation or indexing.

## Technical SEO and WWW

Titles and descriptions are central and distinct, Open Graph/Twitter use route metadata, canonical origin remains `https://aptpro.co.ke`, and the sitemap uses the route registry for all 18 public content URLs. No fabricated lastmod timestamps. Route convention remains extensionless, with no trailing slash except the root. Breadcrumb URLs use that convention. Meta keywords are removed; they are not a ranking strategy.

Wrangler’s existing aptpro static-assets target is preserved. `assets.not_found_handling` changes from `single-page-application` to `404-page`, using the existing exported 404.html and real HTTP 404 for missing assets/routes. See https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/ . This is a native setting, not a new Worker handler or deployment architecture.

WWW redirect is **not implemented in repository code**. Current Workers static-assets `_redirects` explicitly does not support domain-level redirects: https://developers.cloudflare.com/workers/static-assets/redirects/ . Adding a hostname request handler would expand the architecture unnecessarily. Configure this one rule manually in the existing aptpro.co.ke zone after review:

1. Cloudflare dashboard → existing aptpro.co.ke zone → Rules → Redirect Rules → Single Redirect → Create rule.
2. Name: `WWW to canonical Aptpro`.
3. Custom filter expression: `(http.host eq "www.aptpro.co.ke")`.
4. URL redirect type: Dynamic.
5. Target expression: `concat("https://aptpro.co.ke", http.request.uri.path)`.
6. Status code: `301`.
7. Preserve query string: Enabled.
8. Position before conflicting redirects, review for existing equivalent rules, then enable only after approval of the deployment work.
9. Verify `/`, `/website-design`, `/industries/veterinary?source=review&test=1` and an unknown path on WWW. Each should redirect once to the same path/query on the non-WWW host. Canonical-host requests must not loop; the unknown final path must return 404.

No DNS, nameserver, account, domain, custom-domain routing or additional project change is needed. The dashboard action requires authenticated access to edit redirect rules on the existing zone. Current settings are documented at https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/ . No such external action was performed here.

## Performance and validation approach

Keep `output: export`, build-time content, existing hosting and existing visual components. Shared navigation imports lightweight industry route descriptors rather than the full FAQ/content module. New informational grids, breadcrumbs, schemas and FAQs are Server Components. NumberedStep reuses the existing component. No new application packages, images, blocking scripts or analytics are introduced.

Use `python tools/seo-audit.py` after the build to validate all sitemap pages: unique metadata, one H1, canonical/indexability, JSON-LD syntax, sitemap completeness, internal destinations/fragments, robots and 404 noindex. Browser checks exercise desktop/mobile content, FAQs, internal navigation, mobile drawer and contact preparation. Local Wrangler checks validate actual static routing and 404 status. Search snippets and Google/Bing indexing still require post-deployment observation.

## Search Console and Bing: after an approved future deployment

Canonical Search Console Domain property: `aptpro.co.ke`. Preferred URL-prefix property: `https://aptpro.co.ke/`. Sitemap: `https://aptpro.co.ke/sitemap.xml`. Robots: `https://aptpro.co.ke/robots.txt`.

1. Reuse existing verified ownership if available. If absent, add the Domain property and use only Google’s actual issued verification value. A verification TXT is an ownership action, not a change to nameservers or routing; do not invent or add it during this local review. URL-prefix verification is an alternative if the owner prefers to avoid DNS verification.
2. Submit the sitemap after the reviewed build is deployed. Inspect homepage, website design, veterinary and property URLs; verify rendered copy, indexability and Google-selected canonical. Request indexing for the changed priority URLs.
3. Review Page Indexing for soft 404s, duplicate/canonical issues and blocked resources. Test the WWW redirect and missing-route 404 after the manual rule is configured.
4. In Bing Webmaster Tools, add `https://aptpro.co.ke/`, preferably import the already verified Search Console property. Otherwise use Bing’s genuine issued XML/meta verification. Preserve any existing verification. Submit the same sitemap and inspect important URLs.
5. Establish a baseline for impressions, clicks, query/page relationships and actual business enquiries. Compare over time; avoid treating one manual SERP search or a schema check as ranking success.

Bing verification instructions: https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b . No Google/Bing verification tokens existed in the inspected route metadata or public assets; none were fabricated.

## Prioritised content roadmap

No blog archive or mass articles are added. Publish future material only where Aptpro can give original, useful engineering guidance.

| Priority | Topic | Reason and link destination |
| --- | --- | --- |
| 1 | Website design cost in Kenya: scope, ownership and maintenance | Strong buying intent; original scoping examples; link website design/contact. Merge the overlapping “How much should an SME website cost?” topic into this guide |
| 2 | How to choose a website designer in Kenya | Commercial evaluation; explain evidence, access ownership, acceptance and support; link website design/projects |
| 3 | Website checklist for Kenyan SMEs | Practical buyer preparation and clear SME fit; link website design/SMEs/contact |
| 4 | WordPress vs custom development for business websites | Platform evaluation with maintenance/security tradeoffs; link website design/IT support |
| 5 | When should a business move beyond Excel? | High fit to ERP discovery; original workflow examples; link ERP/automation/SMEs |
| 6 | ERP systems for Kenyan SMEs: requirements before modules | Commercial systems evaluation; avoid unsupported vendor/compliance claims; link ERP/projects |
| 7 | Digitising veterinary hospital operations | Strong niche expertise with honest case evidence; explain records and infrastructure together; link veterinary/case study/ERP |
| 8 | Cybersecurity checklist for Kenyan SMEs | Useful defensive expertise; relatively broad competition; link cybersecurity/SMEs/infrastructure |
| 9 | IT infrastructure checklist for growing businesses | Help scope ownership, connectivity and recovery; link infrastructure/security/contact |
| 10 | Technology for apartment and property management | Sector fit with requirement examples, not invented case outcomes; link property/websites/automation |

Cost/selection pages compete with mature agencies and directories; their chance to be useful depends on original scoping detail and approved evidence, not length alone. Veterinary is a narrower expertise opportunity. Actual query and conversion data should adjust this order.

## Competitor observations (separate from Aptpro copy)

These are sites surfaced in current search research and pages inspected directly. They are not verified fixed Google ranking positions. No competitor wording, prices, testimonials or statistics are copied into the implementation.

- Zedafrica: clear service categories, Nairobi entity/contact information and detailed named work. https://zedafrica.com/
- ZIPROF business-websites page: dedicated business/SME intent, responsive service scope and expansion/maintenance framing. https://ziprof.co.ke/web-solutions/web-design/business-websites
- WinK Dev: service clusters, Kenyan browsing context, FAQs and cross-links between websites, software and IT. Its outcome/SLA claims are not adopted as Aptpro facts. https://www.winkdev.com/
- Quest Web: focused commercial web-design page with cost guidance, quick answers, process and prominent enquiry actions. No prices or delivery claims copied. https://www.questdesigners.com/services/web-design
- Peak & Dale: portfolio architecture and challenge/solution case-study pages create evaluation evidence. https://peakanddale.com/our-portfolio/ and https://peakanddale.com/portfolio/sasini-group-plc/
- ERP results also surface local integration/support comparisons and providers such as Gegohub and Threal. Common themes include module fit, migration and local interfaces. Aptpro does not claim eTIMS, payroll or M-Pesa deployment merely because competitors advertise them. https://www.gegohub.com/ and https://www.threalitl.co.ke/services/erp-systems
- CyberIntel, Novia and Lantech surface technical scope and support context; automation results include ZIPROF, Rift and Pulse Digital. Aptpro’s AI section stays at feasibility review because there is no public-safe evidence of production AI delivery. https://www.cyberintel.co.ke/ ; https://novia.co.ke/AboutUs ; https://lantech.co.ke/ ; https://ziprof.co.ke/automation ; https://rifttechnologies.co.ke/services/ai-automation ; https://pulse-digital.agency/services/business-automation-kenya

Inference: useful service depth, geographic clarity, buyer answers, visible evidence and internal service architecture recur across these results. Their presence does not establish a causal ranking factor. Aptpro’s defensible difference is the connection between websites, software, operational systems, infrastructure and defensive security.

## Top ten priority queries

1. website design Kenya
2. website designers Kenya
3. website designers in Kenya
4. website development Kenya
5. web design company Kenya
6. professional website design Kenya
7. business website design Kenya
8. website designers Nairobi
9. ERP systems Kenya
10. cybersecurity services Kenya

## Top five actions after this local commit

1. Review localhost copy, factual claims and mobile journeys; approve a separate push/deploy task only when ready.
2. After deployment, enable the existing-zone WWW redirect and verify true 404s, routes and crawler access.
3. Submit the updated sitemap in Google/Bing and measure page/query indexing before making further changes.
4. Publish the first cost/selection guide with original scope examples; add only approved project evidence as status changes.
5. Build legitimate business/entity references and measure enquiries. Use a Google Business Profile only if the business meets Google’s eligibility requirements; do not invent an office, customers or directory reviews.


## Local review URLs and repeatable checks

The static production-style preview uses **http://localhost:3001** (or http://127.0.0.1:3001). Port 3000 already has an IPv6 Next.js development server; it was left untouched. This avoids accidentally reviewing stale output from that process.

Review:

- http://localhost:3001/
- http://localhost:3001/website-design
- http://localhost:3001/industries
- http://localhost:3001/industries/veterinary
- http://localhost:3001/industries/property-management
- http://localhost:3001/industries/professional-services
- http://localhost:3001/industries/energy-solar
- http://localhost:3001/industries/smes
- http://localhost:3001/automation
- http://localhost:3001/erp-systems
- http://localhost:3001/cybersecurity
- http://localhost:3001/it-infrastructure
- http://localhost:3001/projects
- http://localhost:3001/projects/veterinary-systems
- http://localhost:3001/about
- http://localhost:3001/contact
- http://localhost:3001/services
- http://localhost:3001/solutions
- http://localhost:3001/sitemap.xml
- http://localhost:3001/robots.txt

Restart the preview from D:\aptpro-dash if needed:

```powershell
npx wrangler dev --ip 127.0.0.1 --port 3001 --inspector-port 9236
```

Wrangler dev is local only. Do not run `wrangler deploy` for this review. Stop this preview before rebuilding on Windows because it can hold the exported out directory open.

Repeat the SEO audit with `python tools/seo-audit.py`. To repeat browser checks, install the isolated local tool with `npm install --prefix .tools/seo-browser --no-save --package-lock=false playwright`, then run `node tools/seo-browser-check.mjs` with Microsoft Edge installed. This tooling is ignored by Git and is not an application dependency. Screenshots are in the ignored local tooling directory; only textual validation results are committed.

## Final local validation

- Next.js 16.3.5 production build passed: 25 generated static entries, including 18 public content pages and metadata/error routes.
- Lint passed; production dependency audit reported zero vulnerabilities.
- Exported SEO audit passed with no errors: unique titles/descriptions, one H1 per page, non-WWW canonicals, valid linked JSON-LD, internal links/fragments, complete sitemap, crawlable robots and noindex 404.
- Browser verification passed across all 18 public pages at desktop and mobile sizes (36 route/viewport checks), with no application JavaScript errors or failed Next.js assets. FAQ, internal navigation, mobile drawer and contact handoffs passed. Desktop content cards and mobile navigation were visually reviewed.
- Native static asset normalization redirects .html and trailing-slash aliases with HTTP 307, as documented by Cloudflare. The separate proposed WWW rule must use a permanent 301 and preserve queries.
- Modernization components and application dependencies remain unchanged. Source checks found no prohibited writing patterns, suspected credentials or private operational identifiers in new content.
- No push, deployment, DNS change or production infrastructure change was performed.
