import type { Metadata } from "next";

export type ContactChannel = "whatsapp" | "phone" | "email";

export type PublicRoute = {
  label: string;
  href: "/" | "/services" | "/solutions" | "/projects" | "/about" | "/contact";
  title: string;
  description: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const siteConfig = {
  businessName: "Aptpro Business & IT Solutions",
  shortName: "Aptpro",
  tagline: "Technology that keeps your business moving.",
  description:
    "Secure IT support, cybersecurity, business systems, automation, and digital platforms for growing Kenyan organizations.",
  areaServed: "Kenya",
  primaryDomain: "aptpro.co.ke",
  canonicalOrigin: "https://aptpro.co.ke",
  wwwDomain: "www.aptpro.co.ke",
  contact: {
    whatsappNumber: "254721494510",
    phoneNumber: "0721494510",
    email: "info@aptpro.co.ke",
    location: "Kenya",
  },
  quoteSubject: "Technology support consultation request for Aptpro",
  whatsappMessage:
    "Hello Aptpro, I would like to discuss technology support for my business.",
  socialLinks: [],
} as const;

export const publicRoutes: PublicRoute[] = [
  {
    label: "Home",
    href: "/",
    title: "Secure IT Support, Systems & Automation in Kenya",
    description:
      "Aptpro Business & IT Solutions provides practical IT support, cybersecurity, business systems, automation, websites and infrastructure support for growing Kenyan organizations.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    label: "Services",
    href: "/services",
    title: "Managed IT, Cybersecurity & Business Technology Services",
    description:
      "Explore Aptpro services for managed IT support, cybersecurity, custom software, websites, infrastructure, networking and technology consulting in Kenya.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    label: "Solutions",
    href: "/solutions",
    title: "Business Technology Solutions for Growing Organizations",
    description:
      "Aptpro structures technology solutions around manual records, reporting gaps, weak access controls, unreliable networks and workflow problems.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    label: "Projects",
    href: "/projects",
    title: "Projects and Technology Implementation Experience",
    description:
      "Review selected Aptpro experience across ERP systems, clinical imaging, laboratory workflows, websites, CCTV planning, business IT support and operational concepts.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    label: "About",
    href: "/about",
    title: "About Aptpro Business & IT Solutions",
    description:
      "Learn about Aptpro, a Kenyan business and technology consultancy focused on practical IT support, cybersecurity-aware engineering and operational improvement.",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    label: "Contact",
    href: "/contact",
    title: "Contact Aptpro for IT Support and Consultation",
    description:
      "Contact Aptpro by WhatsApp, phone or info@aptpro.co.ke, or prepare a transparent consultation enquiry that opens in your own app.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

export const navItems = publicRoutes
  .filter((route) => route.href !== "/")
  .map(({ label, href }) => ({ label, href }));

export const homeAnchors = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Featured Work", href: "#work" },
  { label: "How We Work", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteConfig.canonicalOrigin}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getPublicRoute(path: PublicRoute["href"]) {
  return publicRoutes.find((route) => route.href === path);
}

export function createRouteMetadata(path: PublicRoute["href"]): Metadata {
  const route = getPublicRoute(path);
  const title = route?.title ?? siteConfig.businessName;
  const description = route?.description ?? siteConfig.description;
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.businessName,
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url,
      locale: "en_KE",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.businessName} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function getWhatsAppUrl(message: string = siteConfig.whatsappMessage) {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return "";
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getMailToUrl(body?: string) {
  if (!siteConfig.contact.email) {
    return "";
  }

  const params = new URLSearchParams({
    subject: siteConfig.quoteSubject,
    body: body ?? siteConfig.whatsappMessage,
  });

  return `mailto:${siteConfig.contact.email}?${params.toString()}`;
}

export function getPhoneUrl() {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return "";
  }

  return `tel:+${number}`;
}

export function hasVerifiedContact(channel: ContactChannel) {
  if (channel === "whatsapp") {
    return Boolean(siteConfig.contact.whatsappNumber);
  }

  if (channel === "phone") {
    return Boolean(siteConfig.contact.phoneNumber);
  }

  return Boolean(siteConfig.contact.email);
}
