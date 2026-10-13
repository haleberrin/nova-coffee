
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
  title: {
    default: "NOVA Coffee | Yavaşla. Anın Tadını Çıkar.",
    template: "%s | NOVA Coffee",
  },
  description:
    "NOVA Coffee'de iyi kahve, taze lezzetler ve keyifli anlar bir arada. Kahvelerimizi, tatlılarımızı ve dijital menümüzü keşfedin.",
  applicationName: "NOVA Coffee",
  keywords: [
    "NOVA Coffee",
    "kahve",
    "kahve dükkanı",
    "özel kahve",
    "tatlı",
    "kahvaltı",
    "dijital menü",
  ],
  openGraph: {
    title: "NOVA Coffee | Yavaşla. Anın Tadını Çıkar.",
    description:
      "İyi kahve, taze lezzetler ve kendinizi iyi hissedeceğiniz bir yer.",
    siteName: "NOVA Coffee",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
