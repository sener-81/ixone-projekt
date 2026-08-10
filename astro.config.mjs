import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ixone.de',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      lastmod: new Date(),
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});