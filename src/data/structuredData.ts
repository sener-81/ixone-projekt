export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ixone.de/#organization",
  "name": "iXone Digitalagentur",
  "alternateName": ["iXone", "Digitalagentur Regensburg"],
  "description": "Professionelle Digitalagentur aus Regensburg für Webdesign, SEO und Online-Marketing seit 2007",
  "url": "https://ixone.de",
  "telephone": "+49-9401-533-88-73",
  "email": "info@ixone.de",
  "logo": "https://ixone.de/favicon.svg",
  "image": "https://ixone.de/assets/ixone-online-marketing-regensburg.webp",
  "foundingDate": "2007",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Deine Straße 1", // echte Straße eintragen
    "addressLocality": "Regensburg",
    "addressRegion": "Bayern",
    "postalCode": "93047",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.0134",
    "longitude": "12.1016"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "priceRange": "€€",
  "areaServed": [
    { "@type": "City", "name": "Regensburg" },
    { "@type": "State", "name": "Bayern" },
    { "@type": "Country", "name": "Deutschland" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digitalagentur Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Webdesign",
          "description": "Professionelle Website-Entwicklung und responsive Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO",
          "description": "Suchmaschinenoptimierung für bessere Google Rankings"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online-Marketing",
          "description": "Strategisches digitales Marketing für messbare Erfolge"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/ixone.de",
    "https://www.instagram.com/ixone.de",
    "https://www.linkedin.com/company/ixone"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ixone.de/#website",
  "url": "https://ixone.de",
  "name": "iXone Digitalagentur",
  "description": "Digitalagentur aus Regensburg für Webdesign, SEO und Online-Marketing",
  "publisher": { "@id": "https://ixone.de/#organization" },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ixone.de/suche?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ]
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
