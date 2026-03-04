const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "public",
  exclude: ["/api/*", "/404", "/500"],
  changefreq: "monthly",
  priority: 0.7,
  additionalPaths: async (cfg) => {
    const staticPaths = ["/"];

    return Promise.all(staticPaths.map((path) => cfg.transform(cfg, path))).then(
      (items) => items.filter((item) => Boolean(item)),
    );
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap-0.xml`,
    ],
  },
  transform: async (config, path) => {
    // Set homepage as highest priority
    const priority = path === "/" ? 1.0 : 0.7;
    const changefreq = path === "/" ? "weekly" : "monthly";

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
