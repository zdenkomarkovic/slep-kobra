import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slep Služba Kobra Beograd | Pouzdano Slepanje Vozila 24/7 | 062 814 2131",
  description: "Profesionalna slep služba Kobra u Beogradu. Dostupni 24/7 na svim lokacijama: Zemun, Surčin, Novi Beograd, Dušanovac, Žarkovo. Brzo i pouzdano slepanje vozila, pomoć na putu, transport automobila. Pozovite 062 814 2131.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "slep služba Beograd",
    "slep služba Zemun",
    "slep služba Surčin",
    "slep služba Novi Beograd",
    "slep služba Dušanovac",
    "slep služba Žarkovo",
    "slepanje vozila",
    "pomoć na putu",
    "slep služba 24h",
    "transport automobila",
    "slep služba Kobra",
    "havarisana vozila",
    "vuča vozila Beograd",
  ],
  alternates: {
    canonical: "https://www.slepsluzbakobra.com/",
  },
  openGraph: {
    title: "Slep Služba Kobra Beograd | Pouzdano Slepanje Vozila 24/7",
    description: "Profesionalna slep služba na svim lokacijama u Beogradu. Dostupni 24/7. Pozovite 062 814 2131.",
    url: "https://www.slepsluzbakobra.com/",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
