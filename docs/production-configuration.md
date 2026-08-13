# Aptpro Production Configuration

This document records non-secret production facts for Aptpro Business & IT Solutions. Do not add passwords, tokens, private keys, recovery codes, Cloudflare API credentials, Zoho credentials, SMTP credentials, or full DKIM public keys here.

## Domains and Deployment

- Canonical domain: `aptpro.co.ke`
- Canonical origin: `https://aptpro.co.ke`
- WWW domain: `www.aptpro.co.ke`
- Canonical preference: non-WWW
- DNS provider: Cloudflare
- Cloudflare authoritative nameservers: `gracie.ns.cloudflare.com`, `titan.ns.cloudflare.com`
- Deployment provider: Cloudflare Workers static assets
- Internal Worker deployment endpoint: `aptpro.tednganga99.workers.dev`
- Connected custom domains: `aptpro.co.ke`, `www.aptpro.co.ke`
- HTTPS status: works on both custom domains

The Worker URL is internal operational information. It must not be used as the public URL, canonical origin, or customer-facing link.

## Public Contact

- Public business email alias: `info@aptpro.co.ke`
- Public WhatsApp destination: `https://wa.me/254721494510`
- Technical administration mailbox: `devops@aptpro.co.ke`

The technical administration mailbox is internal operational information and must not be exposed as a general customer contact address.

## Mail Provider and DNS

Zoho Mail is the mail provider. The current mail posture works and should not be changed casually.

Existing MX records:

```text
MX @ mx.zoho.com  Priority 10
MX @ mx2.zoho.com Priority 20
MX @ mx3.zoho.com Priority 50
TTL Auto
```

Existing SPF policy:

```text
TXT @ v=spf1 include:zohomail.com ~all
```

DKIM locator:

```text
Selector: zoho
Host: zoho._domainkey
```

Do not copy the full DKIM public key into application code, runtime configuration, or documentation.

DMARC posture:

- Current policy: `p=none`
- Purpose: monitor-only
- Policy coverage: 100%
- Reports: sent to the technical mailbox
- Do not change to `quarantine` or `reject` without reviewing legitimate senders.

Zoho verification entry:

```text
TXT @ zoho-verification=zb17284161.zmverify.zoho.com
```

This record verifies domain ownership for Zoho Mail. It does not create an application dependency.

Do not duplicate SPF records, remove Zoho verification records, modify MX records, change DMARC enforcement, or add Cloudflare/Zoho credentials in this repository.

## WWW Redirect

Required redirect:

```text
https://www.aptpro.co.ke/* -> https://aptpro.co.ke/$1
```

Paths and query strings must be preserved.

The current repository deployment configuration serves static assets through `wrangler.jsonc` and does not include a repository-owned request handler or redirect mechanism. Implement the permanent WWW-to-root redirect in Cloudflare configuration unless the Worker architecture is intentionally expanded to include a request handler.

## Deployment Verification Checklist

- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- `npm run build` succeeds and exports static output to `out/`.
- Static output includes `/`, `/services`, `/solutions`, `/projects`, `/about`, `/contact`, `/robots.txt`, and `/sitemap.xml`.
- Canonical URLs use `https://aptpro.co.ke`.
- Open Graph URLs use `https://aptpro.co.ke`.
- Sitemap URLs use `https://aptpro.co.ke`.
- Robots references `https://aptpro.co.ke/sitemap.xml`.
- Public pages expose `info@aptpro.co.ke` as the public email.
- Customer-facing HTML does not expose `devops@aptpro.co.ke`.
- Customer-facing HTML does not expose the internal Worker URL.
- JSON-LD is valid JSON and uses only verified information.
- `.env`, `.next/`, `out/`, `node_modules/`, build caches, and secret-bearing files remain uncommitted.
