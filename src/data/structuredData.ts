export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ixone.de/#organization",
  "name": "iXone Digitalagentur",
  "alternateName": ["iXone", "Digitalagentur Regensburg"],
  "description": "Professionelle Digitalagentur aus Regensburg für Webdesign, SEO und Online-Marketing seit 2007",
  "url": "https://ixone.de",
  "telephone": "+4994015338873",
  "email": "info@ixone.de",
  // FIX: ImageObject statt reiner URL – Google benötigt min. 112x112px
  "logo": {
    "@type": "ImageObject",
    "url": "https://ixone.de/assets/ixone-logo.webp",
    "width": 512,
    "height": 512
  },
  "image": "https://ixone.de/assets/ixone-online-marketing-regensburg.webp",
  "foundingDate": "2007",
  "department": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ixone.de/#neutraubling",
      "name": "iXone Digitalagentur – Neutraubling",
      "telephone": "+4994015338873",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Oder-Neisse-Str. 1",
        "addressLocality": "Neutraubling",
        "addressRegion": "Bayern",
        "postalCode": "93073",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.99002",
        "longitude": "12.20109"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "€€",
      "areaServed": [
        { "@type": "City", "name": "Neutraubling" },
        { "@type": "State", "name": "Bayern" },
        { "@type": "Country", "name": "Deutschland" }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ixone.de/#regensburg",
      "name": "iXone Digitalagentur – Regensburg",
      "telephone": "+4915228970613",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Humboldtstr. 48",
        "addressLocality": "Regensburg",
        "addressRegion": "Bayern",
        "postalCode": "93053",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.996183",
        "longitude": "12.105524"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "€€",
      "areaServed": [
        { "@type": "City", "name": "Regensburg" },
        { "@type": "State", "name": "Bayern" },
        { "@type": "Country", "name": "Deutschland" }
      ]
    }
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
          "description": "Professionelle Website-Entwicklung und responsives Design"
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
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Zielgruppengerechte Social Media Strategien für Facebook, Instagram und LinkedIn"
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
  "publisher": { "@id": "https://ixone.de/#organization" }
  // SearchAction entfernt – /suche existiert nicht, würde Search Console Fehler erzeugen
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