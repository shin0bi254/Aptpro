import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.canonicalUrl ? new URL(siteConfig.canonicalUrl) : undefined,
  title: {
    default: `${siteConfig.businessName} | IT Support, Cybersecurity, Software & Automation in Kenya`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.businessName,
  keywords: [
    "IT support Kenya",
    "cybersecurity Kenya",
    "business software Kenya",
    "managed IT support",
    "ERP systems Kenya",
    "Aptpro",
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Business & IT Solutions`,
    description: siteConfig.description,
    locale: "en_KE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Aptpro Business & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Business & IT Solutions`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  alternates: siteConfig.canonicalUrl
    ? {
        canonical: siteConfig.canonicalUrl,
      }
    : undefined,
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
