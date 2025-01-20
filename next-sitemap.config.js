// module.exports = {
//   siteUrl: "https://haykpash.com",
//   generateRobotsTxt: true,
// };

module.exports = {
  siteUrl: "https://haykpash.com",
  generateRobotsTxt: true,
  sitemapSize: 5000, // Ensures all URLs fit into a single sitemap
  generateIndexSitemap: false, // Disables the index sitemap
  additionalPaths: async (config) => [
    { loc: "/", lastmod: new Date().toISOString(), priority: 1.0 },
    { loc: "/experience", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/education", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/skills", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/contact", lastmod: new Date().toISOString(), priority: 0.8 },
  ],
};

// const siteUrl = "https://haykpash.com";

// module.exports = {
//   siteUrl,
//   generateRobotsTxt: true,
//   additionalPaths: async (config) => [
//     { loc: "/", lastmod: new Date().toISOString(), priority: 1.0 },
//     { loc: "/experience", lastmod: new Date().toISOString(), priority: 0.8 },
//     { loc: "/education", lastmod: new Date().toISOString(), priority: 0.8 },
//     { loc: "/skills", lastmod: new Date().toISOString(), priority: 0.8 },
//     { loc: "/contact", lastmod: new Date().toISOString(), priority: 0.8 },
//   ],
// };

// const siteUrl = "https://haykpash.com";

// module.exports = {
//   siteUrl,
//   generateRobotsTxt: true,
//   exclude: [], // Ensure no pages are excluded by default
//   additionalPaths: async (config) => [
//     { loc: "/", lastmod: new Date().toISOString(), priority: 1.0 },
//     { loc: "/experience", lastmod: new Date().toISOString(), priority: 0.8 },
//     { loc: "/education", lastmod: new Date().toISOString(), priority: 0.8 },
//     { loc: "/skills", lastmod: new Date().toISOString(), priority: 0.8 },
//     { loc: "/contact", lastmod: new Date().toISOString(), priority: 0.8 },
//   ],
// };
