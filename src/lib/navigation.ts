export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Úvod", href: "/" },
  {
    label: "Služby",
    href: "/sluzby/nakladni-autodoprava/",
    children: [
      {
        label: "Nákladní autodoprava",
        href: "/sluzby/nakladni-autodoprava/",
      },
      { label: "Přeprava stavebnin", href: "/sluzby/preprava-stavebnin/" },
      { label: "Přeprava palet", href: "/sluzby/preprava-palet/" },
      {
        label: "Svoz elektrospotřebičů",
        href: "/sluzby/svoz-elektrospotrebicu/",
      },
    ],
  },
  { label: "Vozový park", href: "/vozovy-park/" },
  { label: "Ceník", href: "/cenik/" },
  {
    label: "O nás",
    href: "/o-nas/",
    children: [
      { label: "O společnosti", href: "/o-nas/" },
      { label: "Časté dotazy", href: "/casto-kladene-dotazy/" },
    ],
  },
  {
    label: "Průvodce",
    href: "/pruvodce/jak-se-pocita-cena-prepravy/",
    children: [
      {
        label: "Jak se počítá cena přepravy",
        href: "/pruvodce/jak-se-pocita-cena-prepravy/",
      },
      {
        label: "Jak připravit zásilku",
        href: "/pruvodce/jak-pripravit-zasilku/",
      },
    ],
  },
  { label: "Kontakt", href: "/kontakt/" },
];

export const footerNavigation = {
  services: [
    {
      label: "Nákladní autodoprava",
      href: "/sluzby/nakladni-autodoprava/",
    },
    { label: "Přeprava stavebnin", href: "/sluzby/preprava-stavebnin/" },
    { label: "Přeprava palet", href: "/sluzby/preprava-palet/" },
    {
      label: "Svoz elektrospotřebičů",
      href: "/sluzby/svoz-elektrospotrebicu/",
    },
  ],
  company: [
    { label: "O společnosti", href: "/o-nas/" },
    { label: "Vozový park", href: "/vozovy-park/" },
    { label: "Časté dotazy", href: "/casto-kladene-dotazy/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  guides: [
    {
      label: "Jak se počítá cena přepravy",
      href: "/pruvodce/jak-se-pocita-cena-prepravy/",
    },
    {
      label: "Jak připravit zásilku",
      href: "/pruvodce/jak-pripravit-zasilku/",
    },
  ],
};
