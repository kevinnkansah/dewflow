/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://dewflow.xyz',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/500'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://dewflow.xyz'}/server-sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}

export default config;
