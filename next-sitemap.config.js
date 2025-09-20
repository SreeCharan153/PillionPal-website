/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pillionpal.vercel.app', // Your production URL
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 5000, // max URLs per sitemap file
  changefreq: 'weekly', // optional: how often pages are updated
  priority: 0.8, // optional: default priority for pages
};