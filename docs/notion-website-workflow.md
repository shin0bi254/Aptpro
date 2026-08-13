# Notion Website Workflow for Aptpro

This document describes how Aptpro can use a free Notion workspace as a private planning and approval system for website content, SEO work, case studies and enquiries. The production website should remain a static Next.js site. Do not expose a Notion token, do not call the Notion API from the browser, and do not claim a Notion integration unless one is separately implemented and verified.

## Recommended Workflow

1. Keep planning, drafts and approvals inside a private Notion workspace.
2. Review each item for factual accuracy, confidentiality and publication readiness.
3. Move approved content into the static Next.js content modules through Git.
4. Validate metadata, links, accessibility, sitemap and build output before deployment.
5. Use Notion for monthly review, not as the production CMS.

## Private Databases

### Content and SEO Database

Use this database to track service pages, case studies, FAQs, insight articles and SEO improvements.

| Property | Type | Purpose |
| --- | --- | --- |
| Title | Title | Working title for the page or content item |
| Target keyword | Text | Main search theme, such as website design Nairobi |
| Search intent | Select | Commercial, informational, local, comparison or support |
| Page type | Select | Service page, case study, FAQ, insight, landing page or update |
| URL | URL/Text | Planned or published path |
| Status | Select | Backlog, Drafting, Review, Approved, Published, Refresh needed |
| Owner | Person/Text | Responsible person |
| Draft date | Date | When writing starts |
| Publish date | Date | Planned or actual publication date |
| Last updated | Date | Last substantive review |
| Internal links | Text | Pages that should link to or from this item |
| CTA | Select/Text | Primary enquiry path |
| Notes | Text | Research notes, approvals and constraints |

### Case-study Database

Use this database to prevent accidental publication of sensitive client, security or infrastructure details.

| Property | Type | Purpose |
| --- | --- | --- |
| Project | Title | Public or internal project name |
| Industry | Select/Text | Sector or operating context |
| Problem | Text | Business problem being solved |
| Aptpro role | Text | Verified involvement |
| Services | Multi-select | Website, ERP, cybersecurity, infrastructure, consulting |
| Status | Select | Active implementation, Implemented support, Delivered, Deployment planning, Technical concept |
| Approved for publication | Checkbox | Explicit approval gate |
| Confidentiality reviewed | Checkbox | Confirms private details were removed |
| Images available | Checkbox | Indicates approved visual assets exist |
| Outcome | Text | Verified outcome only, no invented metrics |
| Publish URL | URL/Text | Published case-study or project path |

### Lead Tracker

Use this as a private operations board for enquiries. Do not store secrets or credentials.

| Property | Type | Purpose |
| --- | --- | --- |
| Contact | Title | Lead contact name |
| Organisation | Text | Company or group |
| Service needed | Select/Multi-select | Website, ERP, cybersecurity, IT support, infrastructure, consultation |
| Source | Select | Website, WhatsApp, referral, search, directory, returning client |
| Stage | Select | New, Qualified, Discovery, Proposal, Waiting, Won, Lost |
| Estimated value | Number/Text | Optional internal estimate |
| Next action | Text | Specific follow-up |
| Follow-up date | Date | Next reminder |
| Notes | Text | Context, constraints and decisions |

## Monthly SEO Review

Track external actions that code cannot complete by itself:

- Google Business Profile updates
- Google Search Console coverage and sitemap status
- Bing Webmaster Tools status
- Business-directory consistency
- Ethical client reviews after approved work
- Project backlinks from approved clients
- Local citations and portfolio outreach
- Useful content based on real customer questions
- Performance monitoring
- Search-query tracking

## Publication Rules

- Publish only approved, factual content.
- Remove credentials, private IP addresses, internal mailboxes and sensitive infrastructure details.
- Do not invent testimonials, results, client counts, certifications, awards or team members.
- Keep Notion private unless a separate public publishing workflow is designed and approved.
- Treat Git as the source of truth for production website content.
