# Aptpro Business & IT Solutions Website

One-page marketing website for Aptpro Business & IT Solutions, built with Next.js App Router and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The project is configured with `output: "export"` in `next.config.ts`, so the static production output is generated in:

```text
out
```

## Cloudflare Pages

Use these settings for a static deployment from GitHub to Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `out`
- Node.js version: use the current LTS version supported by Cloudflare Pages for this project

No backend is required for the current website. The quote form prepares an email or WhatsApp enquiry in the visitor's own app when verified contact details are configured.

## Editable Business Information

Update `src/lib/site-content.ts` before launch:

- `contact.whatsappNumber`
- `contact.phoneNumber`
- `contact.email`
- `contact.location`
- `canonicalUrl`

Do not add unverified clients, awards, certifications, statistics, partnerships, or project outcomes.

## Environment Variables

No public runtime environment variables are required for the static website.

The repository currently contains Prisma-related files and a local database environment entry. These are not used by the static marketing page. Do not commit real production secrets.
