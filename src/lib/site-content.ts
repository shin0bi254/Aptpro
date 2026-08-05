export type ContactChannel = "whatsapp" | "phone" | "email";

export const siteConfig = {
  businessName: "Aptpro Business & IT Solutions",
  shortName: "Aptpro",
  tagline: "Practical IT, cybersecurity, software, and operations technology for Kenyan businesses.",
  description:
    "Aptpro helps growing Kenyan organizations keep systems reliable, secure workflows, replace manual processes, and choose technology that supports day-to-day operations.",
  areaServed: "Kenya",
  // Editable placeholders: replace these before launch with verified public details.
  contact: {
    whatsappNumber: "",
    phoneNumber: "",
    email: "",
    location: "",
  },
  // Editable placeholder: add the verified production domain before launch.
  canonicalUrl: "",
  quoteSubject: "Aptpro business technology enquiry",
  whatsappMessage:
    "Hello Aptpro, I would like help with IT support, cybersecurity, software, or business systems for my organization.",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const positioning = [
  "Business-focused solutions",
  "Security built into delivery",
  "Local, responsive support",
  "Systems designed around real workflows",
];

export const businessProblems = [
  {
    problem: "Repeated IT downtime",
    outcome:
      "Stabilize devices, networks, access, backups, and support routines so teams lose less time to preventable disruptions.",
  },
  {
    problem: "Disconnected manual processes",
    outcome:
      "Replace spreadsheets and repeated handoffs with systems that connect operations, billing, records, and reporting.",
  },
  {
    problem: "Weak security and access controls",
    outcome:
      "Assess risk, harden accounts and endpoints, and design roles that protect business data without slowing staff down.",
  },
  {
    problem: "Unreliable networks and business systems",
    outcome:
      "Install, troubleshoot, and document infrastructure so branches, remote sites, and office teams can work consistently.",
  },
  {
    problem: "Limited visibility into operations",
    outcome:
      "Build dashboards, reports, and workflow tools that help owners and managers see what needs attention.",
  },
  {
    problem: "Reactive technology vendors",
    outcome:
      "Move from emergency-only fixes to practical planning, support, documentation, and continuous improvement.",
  },
];

export const services = [
  {
    title: "Managed IT and Infrastructure",
    summary:
      "Keep computers, networks, remote sites, CCTV, email, backups, and workplace systems running with clear support paths.",
    items: ["IT support", "Network setup", "CCTV and remote-site technology", "Microsoft 365 and email"],
  },
  {
    title: "Cybersecurity and Risk",
    summary:
      "Identify weak points, strengthen access, improve endpoint hygiene, and build security into daily operations.",
    items: ["Security assessments", "Account hardening", "Role-based access", "Backup and recovery planning"],
  },
  {
    title: "Business Software and Automation",
    summary:
      "Design custom software, ERP workflows, AI-assisted processes, and automation that reduce manual work.",
    items: ["Custom business apps", "ERP systems", "Workflow automation", "Operational reporting"],
  },
  {
    title: "Web and Digital Platforms",
    summary:
      "Create professional websites and digital platforms that support enquiries, service delivery, and customer trust.",
    items: ["Business websites", "Customer portals", "Digital service platforms", "Conversion-focused pages"],
  },
  {
    title: "Business Systems Support",
    summary:
      "Help teams choose, configure, and troubleshoot practical tools such as QuickBooks, Microsoft 365, and workplace systems.",
    items: ["QuickBooks support", "Tool selection", "Process improvement", "Technology strategy"],
  },
];

export const solutionPaths = [
  {
    title: "I need reliable ongoing IT support",
    detail:
      "For businesses that need responsive help, documented systems, healthier devices, and fewer disruptions.",
  },
  {
    title: "I need to secure my business",
    detail:
      "For teams concerned about account access, data exposure, endpoint protection, backups, and practical risk reduction.",
  },
  {
    title: "I need to replace spreadsheets and manual work",
    detail:
      "For operations that need connected workflows, billing, inventory, reporting, approvals, and role-based records.",
  },
  {
    title: "I need a professional digital presence",
    detail:
      "For organizations that need a credible website or digital platform that helps customers understand and enquire.",
  },
  {
    title: "I need help choosing or fixing business technology",
    detail:
      "For owners and managers who need clear advice before buying, rebuilding, or rescuing a system.",
  },
];

export const nascahErp = {
  title: "NASCAH ERP",
  label: "Flagship solution",
  problem:
    "Veterinary operations can involve cases, clinical notes, billing, inventory, laboratory, imaging, communications, and handovers across different roles.",
  solution:
    "Aptpro designed NASCAH ERP as an integrated veterinary business-management platform focused on connected workflows and controlled access.",
  value:
    "A system like this gives teams a structured way to manage operational records, reduce scattered handovers, and improve visibility for clinical and administrative work.",
  capabilities: [
    "Case and clinical workflow management",
    "Billing, inventory, and reporting",
    "Communications, laboratory, and imaging workflows",
    "Role-based access control and operational handovers",
  ],
};

export const workingApproach = [
  {
    step: "Discover",
    detail: "Understand the business, current tools, pain points, risks, and what success should look like.",
  },
  {
    step: "Diagnose",
    detail: "Review systems, workflows, security gaps, data flow, users, and support constraints before prescribing fixes.",
  },
  {
    step: "Design",
    detail: "Map a practical solution that fits the team, budget, risk level, and operational reality.",
  },
  {
    step: "Implement",
    detail: "Configure, build, migrate, document, and train with minimal disruption to normal business work.",
  },
  {
    step: "Support and improve",
    detail: "Keep systems useful after launch through monitoring, support, refinements, and better documentation.",
  },
];

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
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

export function hasVerifiedContact(channel: ContactChannel) {
  if (channel === "whatsapp") {
    return Boolean(siteConfig.contact.whatsappNumber);
  }

  if (channel === "phone") {
    return Boolean(siteConfig.contact.phoneNumber);
  }

  return Boolean(siteConfig.contact.email);
}
