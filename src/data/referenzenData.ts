// src/data/referenzenData.ts

export interface ReferenzItem {
  /** Dateiname in src/assets/referenzen/ – nur Dateiname, kein Pfad */
  file: string;
  /** SEO-optimierter Alt-Text */
  alt: string;
  /** Kurze Caption – nur in der Lightbox sichtbar */
  caption: string;
}

export const referenzenData: ReferenzItem[] = [
  {
    file: "vistar.webp",
    alt: "Vistar – moderne Unternehmenswebsite mit klarem Design und Anfragefokus",
    caption: "Unternehmenswebsite",
  },
];