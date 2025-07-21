import type { APIRoute } from 'astro';

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/webdesign', changefreq: 'monthly', priority: '0.9' },
  { url: '/seo-agentur', changefreq: 'monthly', priority: '0.9' },
  { url: '/online-marketing', changefreq: 'monthly', priority: '0.9' },
  { url: '/social-media-marketing', changefreq: 'monthly', priority: '0.9' },
  { url: '/blog', changefreq: 'daily', priority: '0.8' },
  { url: '/blog/seo-trends-2025', changefreq: 'monthly', priority: '0.7' },
  { url: '/kontakt', changefreq: 'monthly', priority: '0.7' },
  { url: '/ueber-uns', changefreq: 'monthly', priority: '0.6' },
  { url: '/portfolio', changefreq: 'weekly', priority: '0.6' },
  { url: '/impressum', changefreq: 'yearly', priority: '0.3' },
  { url: '/datenschutz', changefreq: 'yearly', priority: '0.3' },
];

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString() || 'https://ixone.de';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
    <url>
      <loc>${siteUrl}${page.url}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};