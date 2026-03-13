// JSON-LD structured data builders for SEO.
// All schemas use entity stitching via @id URIs so Google connects
// Organization, WebSite, Service, and Article into a Knowledge Graph.
import { SITE, COMPANY, SERVICES } from "./constants";

export function buildBreadcrumbs(
  items: Array<{ label: string; href?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${SITE.url}${item.href}` }),
    })),
  };
}

export function buildFAQPage(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticle(options: {
  title: string;
  description: string;
  url: string;
  publishedDate: Date;
  updatedDate?: Date;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: `${SITE.url}${options.url}`,
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: COMPANY.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: COMPANY.name,
    },
    datePublished: options.publishedDate.toISOString(),
    ...(options.updatedDate && {
      dateModified: options.updatedDate.toISOString(),
    }),
    inLanguage: "cs",
  };
}

// Handles both specific service pages and regional landing pages.
// Regional pages pass regionName to override the service name and area.
export function buildTransportService(options: {
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string;
  regionName?: string;
}) {
  const name = options.regionName
    ? `Autodoprava — ${options.regionName}`
    : options.serviceName;
  const serviceType = options.regionName ? "Autodoprava" : options.serviceName;
  const area = options.regionName ?? options.areaServed;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name,
    description: options.description,
    url: `${SITE.url}${options.url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#organization`,
      name: COMPANY.name,
    },
    areaServed: area
      ? { "@type": "AdministrativeArea", name: area }
      : { "@type": "Country", name: "Česká republika" },
    inLanguage: "cs",
  };
}

export function buildTransportCompany() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#organization`,
        name: COMPANY.name,
        url: SITE.url,
        telephone: COMPANY.contacts.martinHanus.phone,
        email: COMPANY.email,
        description: SITE.description,
        foundingDate: `${COMPANY.founded}`,
        legalName: COMPANY.name,
        taxID: COMPANY.dic,
        identifier: {
          "@type": "PropertyValue",
          name: "IČO",
          value: COMPANY.ico,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Na Folimance 2155/15",
          addressLocality: "Praha",
          addressRegion: "Vinohrady",
          postalCode: "120 00",
          addressCountry: "CZ",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Středočeský kraj" },
          { "@type": "City", name: "Praha" },
          { "@type": "City", name: "Slaný" },
          { "@type": "City", name: "Kladno" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Přepravní služby",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service },
          })),
        },
        priceRange: "Individuální kalkulace",
        sameAs: [COMPANY.aresUrl],
        employee: [
          {
            "@type": "Person",
            name: COMPANY.contacts.martinHanus.name,
            jobTitle: COMPANY.contacts.martinHanus.role,
            telephone: COMPANY.contacts.martinHanus.phone,
            email: COMPANY.contacts.martinHanus.email,
          },
          {
            "@type": "Person",
            name: COMPANY.contacts.pavlaHanusova.name,
            jobTitle: COMPANY.contacts.pavlaHanusova.role,
            telephone: COMPANY.contacts.pavlaHanusova.phone,
            email: COMPANY.contacts.pavlaHanusova.email,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.shortName,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "cs",
      },
    ],
  };
}
