// ═══════════════════════════════════════════════════════════════
// src/data/structuredData.ts
//
// GLOBAL  → in Layout.astro / Head.astro:
//   organizationSchema, websiteSchema,
//   localBusinessSchema, localBusinessRegensburgSchema
//
// PRO SEITE → direkt in der jeweiligen .astro Page:
//   serviceSchema, faqSchema
// ═══════════════════════════════════════════════════════════════

// Einsatzgebiet – zentral gepflegt, damit alle Schemas identisch bleiben
export const areaServedFull = [
  { "@type": "City", name: "Regensburg" },
  { "@type": "City", name: "Neutraubling" },
  { "@type": "City", name: "Obertraubling" },
  { "@type": "City", name: "Lappersdorf" },
  { "@type": "City", name: "Pentling" },
  { "@type": "City", name: "Barbing" },
  { "@type": "City", name: "Sinzing" },
  { "@type": "City", name: "Zeitlarn" },
  { "@type": "City", name: "Wenzenbach" },
  { "@type": "City", name: "Nittendorf" },
  { "@type": "City", name: "Bad Abbach" },
  { "@type": "City", name: "Kelheim" },
  { "@type": "City", name: "Straubing" },
  { "@type": "City", name: "Landshut" },
  { "@type": "State", name: "Bayern" },
  { "@type": "Country", name: "Deutschland" },
];

// ─────────────────────────────────────────────────────────────
// 1. ORGANIZATION
// ─────────────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ixone.de/#organization",
  name: "iXone Digitalagentur",
  alternateName: [
    "iXone",
    "Digitalagentur Regensburg",
    "Webdesign Agentur Regensburg",
  ],
  description:
    "Professionelle Digitalagentur aus Regensburg für Webdesign, SEO und Online-Marketing seit 2007",
  url: "https://ixone.de",
  telephone: "+4994015338873",
  email: "info@ixone.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oder-Neisse-Str. 1",
    addressLocality: "Neutraubling",
    addressRegion: "Bayern",
    postalCode: "93073",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+4994015338873",
    contactType: "customer service",
    email: "info@ixone.de",
    areaServed: "DE",
    availableLanguage: ["de"],
  },
  logo: {
    "@type": "ImageObject",
    url: "https://ixone.de/assets/ixone-logo.webp",
    width: 512,
    height: 287,
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
          url: "https://ixone.de/webdesign-regensburg/",
          description:
            "Professionelle Website-Entwicklung und responsives Webdesign aus Regensburg",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Agentur Regensburg",
          url: "https://ixone.de/seo-regensburg/",
          description: "Suchmaschinenoptimierung für bessere Google Rankings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online Marketing Regensburg",
          url: "https://ixone.de/online-marketing-regensburg/",
          description: "Strategisches digitales Marketing für messbare Erfolge",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing Regensburg",
          url: "https://ixone.de/social-media-marketing-regensburg/",
          description:
            "Zielgruppengerechte Social Media Strategien für Facebook, Instagram, TikTok und YouTube",
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
    height: 287,
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
  areaServed: areaServedFull,
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
  url: "https://ixone.de/kontakt/",
  telephone: "+4994015338873",
  email: "info@ixone.de",
  image: "https://ixone.de/assets/ixone-online-marketing-regensburg.webp",
  logo: {
    "@type": "ImageObject",
    url: "https://ixone.de/assets/ixone-logo.webp",
    width: 512,
    height: 287,
  },
  priceRange: "€€",
  currenciesAccepted: "EUR",
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
  areaServed: areaServedFull,
  hasMap: "https://maps.google.com/?q=iXone+Digitalagentur+Humboldtstr.+48+93053+Regensburg",
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
  description:
    "Digitalagentur aus Regensburg für Webdesign, SEO und Online-Marketing",
  publisher: { "@id": "https://ixone.de/#organization" },
  inLanguage: "de-DE",
};

// ─────────────────────────────────────────────────────────────
// 5. BREADCRUMB – Funktion, pro Seite aufrufen
//
// BreadcrumbList wird in Breadcrumbs.astro erzeugt.
// ─────────────────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════
// VORLAGE für eine neue Service-Page
//
//  import { areaServedFull } from "../data/structuredData";
//
//  const serviceSchema = {
//    "@context": "https://schema.org",
//    "@type": "Service",
//    "@id": "https://ixone.de/SLUG#service",
//    name: "SERVICE NAME Regensburg",
//    provider: { "@id": "https://ixone.de/#organization" },
//    areaServed: areaServedFull,
//    serviceType: "…",
//    url: "https://ixone.de/SLUG",
//    offers: {
//      "@type": "Offer",
//      availability: "https://schema.org/InStock",
//      url: "https://ixone.de/SLUG",
//      priceSpecification: {
//        "@type": "PriceSpecification",
//        minPrice: 0,
//        priceCurrency: "EUR",
//        valueAddedTaxIncluded: false,
//      },
//    },
//  };
//
//  WICHTIG: priceRange gehört zu LocalBusiness, NICHT in ein Offer.
//  Im Offer stattdessen priceSpecification verwenden.
// ═══════════════════════════════════════════════════════════════
