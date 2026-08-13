import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

const socialImage = [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Aptpro Business & IT Solutions landing page preview",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalOrigin),
  title: {
    default: `${siteConfig.businessName} | Secure IT Support, Systems & Automation in Kenya`,
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
    title: `${siteConfig.businessName} | Technology that keeps your business moving`,
    description: siteConfig.description,
    url: siteConfig.canonicalOrigin,
    locale: "en_KE",
    images: socialImage,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Secure IT Support in Kenya`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
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
