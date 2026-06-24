import type { Metadata, Viewport } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Full-Stack Developer`,
    template: `%s — ${site.name}`,
  },
  description:
    "Full-stack developer from Kosovo building production-ready web applications — from backend APIs to polished frontends.",
  keywords: [
    "Yll Veliu",
    "Full-Stack Developer",
    "Kosovo",
    "React",
    "Next.js",
    "FastAPI",
    "TypeScript",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — Full-Stack Developer`,
    description:
      "I build production-ready web applications — from backend APIs to polished frontends.",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full-Stack Developer`,
    description:
      "I build production-ready web applications — from backend APIs to polished frontends.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} bg-bg font-sans text-fg antialiased`}
      >
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
