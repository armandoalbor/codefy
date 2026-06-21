import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://codefy.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Codefy — Landings premium y software a la medida",
  description:
    "Creamos landings premium, software a la medida, automatización e IA para negocios que quieren verse mejor, vender más y escalar con tecnología real.",
  keywords: [
    "landing page premium",
    "software a la medida",
    "desarrollo web",
    "SaaS",
    "automatización",
    "inteligencia artificial",
    "product studio",
    "Codefy",
  ],
  authors: [{ name: "Codefy" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Codefy",
    title: "Codefy — Landings premium y software a la medida",
    description:
      "Diseñamos experiencias digitales modernas para negocios que quieren verse mejor, vender más y escalar con tecnología real.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codefy — Landings premium y software a la medida",
    description:
      "Diseñamos experiencias digitales modernas para negocios que quieren verse mejor, vender más y escalar con tecnología real.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
