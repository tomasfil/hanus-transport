// Astro 5 Content Collections — each collection maps to a Markdown folder
// and a Zod schema for type-safe frontmatter validation at build time.
// Used by dynamic routes: /sluzby/[slug], /autodoprava/[slug], /pruvodce/[slug]
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Fleet vehicles displayed on /vozovy-park/ — order determines display sequence
const vehicles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/vehicles" }),
  schema: z.object({
    name: z.string(),
    type: z.enum(["van", "truck"]),
    totalWeight: z.number(),
    payload: z.number(),
    palletCapacity: z.number(),
    hydraulicLift: z.number(),
    dimensions: z.object({
      length: z.number(),
      width: z.number(),
      height: z.number(),
    }),
    image: z.string().optional(),
    features: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

// Service landing pages at /sluzby/<slug>/ — description capped at 160 chars for meta tags
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    headline: z.string(),
    slug: z.string(),
    icon: z.string(),
    heroImage: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

// Regional SEO landing pages at /autodoprava/<slug>/ — target local search queries
const regions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/regions" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    headline: z.string(),
    regionName: z.string(),
    slug: z.string(),
    keywords: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

// Informational articles at /pruvodce/<slug>/ — build topical authority for freight queries
const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    headline: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number(),
    keywords: z.array(z.string()).default([]),
  }),
});

export const collections = { vehicles, services, regions, guides };
