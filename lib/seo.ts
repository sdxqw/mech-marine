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
  name: "MECH MARINE S.R.L.",
  shortName: "Mech Marine",
  description:
    "MECH MARINE S.R.L. – Eccellenza nella meccanica navale dal 2021. Specializzati in manutenzione motori, lavorazioni meccaniche di precisione e assistenza tecnica per aliscafi, catamarani e navi ad alta velocità. Sedi a Messina e Milazzo.",
  keywords: [
    "meccanica navale",
    "manutenzione navale",
    "manutenzione motori marini",
    "lavorazioni meccaniche di precisione",
    "assistenza aliscafi",
    "assistenza catamarani",
    "navi alta velocità",
    "meccanica generale Messina",
    "meccanica generale Milazzo",
    "MECH MARINE",
    "Liberty Lines assistenza",
    "Navigazione Laghi manutenzione",
    "riparazioni navali Sicilia",
    "officina meccanica navale",
    "ATECO 255300",
    "meccanica marina Mediterraneo",
  ],
  author: "MECH MARINE S.R.L.",
};

export const siteMetadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteConfig.name} | Eccellenza nella Meccanica Navale`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    title: `${siteConfig.name} – Meccanica Navale di Precisione`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Meccanica Navale`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IT-ME",
    "geo.placename": "Messina",
    "geo.position": "38.1938;15.5540",
    "ICBM": "38.1938, 15.5540",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

