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
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const homeAnchors = [
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

export const serviceCategories = [
  {
    title: "Managed IT and Technical Support",
    description:
      "Responsive support for the devices, accounts, networks, email and everyday systems your team depends on.",
    items: [
      "IT troubleshooting",
      "Workstation and user support",
      "Network configuration and diagnostics",
      "Business email setup and support",
      "Microsoft Outlook configuration",
      "QuickBooks user and access support",
      "Device, software and account setup",
      "Ongoing IT support",
    ],
    action: "Book IT support",
  },
  {
    title: "Cybersecurity",
    description:
      "Practical reviews and hardening work that reduce exposure without making normal business work difficult.",
    items: [
      "Security assessments",
      "Vulnerability identification",
      "Access-control reviews",
      "Network-security reviews",
      "Security hardening",
      "Cybersecurity awareness and operational guidance",
      "Secure system design",
    ],
    action: "Request a security review",
  },
  {
    title: "Software and Business Systems",
    description:
      "Custom systems and automation for businesses that need clearer records, controlled access and better reporting.",
    items: [
      "Custom ERP and operational systems",
      "Workflow digitisation",
      "Dashboards and reporting",
      "Role-based access control",
      "Inventory, billing and customer-management systems",
      "Business process mapping",
      "System integration and automation",
    ],
    action: "Discuss a system",
  },
  {
    title: "Websites and Digital Platforms",
    description:
      "Professional digital platforms that explain your offer clearly and support enquiries, service delivery and trust.",
    items: [
      "Professional company websites",
      "E-commerce and catalogue websites",
      "Website maintenance",
      "Hosting and deployment",
      "Domain and business-email configuration",
      "Search and performance foundations",
    ],
    action: "Plan a website",
  },
  {
    title: "Infrastructure and Networking",
    description:
      "Local, cloud and site infrastructure planned around reliability, maintainability and business continuity.",
    items: [
      "Local server deployment",
      "Intranet systems",
      "Network troubleshooting",
      "CCTV planning and deployment",
      "Remote-access configuration",
      "Cloud and local infrastructure",
      "Backup and business-continuity planning",
    ],
    action: "Review infrastructure",
  },
  {
    title: "Technology Consulting",
    description:
      "Clear technology advice, workflow analysis and roadmaps before you buy, build, migrate or rescue a system.",
    items: [
      "IT strategy",
      "Technology procurement guidance",
      "Operational workflow analysis",
      "Digital transformation planning",
      "Project scoping",
      "Documentation and implementation roadmaps",
    ],
    action: "Request consulting",
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

export const businessSolutions = [
  "Businesses relying on manual records",
  "Disconnected departments and duplicated work",
  "Unclear operational costs and weak reporting",
  "Poor inventory visibility",
  "Unreliable networks and recurring IT problems",
  "Weak access controls and security exposure",
  "Businesses needing professional websites and branded email",
  "Organizations that need affordable systems without enterprise-level complexity",
  "Field teams and outreach programmes that need simple data capture",
  "Growing organizations that need structured workflows and accountability",
].map((title) => ({
  title,
  detail:
    "Aptpro starts with the workflow, identifies risk and friction, then designs a practical improvement path that staff can adopt.",
}));

export const solutionApproach = [
  "Discover the actual operational problem",
  "Map the current workflow",
  "Identify risks and inefficiencies",
  "Design the appropriate solution",
  "Implement in practical phases",
  "Train users and support adoption",
  "Review and improve",
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
    "Case-centred operations",
    "Clinical workflows",
    "Billing and inventory",
    "Laboratory and imaging",
    "Communications and handovers",
    "Reporting",
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

export const projects = [
  {
    name: "NASCAH Veterinary ERP",
    category: "Veterinary operations platform",
    problem:
      "Veterinary work involves customers, animals, clinical cases, appointments, triage, consultations, laboratory, imaging, pharmacy, inventory, billing, reporting and communications across different roles.",
    role:
      "Active development and implementation engagement for an integrated ERP with role-based access, local intranet deployment planning and staged migration where appropriate.",
    capabilities: ["ERP workflows", "Clinical operations", "Inventory and billing", "Role-based access"],
    status: "Active development",
  },
  {
    name: "Veterinary Imaging and PACS",
    category: "Clinical imaging infrastructure",
    problem: "Imaging workflows need reliable local access, organized studies and connectivity between imaging equipment and clinical teams.",
    role:
      "Configuration and integration work involving Orthanc PACS, CT, X-ray and ultrasound workflows, DICOM connectivity and local imaging access.",
    capabilities: ["Orthanc PACS", "DICOM workflows", "Local imaging access"],
    status: "Technical implementation",
  },
  {
    name: "Laboratory Integration",
    category: "Clinical systems planning",
    problem: "Laboratory activity needs to connect with clinical records without creating duplicated entry or unclear handovers.",
    role: "Technical planning and integration work involving veterinary laboratory equipment and clinical-system workflows.",
    capabilities: ["Integration planning", "Clinical workflow mapping", "System design"],
    status: "Technical planning",
  },
  {
    name: "Tesni Energies Website",
    category: "Solar-energy website",
    problem: "A solar-energy business needed clearer service presentation and troubleshooting support for its web presence.",
    role:
      "Website work including service structure, WordPress troubleshooting and presentation of residential, commercial, installation, maintenance, storage and consultation services.",
    capabilities: ["Website structure", "WordPress support", "Service presentation"],
    status: "Implemented support",
  },
  {
    name: "Pet Food E-commerce Concept",
    category: "Retail ordering concept",
    problem: "A pet-food business needed a simple way to present products and guide customers toward enquiry or ordering.",
    role: "Product catalogue, cart and WhatsApp-assisted ordering experience designed for a pet-food business.",
    capabilities: ["Catalogue design", "Cart flow", "WhatsApp ordering"],
    status: "Technical concept",
  },
  {
    name: "Farm CCTV Solution",
    category: "Remote-site technology",
    problem: "A rural farm environment needs monitoring that accounts for power, connectivity, coverage and remote access.",
    role:
      "Planning for a solar-powered 4G CCTV deployment with attention to coverage, connectivity, power and remote monitoring.",
    capabilities: ["CCTV planning", "4G connectivity", "Solar power considerations"],
    status: "Deployment planning",
  },
  {
    name: "Business IT Support",
    category: "Operational support",
    problem: "Everyday IT issues interrupt work when networks, accounting users, email and workstation setup are not handled quickly.",
    role:
      "Network-adapter troubleshooting, network issue resolution, QuickBooks user support, business-email creation, password resets and Outlook configuration.",
    capabilities: ["Troubleshooting", "QuickBooks support", "Email and Outlook"],
    status: "Implemented support",
  },
  {
    name: "Business Email and Domain Infrastructure",
    category: "Workplace systems",
    problem: "Professional communication needs reliable DNS, domain and branded-email configuration.",
    role: "Domain, DNS and branded-email configuration for professional business communication.",
    capabilities: ["DNS", "Domain setup", "Business email"],
    status: "Implemented support",
  },
  {
    name: "Local Server and Intranet Deployment",
    category: "Local infrastructure",
    problem: "Some business applications need reliable multi-computer access without exposing private systems publicly.",
    role: "Windows-based local hosting and multi-computer access planning for business applications.",
    capabilities: ["Local hosting", "Intranet planning", "Windows deployment"],
    status: "Deployment planning",
  },
  {
    name: "Pastoral Livestock Outreach Data System",
    category: "Field-data concept",
    problem: "Outreach work needs lightweight records for owners, herds, animal categories, treatments and medication issued.",
    role:
      "A lightweight field-data concept for recording owners, herd details, animal categories, treatments and medication issued during veterinary outreach work.",
    capabilities: ["Field data capture", "Veterinary records", "Simple reporting"],
    status: "Technical concept",
  },
  {
    name: "Security and Network Diagnostic Tool Concept",
    category: "Cybersecurity diagnostics",
    problem: "Support teams need structured diagnostics and reporting for authorized security and network reviews.",
    role:
      "A command-line cybersecurity and network-scanning concept focused on structured diagnostics and reporting for authorized environments.",
    capabilities: ["Network diagnostics", "Security reporting", "CLI tooling"],
    status: "Technical concept",
  },
  {
    name: "Workflow and Cost-Mapping Consulting",
    category: "Operations consulting",
    problem: "Small businesses often need to understand workflows, expenses, pricing and reporting before changing systems.",
    role:
      "Operational mapping concepts for service businesses and training studios that need clearer workflows, expenses, pricing and reporting.",
    capabilities: ["Workflow mapping", "Cost analysis", "Reporting structure"],
    status: "Consulting concept",
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
