import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://daru.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daru — Digital Product Builder",
    template: "%s — Daru",
  },
  description:
    "Product strategy, AI, full-stack development, and brand systems — brought together to solve real operational and community problems. Portfolio of Daru, a digital product builder based between Indonesia and Cairo.",
  openGraph: {
    type: "website",
    siteName: "Daru — Digital Product Builder",
    title: "Daru — Digital Product Builder",
    description:
      "Product strategy, AI, full-stack development, and brand systems — brought together to solve real operational and community problems.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Daru — Digital Product Builder",
    description:
      "Product strategy, AI, full-stack development, and brand systems — brought together to solve real operational and community problems.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
