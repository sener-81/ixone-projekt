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
  "foundingDate": "2007",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Regensburg",
    "addressRegion": "Bayern",
    "addressCountry": "DE",
    "postalCode": "93047"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.0134",
    "longitude": "12.1016"
  },
  "openingHours": ["Mo-Fr 09:00-18:00"],
  "priceRange": "€€",
  "serviceArea": ["Regensburg", "Bayern", "Deutschland"],
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
  "publisher": {
    "@id": "https://ixone.de/#organization"
  },
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

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});