import type { Metadata } from "next";
import { industryRoutes } from "./industry-routes";

export type ContactChannel = "whatsapp" | "phone" | "email";

export type PublicRoute = {
  label: string;
  href:
    | "/"
    | "/website-design"
    | "/erp-systems"
    | "/cybersecurity"
    | "/cybersecurity/netafande"
    | "/cybersecurity/engineering"
    | "/it-infrastructure"
    | "/services"
    | "/solutions"
    | "/projects"
    | "/about"
    | "/contact"
    | "/automation"
    | "/industries"
    | "/industries/veterinary"
    | "/industries/property-management"
    | "/industries/professional-services"
    | "/industries/energy-solar"
    | "/industries/smes"
    | "/projects/veterinary-systems";
  title: string;
  description: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const siteConfig = {
  businessName: "Aptpro Business & IT Solutions",
  shortName: "Aptpro",
  tagline: "Websites. Systems. Secure operations.",
  description:
    "Aptpro is a Kenyan technology consultancy for website design, custom ERP, cybersecurity, IT infrastructure and workflow automation, with scoped remote delivery across East Africa.",
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
    "Hello Aptpro, I would like to discuss a website, business system, cybersecurity or IT infrastructure project.",
  socialLinks: [],
} as const;

export const publicRoutes: PublicRoute[] = [
  {
    label: "Home",
    href: "/",
    title: "Technology Consultancy & Website Development in Kenya",
    description:
      "Aptpro helps Kenyan businesses with professional websites, custom ERP, defensive cybersecurity, IT support and workflow integration. Start with a practical scope.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    label: "Websites",
    href: "/website-design",
    title: "Website Design & Web Development in Kenya",
    description:
      "Professional websites for Kenyan businesses: company sites, redesigns, WordPress, custom Next.js development, SEO foundations and support. Discuss your requirements.",
    changeFrequency: "monthly",
    priority: 0.96,
  },
  {
    label: "ERP & Business Systems",
    href: "/erp-systems",
    title: "Custom ERP Systems & Business Software in Kenya",
    description:
      "Custom ERP and business software for Kenyan organisations: workflows, billing, inventory, RBAC, migration and reporting. Scope a phased implementation with Aptpro.",
    changeFrequency: "monthly",
    priority: 0.94,
  },
  {
    label: "Cybersecurity",
    href: "/cybersecurity",
    title: "Cybersecurity Services in Kenya",
    description:
      "Authorised defensive cybersecurity for Kenyan organisations: assessments, access reviews, hardening and recovery readiness. Discuss a scoped security review.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    label: "NETAFANDE endpoint security",
    href: "/cybersecurity/netafande",
    title: "NETAFANDE Endpoint Security Platform Kenya",
    description: "NETAFANDE is Aptpro's Kenya-first endpoint security and security operations engineering platform, developed for visibility, analysis and controlled response workflows.",
    changeFrequency: "monthly",
    priority: 0.84,
  },
  {
    label: "Cybersecurity engineering",
    href: "/cybersecurity/engineering",
    title: "Cybersecurity Engineering & AI Security Kenya",
    description: "Explore Aptpro's defensive security engineering: NETAFANDE, security automation, AI and data security research, and focused defensive tooling.",
    changeFrequency: "monthly",
    priority: 0.83,
  },  {
    label: "IT & Infrastructure",
    href: "/it-infrastructure",
    title: "IT Infrastructure & Business IT Support in Kenya",
    description:
      "IT support and infrastructure for businesses in Kenya: networks, email, local systems, backups and specialist integrations. Review your environment with Aptpro.",
    changeFrequency: "monthly",
    priority: 0.88,
  },
  {
    label: "Services",
    href: "/services",
    title: "Business Technology & IT Services in Kenya",
    description:
      "Explore Aptpro\u2019s website development, ERP, cybersecurity, infrastructure and automation services for Kenyan businesses. Find the scope that fits your operating needs.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    label: "Solutions",
    href: "/solutions",
    title: "Business Workflow & Technology Consulting in Kenya",
    description:
      "Map manual records, reporting gaps and disconnected workflows with Aptpro. Plan phased technology improvements before choosing software or infrastructure.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    label: "Projects",
    href: "/projects",
    title: "Technology Projects & Engineering Experience in Kenya",
    description:
      "Explore Aptpro\u2019s public engineering experience in veterinary ERP, PACS/DICOM, WordPress and business IT. Active work, implemented support and concepts stay distinct.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    label: "About",
    href: "/about",
    title: "About Our Kenyan Technology Consultancy",
    description:
      "Aptpro Business & IT Solutions combines website development, software engineering, defensive security and infrastructure for Kenyan organisations and scoped regional work.",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    label: "Contact",
    href: "/contact",
    title: "Website & Technology Project Enquiries in Kenya",
    description:
      "Discuss a website, ERP, security, IT or automation project in Kenya with Aptpro. Contact us by WhatsApp, phone or email, or prepare a short project brief.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  { label: "Automation & integration", href: "/automation", title: "Business Automation & System Integration in Kenya", description: "Workflow automation and system integration for Kenyan businesses. Map repeated tasks, review interfaces and scope reporting, approvals and handovers with Aptpro.", changeFrequency: "monthly", priority: 0.82 },
  { label: "Industries", href: "/industries", title: "Industry Technology Solutions in Kenya", description: "Explore Aptpro service scopes for veterinary operations, property managers, professional services, energy businesses and SMEs in Kenya.", changeFrequency: "monthly", priority: 0.8 },
  ...industryRoutes.map((industry): PublicRoute => ({ label: industry.label, href: `/industries/${industry.slug}`, title: industry.title, description: industry.description, changeFrequency: "monthly", priority: 0.72 })),
  { label: "Veterinary engineering case study", href: "/projects/veterinary-systems", title: "Veterinary ERP & PACS Engineering Case Study", description: "Public-safe Aptpro experience around NASCAH ERP, Orthanc PACS/DICOM and laboratory planning. Understand engineering scope and the status of each engagement.", changeFrequency: "monthly", priority: 0.75 },
];

export const navItems = publicRoutes
  .filter((route) => route.href !== "/" && !route.href.startsWith("/industries/") && !route.href.startsWith("/projects/") && !route.href.startsWith("/cybersecurity/"))
  .map(({ label, href }) => ({ label, href }));

export const homeAnchors = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Websites", href: "#websites" },
  { label: "ERP Systems", href: "#erp" },
  { label: "Security & IT", href: "#security" },
  { label: "Featured Work", href: "#work" },
  { label: "Process", href: "#approach" },
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
