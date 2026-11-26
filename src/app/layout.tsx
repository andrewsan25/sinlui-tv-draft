import type { Metadata } from "next";
import {
  Instrument_Serif,
  Inter,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollOwlCompanion } from "@/components/layout/ScrollOwlCompanion";
import { SITE_CONFIG } from "@/data/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — Dokumentasi, Videografi & Broadcasting Sekolah`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-600 antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollOwlCompanion />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
