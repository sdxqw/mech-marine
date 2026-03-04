import type { Metadata } from "next";

const defaultUrl = "http://localhost:3000";

function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL || defaultUrl;

  try {
    return new URL(value);
  } catch {
    return new URL(defaultUrl);
  }
}

export const siteConfig = {
  name: "Website Template",
  shortName: "Template",
  description:
    "Next.js template with shadcn/ui, Docker, GitHub Actions, and production-ready defaults.",
  keywords: ["nextjs", "shadcn", "docker", "github actions", "template"],
  author: "Your Name",
};

export const siteMetadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};
