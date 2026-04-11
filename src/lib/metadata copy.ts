import { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://linknya.vercel.app"),

  title: {
    default: "website ku",
    template: "%s",
  },

  description:
    "ini website",

  keywords: [
    "website ku",
  ],

  authors: [{ name: "SID23 Team" }],
  creator: "SID23",

  openGraph: {
    title: "Telkom Purwokerto",
    description: "Website ",
    url: "https://linknya.vercel.app",
    siteName: "SID23",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "IMAGE YG SUDAH DI HOSTING",
        width: 1200,
        height: 630,
        alt: "WEBSITE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WEBSITE",
    description: "Website resmi ",
    images: [
      "IMAGE YG SUDAH DI HOSTING",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "",
  category: "education",
};
