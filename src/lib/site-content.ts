export type ContactChannel = "whatsapp" | "phone" | "email";

export const siteConfig = {
  businessName: "Aptpro Business & IT Solutions",
  shortName: "Aptpro",
  tagline: "Technology that keeps your business moving.",
  description:
    "Secure IT support, cybersecurity, business systems, automation, and digital platforms for growing Kenyan organizations.",
  areaServed: "Kenya",
  contact: {
    whatsappNumber: "254721494510",
    phoneNumber: "0721494510",
    email: "aptpro@nascah.co.ke",
    secondaryEmail: "tednganga99@gmail.com",
    location: "Kenya",
  },
  // No deployed Cloudflare URL was verified in this repository. Add it here when confirmed.
  canonicalUrl: "",
  // Local fallback used only to resolve metadata asset URLs during static builds.
  metadataBaseUrl: "http://localhost:3000",
  quoteSubject: "Technology support consultation request for Aptpro",
  whatsappMessage:
    "Hello Aptpro, I would like to discuss technology support for my business.",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Featured Work", href: "#work" },
  { label: "How We Work", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const positioning = [
  {
    title: "Business-first technology",
    detail: "Recommendations start with operations, cost, risk, and the way your team actually works.",
  },
  {
    title: "Security built into delivery",
    detail: "Access, backups, roles, and data protection are considered from the start.",
  },
  {
    title: "Practical local support",
    detail: "Clear help for Kenyan businesses that need problems diagnosed and resolved without theatre.",
  },
  {
    title: "Designed around real operations",
    detail: "Systems are shaped around workflows, handovers, reports, and daily business pressure.",
  },
];

export const businessProblems = [
  {
    problem: "Frequent downtime and recurring IT issues",
    outcome:
      "Stabilize devices, networks, access, backups, and support routines so teams lose less time to preventable disruptions.",
  },
  {
    problem: "Weak access control and cybersecurity",
    outcome:
      "Assess risk, harden accounts and endpoints, and design roles that protect business data without slowing staff down.",
  },
  {
    problem: "Manual spreadsheets and disconnected processes",
    outcome:
      "Replace repeated handoffs with systems that connect operations, billing, records, approvals, and reporting.",
  },
  {
    problem: "Unreliable networks and workplace systems",
    outcome:
      "Install, troubleshoot, and document infrastructure so branches, remote sites, and office teams can work consistently.",
  },
  {
    problem: "Poor visibility into business operations",
    outcome:
      "Build dashboards, reports, and workflow tools that help owners and managers see what needs attention.",
  },
  {
    problem: "Vendors who only respond after something breaks",
    outcome:
      "Move from emergency-only fixes to practical planning, support, documentation, and continuous improvement.",
  },
];

export const services = [
  {
    title: "Managed IT & Infrastructure",
    problem:
      "Devices, networks, email, remote sites, and CCTV become expensive when support is reactive and undocumented.",
    delivery:
      "Aptpro provides support routines, troubleshooting, setup, documentation, Microsoft 365 and email support, networks, CCTV, backups, and infrastructure improvement.",
    value:
      "Your team gets clearer support paths, healthier systems, and fewer avoidable interruptions.",
    items: ["Managed IT support", "Network installation", "CCTV and remote-site technology", "Microsoft 365 and email"],
    action: "Get IT support",
  },
  {
    title: "Cybersecurity & Risk",
    problem:
      "Weak passwords, loose access, unmanaged devices, and poor backup habits leave business data exposed.",
    delivery:
      "Aptpro assesses risks, hardens accounts and endpoints, improves access control, reviews backup posture, and builds practical security routines.",
    value:
      "Security becomes part of daily operations without making normal work unnecessarily difficult.",
    items: ["Cybersecurity assessments", "Account hardening", "Role-based access", "Backup and recovery planning"],
    action: "Request a security review",
  },
  {
    title: "Custom Software & Automation",
    problem:
      "Manual spreadsheets, repeated handovers, and disconnected tools hide work and slow decisions.",
    delivery:
      "Aptpro designs custom software, ERP workflows, dashboards, AI-assisted processes, integrations, and automation around your real operating model.",
    value:
      "Teams spend less time chasing records and more time acting on clear, connected information.",
    items: ["Custom business apps", "ERP systems", "Workflow automation", "Operational reporting"],
    action: "Discuss automation",
  },
  {
    title: "Web & Digital Platforms",
    problem:
      "A weak website or fragmented digital experience can make a capable business look unclear or difficult to trust.",
    delivery:
      "Aptpro builds professional websites, customer portals, digital service platforms, and conversion-focused landing pages.",
    value:
      "Customers understand what you offer faster and have clearer ways to enquire or access services.",
    items: ["Business websites", "Customer portals", "Digital platforms", "Conversion-focused pages"],
    action: "Plan a digital platform",
  },
  {
    title: "Business Systems Support",
    problem:
      "Useful tools such as QuickBooks, Microsoft 365, and workplace systems can underperform when setup and workflows are unclear.",
    delivery:
      "Aptpro helps choose, configure, troubleshoot, document, and improve business systems and technology strategy.",
    value:
      "Your tools fit the business better and are easier for staff to use consistently.",
    items: ["QuickBooks support", "Tool selection", "Process improvement", "Technology strategy"],
    action: "Improve business systems",
  },
];

export const solutionPaths = [
  {
    title: "I need reliable ongoing IT support",
    detail:
      "Responsive help, documented systems, healthier devices, better networks, and fewer preventable disruptions.",
  },
  {
    title: "I need to secure my organization",
    detail:
      "Practical improvements for account access, data exposure, endpoint protection, backups, and staff routines.",
  },
  {
    title: "I need to replace manual processes",
    detail:
      "Connected workflows for billing, inventory, reporting, approvals, customer records, and operational handovers.",
  },
  {
    title: "I need a professional digital presence",
    detail:
      "A credible website or platform that explains your services clearly and makes enquiries easier.",
  },
  {
    title: "I need to fix or improve business technology",
    detail:
      "Clear advice before buying, rebuilding, securing, automating, or rescuing an existing system.",
  },
];

export const nascahErp = {
  title: "NASCAH ERP",
  label: "Featured work",
  problem:
    "Veterinary operations can involve cases, clinical notes, billing, inventory, laboratory, imaging, communications, and handovers across different roles.",
  solution:
    "Aptpro designed NASCAH ERP as an integrated veterinary business-management platform focused on case-centred workflows, controlled access, and operational visibility.",
  value:
    "The system gives teams a structured way to manage records, reduce scattered handovers, and support clinical and administrative work from one coordinated platform.",
  capabilities: [
    "Case-centred clinical workflow management",
    "Billing, inventory, and reporting",
    "Laboratory and imaging integration workflows",
    "Communications and operational handovers",
    "Role-based access control",
    "Security-aware system design",
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
    detail: "Keep systems useful after launch through support, refinements, better documentation, and continuous improvement.",
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
