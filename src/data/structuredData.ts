// ═══════════════════════════════════════════════════════════════
// src/data/structuredData.ts
//
// GLOBAL  → Layout.astro einbinden:
//   organizationSchema, websiteSchema,
//   localBusinessSchema, localBusinessRegensburgSchema
//
// PRO SEITE → direkt in der jeweiligen .astro Page:
//   breadcrumbSchema(items), serviceSchema, faqSchema
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// 1. ORGANIZATION
// ─────────────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ixone.de/#organization",
  name: "iXone Digitalagentur",
  alternateName: ["iXone", "Digitalagentur Regensburg", "Webdesign Agentur Regensburg"],
  description:
    "Professionelle Digitalagentur aus Regensburg für Webdesign, SEO und Online-Marketing seit 2007",
  url: "https://ixone.de",
  telephone: "+4994015338873",
  email: "info@ixone.de",
  logo: {
    "@type": "ImageObject",
    url: "https://ixone.de/assets/ixone-logo.webp",
    width: 512,
    height: 512,
  },
  image: "https://ixone.de/assets/ixone-online-marketing-regensburg.webp",
  foundingDate: "2007",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digitalagentur Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webdesign Regensburg",
          url: "https://ixone.de/webdesign",
          description:
            "Professionelle Website-Entwicklung und responsives Webdesign aus Regensburg",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Regensburg",
          url: "https://ixone.de/seo",
          description: "Suchmaschinenoptimierung für bessere Google Rankings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online-Marketing Regensburg",
          url: "https://ixone.de/online-marketing",
          description: "Strategisches digitales Marketing für messbare Erfolge",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
          url: "https://ixone.de/social-media",
          description:
            "Zielgruppengerechte Social Media Strategien für Facebook, Instagram und LinkedIn",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/ixone.de",
    "https://www.instagram.com/ixone.de",
    "https://www.linkedin.com/company/ixone",
  ],
};

// ─────────────────────────────────────────────────────────────
// 2. LOCAL BUSINESS – Hauptstandort Neutraubling
//    Eigenständiges Schema (stärker als department-Verschachtelung)
// ─────────────────────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ixone.de/#localbusiness",
  name: "iXone Digitalagentur",
  description:
    "Professionelle Webdesign Agentur und SEO Agentur in Regensburg. Moderne Websites, SEO und Online-Marketing für Unternehmen in Bayern.",
  url: "https://ixone.de",
  telephone: "+4994015338873",
  email: "info@ixone.de",
  image: "https://ixone.de/assets/ixone-online-marketing-regensburg.webp",
  logo: {
    "@type": "ImageObject",
    url: "https://ixone.de/assets/ixone-logo.webp",
    width: 512,
    height: 512,
  },
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Invoice",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oder-Neisse-Str. 1",
    addressLocality: "Neutraubling",
    addressRegion: "Bayern",
    postalCode: "93073",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.99002",
    longitude: "12.20109",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Regensburg" },
    { "@type": "City", name: "Neutraubling" },
    { "@type": "City", name: "Straubing" },
    { "@type": "City", name: "Landshut" },
    { "@type": "State", name: "Bayern" },
    { "@type": "Country", name: "Deutschland" },
  ],
  hasMap: "https://maps.google.com/?q=iXone+Digitalagentur+Neutraubling",
  parentOrganization: { "@id": "https://ixone.de/#organization" },
};

// ─────────────────────────────────────────────────────────────
// 3. LOCAL BUSINESS – Zweigstelle Regensburg
// ─────────────────────────────────────────────────────────────
export const localBusinessRegensburgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ixone.de/#localbusiness-regensburg",
  name: "iXone Digitalagentur Regensburg",
  description:
    "Webdesign Agentur und SEO Agentur direkt in Regensburg. Persönliche Beratung vor Ort für Unternehmen in Regensburg und Bayern.",
  url: "https://ixone.de",
  telephone: "+4915228970613",
  email: "info@ixone.de",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Humboldtstr. 48",
    addressLocality: "Regensburg",
    addressRegion: "Bayern",
    postalCode: "93053",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.996183",
    longitude: "12.105524",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Regensburg" },
    { "@type": "State", name: "Bayern" },
  ],
  parentOrganization: { "@id": "https://ixone.de/#organization" },
};

// ─────────────────────────────────────────────────────────────
// 4. WEBSITE
// ─────────────────────────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ixone.de/#website",
  url: "https://ixone.de",
  name: "iXone Digitalagentur",
  description: "Digitalagentur aus Regensburg für Webdesign, SEO und Online-Marketing",
  publisher: { "@id": "https://ixone.de/#organization" },
  inLanguage: "de-DE",
};

// ─────────────────────────────────────────────────────────────
// 5. BREADCRUMB – Funktion, pro Seite aufrufen
//
//  VERWENDUNG in jeder .astro Page:
//
//  import { breadcrumbSchema } from "../data/structuredData";
//  const crumbs = breadcrumbSchema([
//    { name: "Home",      url: "https://ixone.de/" },
//    { name: "Webdesign", url: "https://ixone.de/webdesign" },
//  ]);
//  → dann in Layout: structuredData={[crumbs, serviceSchema, faqSchema]}
// ─────────────────────────────────────────────────────────────
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// ═══════════════════════════════════════════════════════════════
// IN Layout.astro einbinden (alle 4 globalen Schemas):
//
//  import {
//    organizationSchema,
//    websiteSchema,
//    localBusinessSchema,
//    localBusinessRegensburgSchema,
//  } from "../data/structuredData";
//
//  <script type="application/ld+json" set:html={JSON.stringify([
//    organizationSchema,
//    websiteSchema,
//    localBusinessSchema,
//    localBusinessRegensburgSchema,
//  ])} />
//
// ─────────────────────────────────────────────────────────────
// SEITENSPEZIFISCH (Vorlage für jede neue Service-Page):
//
//  const serviceSchema = {
//    "@context": "https://schema.org",
//    "@type": "Service",
//    "@id": "https://ixone.de/SLUG#service",
//    name: "SERVICE NAME Regensburg",
//    provider: { "@id": "https://ixone.de/#organization" },
//    areaServed: [
//      { "@type": "City", name: "Regensburg" },
//      { "@type": "State", name: "Bayern" },
//    ],
//    offers: {
//      "@type": "Offer",
//      priceRange: "€€",
//      priceCurrency: "EUR",
//      availability: "https://schema.org/InStock",
//      url: "https://ixone.de/SLUG",
//    },
//  };
// ═══════════════════════════════════════════════════════════════