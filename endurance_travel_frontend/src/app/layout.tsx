import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Endurance Travel Adventures - Epic Adventure Travel Experiences",
    template: "%s | Endurance Travel Adventures"
  },
  description: "Discover extraordinary adventure travel experiences with Endurance Travel Adventures. From mountain expeditions to wilderness journeys, create memories that last a lifetime.",
  keywords: ["adventure travel", "expedition", "outdoor adventures", "travel experiences", "wilderness", "mountain climbing"],
  authors: [{ name: "Endurance Travel Adventures" }],
  creator: "Endurance Travel Adventures",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://endurancetraveladventures.com",
    siteName: "Endurance Travel Adventures",
    title: "Endurance Travel Adventures - Epic Adventure Travel Experiences",
    description: "Discover extraordinary adventure travel experiences with expert guides and premium service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Endurance Travel Adventures"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Endurance Travel Adventures",
    description: "Epic adventure travel experiences worldwide",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
