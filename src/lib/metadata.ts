import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://sisfo23d-telkom.vercel.app"),

  title: {
    default: "SID23 Telkom Purwokerto",
    template: "%s",
  },

  description:
    "Ini dia website kelas Sistem Informasi D (S1SI-07-D) Angkatan 2023 Telkom University Purwokerto. Tempat kumpulnya cerita, kegiatan, dokumentasi, dan momen seru anak-anak SID 2023. Dibuat santai aja, yang penting seru dan penuh kenangan selama kuliah bareng.",

  keywords: [
    "S1SI 23",
    "SID23",
    "S1SI 23 D",
    "SISFO 23",
    "Sistem Informasi 23",
    "Sistem Informasi",
    "Sistem Informasi Telkom University",
    "kelas sistem informasi",
    "sisfo 23 telkom",
    "Telkom University",
    "Telkom University Purwokerto",
    "Telkom Purwokerto",
    "mahasiswa telkom pwt",
    "kelas sistem informasi telkom purwokerto",
    "anggota kelas SID23 telkom",
    "website resmi sistem informasi telkom purwokerto",
    "informasi kelas sistem informasi telkom",
    "mahasiswa sistem informasi angkatan 23 telkom",
    "sisfo telkom pwt",
    "sid23 telkom pwt",
    "jadwal kuliah sistem informasi telkom",
    "kegiatan mahasiswa sisfo telkom",
  ],

  authors: [{ name: "SID23 Team" }],
  creator: "SID23",

  openGraph: {
    title: "SID23 Telkom Purwokerto",
    description: "Website resmi kelas D23 Sistem Informasi Telkom Purwokerto.",
    url: "https://sisfo23d-telkom.vercel.app",
    siteName: "SID23",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/rTbsfH8/Whats-App-Image-2026-04-02-at-18-21-33.jpg",
        width: 1200,
        height: 630,
        alt: "SID23 Telkom Purwokerto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SID23 Telkom",
    description: "Website resmi kelas D23 Sistem Informasi Telkom Purwokerto.",
    images: [
      "https://i.ibb.co.com/rTbsfH8/Whats-App-Image-2026-04-02-at-18-21-33.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "SID23 Telkom",
  category: "education",
};
