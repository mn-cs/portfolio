module.exports = {
  siteUrl: "https://haykpash.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  additionalPaths: async (config) => [
    { loc: "/experience", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/education", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/skills", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/contact", lastmod: new Date().toISOString(), priority: 0.8 },
  ],
};
