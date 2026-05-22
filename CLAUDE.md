# Hanuš Transport — hanustransport.cz

Freight-transport company website: Astro 5 static site targeting SEO/GEO dominance in the Czech freight niche. Part of the `seo-geo-webs` workspace — shared stack and conventions live in the root `CLAUDE.md`.

## Business facts — verified data only

Sources for any on-site fact: the original site, the ARES registry, or owner-confirmed info. Never invent statistics, capabilities, or claims. Never deploy without local verify + owner permission.

- **Company:** Hanuš Transport s.r.o., IČO 06340199, DIČ CZ06340199
- **Owner:** Martin Hanuš (jednatel), +420 725 961 978 · **Dispatch:** Pavla Hanušová, +420 725 091 376
- **Registered:** Na Folimance 2155/15, Vinohrady, 120 00 Praha · **Base:** Slaný, Středočeský kraj
- **Founded:** 2011 (OSVČ) → 2017 (s.r.o.)
- **Services:** road freight (≤12t), construction materials, pallets, e-waste collection
- **Fleet:** 6 vehicles (Renault Master, Iveco Daily, 4× MAN TGL/TGM), all with hydraulic lifts
- **ARES:** https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/06340199

## Stack specifics

- Static output, zero client JS **except the contact form**
- Self-hosted Inter (`public/fonts/*.woff2`); `@tailwindcss/typography` for prose
- Deploy: Firebase Hosting (`firebase.json` — serves `dist/`, 301 redirects, cache headers, `cleanUrls` + `trailingSlash`)
- Contact form (`src/components/sections/ContactForm.astro`) POSTs to a Firebase Cloud Function `sendMail` (us-central1); the function source is NOT in this repo
- Build `npm run build`, dev `npm run dev` (localhost:4321), check `npm run check`

## Architecture

- `src/lib/constants.ts` — SITE, COMPANY, FLEET_STATS, SERVICES, COVERAGE_REGIONS
- `src/lib/navigation.ts` — main navigation
- `src/lib/schema-org.ts` — JSON-LD builders
- `src/content.config.ts` — collections `vehicles`, `services`, `regions`, `guides` (glob() + Zod)
- `src/data/faq.json` — FAQ Q&A pairs
- Layouts: BaseLayout → PageLayout → ServiceLayout / GuideLayout
- CSS-only mobile menu (checkbox hack) and accordion (`details`/`summary`)
- Path aliases (`tsconfig.json`): `@components`, `@layouts`, `@lib`, `@data`, `@styles`, `@assets`

## Design

- Navy (primary/trust) + Orange (accent/CTA); theme tokens in `src/styles/global.css` via `@theme`
- Logo `public/logo.svg` (potrace-traced from the original Banner.jpg)

## SEO strategy

- Dynamic per-slug routes from collections: `sluzby/` (services), `autodoprava/` (regional), `pruvodce/` (guides). `vozovy-park` is a single static page rendering the `vehicles` collection. Core static pages: index, o-nas, kontakt, cenik; plus FAQ (`casto-kladene-dotazy`) and 404
- JSON-LD: Organization, BreadcrumbList, Service, FAQPage, Article; entities stitched via `@id` URIs (e.g. `https://hanustransport.cz/#organization`)
- E-waste collection (svoz elektrospotřebičů) is the unique differentiator — no competitor offers it
