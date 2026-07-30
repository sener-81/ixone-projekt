// ═══════════════════════════════════════════════════════════════
// src/data/galerieData.ts
//
// Zentrale Datei für alle Galerie-Bilder der Webdesign-Seite.
// Hier pflegst du: Dateiname, SEO-Alt-Text und Caption.
//
// BILDER ABLEGEN: src/assets/galerie/
// DATEINAMEN: SEO-freundlich, nur Kleinbuchstaben, keine Leerzeichen
//
// ALT-TEXT TIPPS:
//   ✓ Beschreibe was auf dem Bild zu sehen ist
//   ✓ Baue relevante Keywords natürlich ein
//   ✓ Max. 125 Zeichen
//   ✗ Kein Keyword-Stuffing
//   ✗ Nicht "Bild von..." oder "Foto von..."
// ═══════════════════════════════════════════════════════════════

export interface GalerieItem {
  /** Dateiname in src/assets/galerie/ – nur Dateiname, kein Pfad */
  file: string;
  /** SEO-optimierter Alt-Text – beschreibt das Bild + Keywords */
  alt: string;
  /** Kurze Caption für Hover-Overlay und Lightbox */
  caption: string;
}

export const galerieData: GalerieItem[] = [
  // ─── PLATZHALTER – ersetze mit echten Projekten ───────────────
  // Sobald du ein echtes Projektbild hast:
  // 1. Bild in src/assets/galerie/ ablegen
  // 2. Dateinamen hier eintragen
  // 3. Alt-Text und Caption anpassen
  // ─────────────────────────────────────────────────────────────
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "ixOne Digitalagentur Regensburg – Professionelles Webdesign und SEO für Unternehmen in Bayern",
    caption: "ixOne Digitalagentur",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "Responsive Unternehmenswebsite Webdesign Regensburg – Mobile-first Design für mehr Anfragen",
    caption: "Unternehmenswebsite",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "WooCommerce Online-Shop Webdesign Regensburg – Modernes E-Commerce Design für mehr Umsatz",
    caption: "Online-Shop Regensburg",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "Conversion-optimierte Landingpage Webdesign Regensburg – Mehr Leads durch gezieltes UX-Design",
    caption: "Landingpage",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "Corporate Website Webdesign Regensburg – Professioneller Unternehmensauftritt für den Mittelstand",
    caption: "Corporate Website",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "SEO-optimiertes Webdesign Regensburg – Technisch saubere Website für bessere Google Rankings",
    caption: "SEO Webdesign",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "Handwerker Website Webdesign Regensburg – Lokale Dienstleister online professionell präsentieren",
    caption: "Handwerker Website",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "UX/UI Design Regensburg – Benutzerfreundliche Navigation und intuitives Layout für höhere Conversion",
    caption: "UX/UI Design",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "WordPress Website Regensburg – CMS-Integration für einfache Inhaltspflege ohne technisches Wissen",
    caption: "WordPress Website",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "Astro Website Regensburg – Blitzschnelle moderne Website mit PageSpeed Score über 90",
    caption: "Astro Website",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "Webdesign für Einzelhandel Regensburg – Lokales Business mit professionellem Online-Auftritt stärken",
    caption: "Einzelhandel Website",
  },
  {
    file: "hero-digitalagentur-regensburg.webp",
    alt: "Google Ads Landingpage Webdesign Regensburg – Conversion-fokussierte Seiten für Online-Marketing Kampagnen",
    caption: "Google Ads Landingpage",
  },
];