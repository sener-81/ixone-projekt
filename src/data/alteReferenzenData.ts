// ═══════════════════════════════════════════════════════════════
// src/data/alteReferenzenData.ts
//
// Datenquelle NUR für das Carousel der alten Referenzen
// auf der Seite /referenzen/ (unterhalb der Galerie).
//
// BILDER ABLEGEN: src/assets/alte-referenzen/
// DATEINAMEN: SEO-freundlich, nur Kleinbuchstaben, keine Leerzeichen
//
// ALT-TEXT TIPPS:
//   ✓ Beschreibe was auf dem Bild zu sehen ist
//   ✓ Baue relevante Keywords natürlich ein
//   ✓ Max. 125 Zeichen
//   ✗ Kein Keyword-Stuffing
//   ✗ Nicht "Bild von..." oder "Foto von..."
// ═══════════════════════════════════════════════════════════════

export interface AlteReferenzItem {
  /** Dateiname in src/assets/alte-referenzen/ – nur Dateiname, kein Pfad */
  file: string;
  /** SEO-optimierter Alt-Text */
  alt: string;
}

export const alteReferenzenData: AlteReferenzItem[] = [
 {
    file: "akosoft.webp",
    alt: "Akosoft – Unternehmenswebsite mit Leistungsübersicht, Webdesign von ixOne Regensburg",
  },
  // weitere alte Referenzen hier ergänzen …
];
