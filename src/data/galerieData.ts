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
  {
    file: "meisterentruempelung-regensburg.webp",
    alt: "Website für Meister Entrümpelung Regensburg – lokale SEO-Landingpages für mehr Kundenanfragen",
    caption: "Entrümpelung Regensburg",
  },
  {
    file: "zoltis-genusswerkstatt.webp",
    alt: "Zoltis Genusswerkstatt – WordPress-Website mit Rezept-Blog und modernem Food-Design",
    caption: "Genusswerkstatt & Blog",
  },
  {
    file: "relaxedhair.webp",
    alt: "Relaxed Hair Kösching – SEO-optimierte Friseursalon-Website mit Online-Terminbuchung",
    caption: "Friseursalon Website",
  },
  {
    file: "DJkerim-regenstauf.webp",
    alt: "DJ Kerim Regenstauf – Event-Website mit Musik-Integration und Buchungsanfrage",
    caption: "Event & DJ Website",
  },
  {
    file: "rohrglanz-berlin.webp",
    alt: "Rohrglanz Rohrreinigung Berlin – conversion-optimierte Website mit 24/7-Notdienst-Fokus",
    caption: "Notdienst Website",
  },
   {
    file: "akosoft.webp",
    alt: "Handwerker-Webdesign Regensburg – Website für Fußbodenheizung-Spezialist mit klarer Leistungsübersicht",
    caption: "Handwerker Website",
  },
  {
    file: "kosic-fussbodenheizung.webp",
    alt: "Handwerker-Webdesign Regensburg – Website für Fußbodenheizung-Spezialist mit klarer Leistungsübersicht",
    caption: "Handwerker Website",
  },
  {
    file: "SED-IMMOBILIEN.webp",
    alt: "SED Immobilien – Immobilien-Website mit Objektpräsentation und benutzerfreundlicher Navigation",
    caption: "Immobilien Website",
  },
  {
    file: "hsd-service-regensburg.webp",
    alt: "HSD Service Regensburg – WordPress-Website für Gebäudereinigung mit lokalen Landingpages",
    caption: "Gebäudereinigung Website",
  },
  {
    file: "minsa.webp",
    alt: "Minsa Gebäudemanagement – Astro-Website mit blitzschneller Ladezeit und PageSpeed über 90",
    caption: "Gebäudemanagement Website",
  },
  {
    file: "seldafriseur.webp",
    alt: "Selda Friseur – Webdesign für Friseursalon mit Preisliste und Google-Bewertungen",
    caption: "Friseur Website",
  },
  {
    file: "brb-estrichbau.webp",
    alt: "BRB Estrichbau – Handwerker-Website für Estrich-Fachbetrieb mit Leistungsübersicht und Anfrageformular",
    caption: "Estrichbau Website",
  },
  {
    file: "zw-ingenieure.webp",
    alt: "ZW Ingenieure – Corporate Website Webdesign Regensburg für Ingenieurbüro mit Referenzportfolio",
    caption: "Ingenieurbüro Website",
  },
];