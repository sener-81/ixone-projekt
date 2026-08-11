export interface NavItem {
  label: string;
  href?: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    description: 'Startseite der Digitalagentur Regensburg',
    icon: 'home'
  },
  {
    label: 'Leistungen',
    description: 'Leistungen der Digitalagentur Regensburg',
    icon: 'services',
    children: [
      {
        label: 'Webdesign',
        href: '/webdesign-regensburg/',
        description: 'Professionelles Webdesign aus Regensburg für moderne Websites',
        icon: 'design'
      },
      {
        label: 'SEO Agentur',
        href: '/seo-regensburg/',
        description: 'SEO Agentur Regensburg für bessere Google Rankings',
        icon: 'search'
      },
      {
        label: 'Online-Marketing',
        href: '/online-marketing-regensburg/',
        description: 'Google Ads und Online-Marketing für messbare Erfolge',
        icon: 'marketing'
      },
      {
        label: 'Social Media',
        href: '/social-media-marketing-regensburg/',
        description: 'Social Media Marketing für Facebook, Instagram und TikTok',
        icon: 'social'
      },
      {
        label: 'Websitepflege',
        href: '/websitepflege-regensburg/',
        description: 'Wartung, Updates und Sicherheit für Ihre Website',
        icon: 'maintenance'
      },
      {
        label: 'KI-Agentur',
        href: '/ki-agentur-regensburg/',
        description: 'KI-Lösungen, Chatbots und Automatisierung aus Regensburg',
        icon: 'ai'
      },
      {
        label: 'Grafikdesign',
        href: '/grafikdesign-regensburg/',
        description: 'Visitenkarten, Stempel und Geschäftsausstattung inklusive Druck',
        icon: 'design-print'
      }
    ]
  },
  {
    label: 'Branchen',
    href: '/branchen/',
    description: 'Branchen, die wir in Regensburg und Umgebung betreuen',
    icon: 'industry'
  },
  {
    label: 'Agentur',
    description: 'Über die ixOne Digitalagentur Regensburg',
    icon: 'agency',
    children: [
      {
        label: 'Über uns',
        href: '/ueber-uns/',
        description: 'Die Menschen hinter der Digitalagentur ixOne',
        icon: 'agency'
      },
      {
        label: 'Referenzen',
        href: '/referenzen/',
        description: 'Kundenprojekte der Digitalagentur ixOne aus Regensburg',
        icon: 'reference'
      },
      {
        label: 'Preise',
        href: '/preise/',
        description: 'Richtwerte und Preise der Digitalagentur Regensburg',
        icon: 'price'
      },
      {
        label: 'Standorte',
        href: '/standorte/',
        description: 'Adressen, Öffnungszeiten und Anfahrt in Neutraubling und Regensburg',
        icon: 'location'
      },
      {
        label: 'Häufige Fragen',
        href: '/faq/',
        description: 'Antworten auf die wichtigsten Fragen an die Digitalagentur',
        icon: 'faq'
      }
    ]
  },
  {
    label: 'Kontakt',
    href: '/kontakt/',
    description: 'Kontakt zur Digitalagentur Regensburg – Kostenlose Beratung',
    icon: 'contact'
  }
];

export const footerLinks = {
  services: [
    { label: 'Webdesign Regensburg', href: '/webdesign-regensburg/' },
    { label: 'SEO Agentur Regensburg', href: '/seo-regensburg/' },
    { label: 'Online-Marketing', href: '/online-marketing-regensburg/' },
    { label: 'Social Media Marketing', href: '/social-media-marketing-regensburg/' },
    { label: 'Websitepflege', href: '/websitepflege-regensburg/' },
    { label: 'KI-Agentur', href: '/ki-agentur-regensburg/' },
    { label: 'Grafikdesign', href: '/grafikdesign-regensburg/' }
  ],
  company: [
    { label: 'Über uns', href: '/ueber-uns/' },
    { label: 'Branchen', href: '/branchen/' },
    { label: 'Referenzen', href: '/referenzen/' },
    { label: 'Häufige Fragen', href: '/faq/' },
    { label: 'Preise', href: '/preise/' },
    { label: 'Standorte', href: '/standorte/' },
    { label: 'Kontakt', href: '/kontakt/' },
    { label: 'Impressum', href: '/impressum/' },
    { label: 'Datenschutz', href: '/datenschutz/' }
  ],
  legal: [
    { label: 'Impressum', href: '/impressum/' },
    { label: 'Datenschutz', href: '/datenschutz/' }
  ]
};

export const navIcons: Record<string, string> = {
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  services: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  design: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  marketing: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  social: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
  maintenance: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  ai: 'M13 10V3L4 14h7v7l9-11h-7z',
  'design-print': 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  industry: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  agency: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  reference: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  faq: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  price: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
  location: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  contact: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
};