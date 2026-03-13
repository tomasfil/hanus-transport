# Hanuš Transport — hanustransport.cz

Freight transport company website. Astro 5 static site targeting SEO/GEO dominance in Czech freight transport niche.

## Stack

- Astro 5 + TypeScript + Tailwind CSS 4 (static output, zero client JS except contact form)
- Firebase Hosting + Cloud Function v2 (Node.js 22) for contact form
- Self-hosted Inter fonts (woff2-variations)
- `@tailwindcss/typography` for prose/markdown content

## Business

- **Company:** Hanuš Transport s.r.o., IČO 06340199, DIČ CZ06340199
- **Owner:** Martin Hanuš (jednatel), +420 725 961 978
- **Dispatch:** Pavla Hanušová, +420 725 091 376
- **Registered address:** Na Folimance 2155/15, Vinohrady, 120 00 Praha
- **Operational base:** Slaný, Středočeský kraj
- **Founded:** 2011 (OSVČ) → 2017 (s.r.o.)
- **Services:** Road freight (≤12t), construction materials, pallets, e-waste collection
- **Fleet:** 6 vehicles (Renault Master, Iveco Daily, 4× MAN TGL/TGM), all with hydraulic lifts
- **ARES:** https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/06340199

## Content Language

- All visible text, aria-labels, alt text: **Czech**
- Code, comments, variable names, CSS classes, commit messages: **English**

## Build & Dev

- Build: `npm run build` (NEVER use bare `npx astro` — resolves wrong version)
- Dev: `npm run dev` (localhost:4321)
- Check: `npm run check` (astro check)

## Architecture

- `src/lib/constants.ts` — SITE, COMPANY, FLEET_STATS, SERVICES, COVERAGE_REGIONS
- `src/lib/navigation.ts` — main navigation structure
- `src/lib/schema-org.ts` — JSON-LD builders
- `src/content.config.ts` — vehicles, services, regions, guides collections (glob() + Zod)
- `src/data/faq.json` — FAQ Q&A pairs
- Layout hierarchy: BaseLayout → PageLayout → ServiceLayout / GuideLayout
- CSS-only mobile menu (checkbox hack), CSS-only accordion (details/summary)

## Path Aliases

- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@lib/*` → `src/lib/*`
- `@data/*` → `src/data/*`
- `@styles/*` → `src/styles/*`

## Design

- Colors: Navy (primary, trust) + Orange (accent, CTA)
- Theme tokens defined in `src/styles/global.css` via `@theme`
- Logo: `public/logo.svg` (potrace-traced from original Banner.jpg)

## SEO Strategy

- 18 pages total: 5 core + 4 service landing + 4 regional + 2 guides + FAQ + 404
- JSON-LD: Organization, BreadcrumbList, Service, FAQPage, Article schemas
- Entity stitching via `@id` URIs (e.g., `https://hanustransport.cz/#organization`)
- E-waste collection (svoz elektrospotřebičů) is the **unique differentiator** — no competitors have this

## Content Rules

- Only verified facts from: original site, ARES registry, owner-confirmed info
- Never invent statistics, capabilities, or claims
- Never deploy without local verify + owner permission
