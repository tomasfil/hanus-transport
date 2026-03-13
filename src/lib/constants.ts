export const SITE = {
  name: "Hanuš Transport s.r.o. — Autodoprava",
  shortName: "Hanuš Transport",
  url: "https://hanustransport.cz",
  description:
    "Autodoprava a přeprava zboží po celé ČR. Nákladní doprava do 12 tun, přeprava stavebnin, palet a svoz elektrospotřebičů. Sídlíme ve Slaném.",
  author: "Tomáš Filip",
  authorIco: "17135125",
  authorAddress: "Pražská 2112, 272 01, Kladno - Kročehlavy",
  authorEmail: "tomasfilip124@gmail.com",
  ogImage: "/favicon.svg",
} as const;

export const COMPANY = {
  name: "Hanuš Transport s.r.o.",
  ico: "06340199",
  dic: "CZ06340199",
  address: "Na Folimance 2155/15, Vinohrady, 120 00 Praha",
  operationalBase: "Slaný, Středočeský kraj",
  founded: 2017,
  foundedOsvč: 2011,
  aresUrl:
    "https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/06340199",
  contacts: {
    martinHanus: {
      name: "Martin Hanuš",
      phone: "+420 725 961 978",
      email: "martin.hanus@hanustransport.cz",
      role: "Jednatel",
    },
    pavlaHanusova: {
      name: "Pavla Hanušová",
      phone: "+420 725 091 376",
      email: "pavla.hanusova@hanustransport.cz",
      role: "Dispečink",
    },
  },
  email: "info@hanustransport.cz",
} as const;

export const FLEET_STATS = {
  vehicleCount: 6,
  maxWeight: 12,
  maxPallets: 18,
  hydraulicLiftMin: 750,
  hydraulicLiftMax: 1500,
} as const;

export const SERVICES = [
  "Nákladní autodoprava",
  "Přeprava stavebnin",
  "Přeprava palet",
  "Svoz elektrospotřebičů",
] as const;

export const COVERAGE_REGIONS = [
  { id: "slany", name: "Slaný", type: "city" as const },
  { id: "kladno", name: "Kladno", type: "city" as const },
  { id: "praha", name: "Praha", type: "city" as const },
  { id: "stredocesky-kraj", name: "Středočeský kraj", type: "region" as const },
] as const;
