export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    description: 'Startseite der Digitalagentur Regensburg',
    icon: 'home'
  },
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
    description: 'Strategisches Online-Marketing für messbare Erfolge',
    icon: 'marketing'
  },
  {
    label: 'Social Media',
    href: '/social-media-marketing-regensburg/',
    description: 'Social Media Marketing für Facebook, Instagram und TikTok',
    icon: 'social'
  },
  {
    label: 'Kontakt',
    href: '/kontakt/',
    description: 'Kontakt zur Digitalagentur Regensburg - Kostenlose Beratung',
    icon: 'contact'
  }
];

export const footerLinks = {
  // Nur real existierende Service-Seiten, neue -regensburg Slugs
  services: [
    { label: 'Webdesign Regensburg', href: '/webdesign-regensburg/' },
    { label: 'SEO Agentur Regensburg', href: '/seo-regensburg/' },
    { label: 'Online-Marketing', href: '/online-marketing-regensburg/' },
    { label: 'Social Media Marketing', href: '/social-media-marketing-regensburg/' }
  ],
  // "Unternehmen"-Spalte: Kontakt + rechtliche Pflichtseiten zusammengefasst.
  company: [
    { label: 'Kontakt', href: '/kontakt/' },
    { label: 'Impressum', href: '/impressum/' },
    { label: 'Datenschutz', href: '/datenschutz/' }
  ],
  // Wird in der Bottom-Bar angezeigt (rechtlich Pflicht in DE)
  legal: [
    { label: 'Impressum', href: '/impressum/' },
    { label: 'Datenschutz', href: '/datenschutz/' }
  ]
};
