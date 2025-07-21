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
    href: '/webdesign',
    description: 'Professionelles Webdesign aus Regensburg für moderne Websites',
    icon: 'design'
  },
  {
    label: 'SEO Agentur',
    href: '/seo-agentur',
    description: 'SEO Agentur Regensburg für bessere Google Rankings',
    icon: 'search'
  },
  {
    label: 'Online-Marketing',
    href: '/online-marketing',
    description: 'Strategisches Online-Marketing für messbare Erfolge',
    icon: 'marketing'
  },
  {
    label: 'Social Media',
    href: '/social-media-marketing',
    description: 'Social Media Marketing für Facebook, Instagram und TikTok',
    icon: 'social'
  },
  {
    label: 'Blog',
    href: '/blog',
    description: 'Digital Marketing Blog mit Tipps und Insights',
    icon: 'blog'
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
    description: 'Kontakt zur Digitalagentur Regensburg - Kostenlose Beratung',
    icon: 'contact'
  }
];

export const footerLinks = {
  services: [
    { label: 'Webdesign Regensburg', href: '/webdesign' },
    { label: 'SEO Agentur Regensburg', href: '/seo-agentur' },
    { label: 'OnPage Optimierung', href: '/onpage-optimierung' },
    { label: 'Online-Marketing', href: '/online-marketing' },
    { label: 'SEA Kampagnen', href: '/sea-kampagnen' },
    { label: 'Social Media Marketing', href: '/social-media-marketing' },
    { label: 'Social Media Recruiting', href: '/social-media-recruiting' }
  ],
  company: [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Karriere', href: '/karriere' }
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/agb' }
  ]
};