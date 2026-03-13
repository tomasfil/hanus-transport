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

export function buildTransportService(options: {
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: options.serviceName,
    name: options.serviceName,
    description: options.description,
    url: `${SITE.url}${options.url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#organization`,
      name: COMPANY.name,
    },
    areaServed: options.areaServed
      ? { "@type": "AdministrativeArea", name: options.areaServed }
      : { "@type": "Country", name: "Česká republika" },
    inLanguage: "cs",
  };
}

export function buildRegionalService(options: {
  regionName: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Autodoprava",
    name: `Autodoprava — ${options.regionName}`,
    description: options.description,
    url: `${SITE.url}${options.url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#organization`,
      name: COMPANY.name,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: options.regionName,
    },
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
        foundingDate: `${COMPANY.foundedOsvč}`,
        legalName: COMPANY.name,
        taxID: COMPANY.dic,
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
