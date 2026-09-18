import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const require = createRequire(new URL('../.tools/seo-browser/package.json', import.meta.url));
const { chromium } = require('playwright');
const base = process.env.APTPRO_PREVIEW_URL || 'http://localhost:3001';
const artifactDirectory = fileURLToPath(new URL('../.tools/seo-browser/screenshots/', import.meta.url));
mkdirSync(artifactDirectory, { recursive: true });
const audit = JSON.parse(readFileSync(new URL('../docs/seo-validation.json', import.meta.url), 'utf8'));
const routes = Object.keys(audit.pages);
const result = { base, routeChecks: [], errors: [], checks: {}, screenshots: [] };
const browser = await chromium.launch({ channel: 'msedge', headless: true });
function check(condition, description) { if (!condition) result.errors.push(description); }
async function screenshot(page, name) {
  await page.screenshot({ path: `${artifactDirectory}${name}.png`, animations: 'disabled' });
  result.screenshots.push(name);
}
try {
  for (const [name, viewport] of [['desktop', {width:1440,height:1000}], ['mobile',{width:390,height:844}]]) {
    const context = await browser.newContext({viewport, reducedMotion:'reduce'});
    const page = await context.newPage();
    page.on('pageerror', e => result.errors.push(`${name}: JavaScript ${e.message}`));
    page.on('response', response => { if (response.status() >= 400 && response.url().includes('/_next/')) result.errors.push(`${name}: asset ${response.status()} ${response.url()}`); });
    for (const route of routes) {
      const response = await page.goto(base + route, {waitUntil:'networkidle'});
      await page.locator('main h1').waitFor({state:'visible'});
      const layout = await page.evaluate(() => ({width:innerWidth, scrollWidth:document.documentElement.scrollWidth, h1s:document.querySelectorAll('h1').length, gridColumns:[...document.querySelectorAll('.seo-content-grid')].map(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length)}));
      check(response.status() === 200, `${name} ${route}: HTTP ${response.status()}`);
      check(layout.h1s === 1, `${name} ${route}: H1 count ${layout.h1s}`);
      check(layout.scrollWidth <= layout.width + 1, `${name} ${route}: horizontal overflow ${layout.scrollWidth}/${layout.width}`);
      if (layout.gridColumns.length) check(layout.gridColumns.every(n => n === (name === 'mobile' ? 1 : 2)), `${name} ${route}: content grid columns ${layout.gridColumns}`);
      result.routeChecks.push({viewport:name, route, status:response.status(), ...layout});
      if (['/website-design','/industries','/industries/veterinary','/industries/property-management','/contact'].includes(route)) await screenshot(page, `${name}-${route.replaceAll('/','-').slice(1)}`);
    }
    await page.goto(base+'/website-design', {waitUntil:'networkidle'});
    const faq = page.locator('.faq-item').first();
    await faq.locator('summary').click();
    check(await faq.locator('p').isVisible(), `${name}: FAQ does not open`);
    result.checks[`${name}Faq`] = await faq.locator('p').isVisible();
    await page.locator('main .related-links a[href="/industries/smes"]').click();
    await page.waitForURL('**/industries/smes');
    check(await page.locator('h1').innerText() === audit.pages['/industries/smes'].headings.h1[0], `${name}: internal client navigation failed`);
    result.checks[`${name}InternalNavigation`] = true;
    if (name === 'mobile') {
      await page.getByRole('button',{name:'Open navigation',exact:true}).click();
      const drawer = page.getByRole('dialog',{name:'Site navigation'});
      check(await drawer.isVisible(), 'Mobile drawer did not open');
      await screenshot(page,'mobile-drawer');
      await drawer.getByRole('link',{name:'Industries',exact:true}).click();
      await page.waitForURL('**/industries');
      check(await page.getByRole('button',{name:'Open navigation',exact:true}).getAttribute('aria-expanded') === 'false','Mobile drawer did not close after navigation');
      result.checks.mobileDrawer = true;
    }
    await context.close();
  }
  const context = await browser.newContext({viewport:{width:390,height:844}});
  const page = await context.newPage();
  // Intercept outbound preparation. No message or external navigation is sent.
  await page.addInitScript(() => { window.open = (url) => { window.__aptproPreparedEnquiry = String(url); return null; }; });
  await page.goto(base+'/contact',{waitUntil:'networkidle'});
  await page.locator('input[name="name"]').fill('Local review');
  await page.locator('input[name="organization"]').fill('Preview test');
  await page.locator('select[name="service"]').selectOption('Website design / redesign');
  await page.locator('textarea[name="message"]').fill('Local validation of the website enquiry flow.');
  await page.getByRole('button',{name:'Prepare WhatsApp enquiry'}).click();
  const prepared = await page.evaluate(() => window.__aptproPreparedEnquiry);
  check(Boolean(prepared?.startsWith('https://wa.me/254721494510?text=')), 'Contact preparation destination invalid');
  check(Boolean(prepared && decodeURIComponent(prepared).includes('Website design / redesign')), 'Contact preparation lost project type');
  result.checks.whatsAppPreparationWithoutOptionalFields = Boolean(prepared);
  await page.locator('select[name="contactMethod"]').selectOption('Email');
  check(await page.getByRole('button',{name:'Prepare Email enquiry'}).isVisible(), 'Email action label does not update');
  check(await page.locator('input[name="email"]').getAttribute('required') !== null,'Email is not required for email contact');
  result.checks.emailChannelLabelAndRequirement = true;
  for (const width of [360,768,1280]) {
    await page.setViewportSize({width,height:900});
    await page.goto(base+'/website-design',{waitUntil:'networkidle'});
    check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`Website intermediate viewport overflow at ${width}`);
  }
  const missing = await page.goto(base+'/seo-review-route-that-does-not-exist',{waitUntil:'networkidle'});
  check(missing.status() === 404, `Missing route HTTP ${missing.status()}`);
  check((await page.locator('meta[name="robots"]').allTextContents()).length > 0,'404 robots missing');
  result.checks.unknownRouteStatus = missing.status();
  const slash = await page.request.get(base+'/website-design/',{maxRedirects:0});
  result.checks.trailingSlashStatus = slash.status();
  result.checks.trailingSlashLocation = slash.headers().location || null;
  check([301,307,308].includes(slash.status()) && slash.headers().location === '/website-design','Trailing-slash canonical redirect incorrect');
  const extension = await page.request.get(base+'/website-design.html',{maxRedirects:0});
  result.checks.htmlExtensionStatus = extension.status();
  result.checks.htmlExtensionLocation = extension.headers().location || null;
  check([301,307,308].includes(extension.status()) && extension.headers().location === '/website-design','HTML extension canonical redirect incorrect');
  await context.close();
} finally {
  await browser.close();
  writeFileSync(new URL('../docs/seo-browser-validation.json', import.meta.url), JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify({routeChecks:result.routeChecks.length,checks:result.checks,errors:result.errors,screenshots:result.screenshots},null,2));
}
if(result.errors.length) process.exitCode=1;
