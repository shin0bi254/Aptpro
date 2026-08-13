export {
  absoluteUrl,
  createRouteMetadata,
  getMailToUrl,
  getPhoneUrl,
  getWhatsAppUrl,
  hasVerifiedContact,
  homeAnchors,
  navItems,
  publicRoutes,
  siteConfig,
} from "./site-config";
export type { ContactChannel, PublicRoute } from "./site-config";

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
    title: "Website Design & Development",
    problem:
      "A weak website makes a capable business look unclear, slow to trust, or difficult to contact.",
    delivery:
      "Aptpro builds business websites, company profiles, e-commerce foundations, redesigns, WordPress support plans and custom Next.js websites with performance, security and SEO foundations.",
    value:
      "Customers understand your offer faster, trust the business sooner and have clearer ways to enquire.",
    items: ["Company websites", "E-commerce foundations", "Website redesign", "SEO and maintenance"],
    action: "Plan a website",
    href: "/website-design",
  },
  {
    title: "ERP & Business Systems",
    problem:
      "Manual records, duplicated spreadsheets and disconnected tools hide work from managers and slow staff down.",
    delivery:
      "Aptpro designs custom ERP systems, workflow digitisation, dashboards, role-based access, reporting and integrations around the way the operation actually works.",
    value:
      "Teams get clearer records, controlled approvals, better reporting and phased systems they can adopt.",
    items: ["Custom ERP", "Workflow mapping", "Dashboards", "Role-based access"],
    action: "Discuss an ERP",
    href: "/erp-systems",
  },
  {
    title: "Cybersecurity",
    problem:
      "Weak account controls, unmanaged devices, exposed websites and poor backup habits create avoidable business risk.",
    delivery:
      "Aptpro provides authorised, defensive assessments, access-control reviews, vulnerability management, website security, hardening and incident-readiness planning.",
    value:
      "Security becomes a practical operating discipline rather than an afterthought or a scare tactic.",
    items: ["Security reviews", "Access hardening", "Website security", "Backup readiness"],
    action: "Request a security review",
    href: "/cybersecurity",
  },
  {
    title: "IT & Infrastructure",
    problem:
      "Devices, networks, email, local servers, CCTV and specialist systems become expensive when support is reactive and undocumented.",
    delivery:
      "Aptpro supports managed IT, networks, business email, Outlook, QuickBooks access, local intranets, cloud deployment, backups, remote access and CCTV planning.",
    value:
      "The working environment becomes easier to support, document, recover and improve.",
    items: ["Managed IT", "Networks", "Business email", "Local and cloud infrastructure"],
    action: "Review infrastructure",
    href: "/it-infrastructure",
  },
  {
    title: "Technology Consulting",
    problem:
      "Buying or rebuilding technology without understanding the workflow can lock a business into the wrong solution.",
    delivery:
      "Aptpro maps workflows, risks, costs, users, data movement and adoption constraints before recommending a practical build, support or improvement path.",
    value:
      "Decisions are clearer before money is spent, systems are built in phases and documentation survives the launch.",
    items: ["Discovery", "Process mapping", "Risk analysis", "Implementation roadmaps"],
    action: "Scope a project",
    href: "/services",
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

export const servicePageContent = {
  websiteDesign: {
    eyebrow: "Website design Nairobi",
    title: "Business websites built for credibility, conversion and maintainable growth.",
    intro:
      "Aptpro designs and develops professional websites for Nairobi and Kenyan businesses that need more than attractive pages. The work connects positioning, enquiry flow, search visibility, speed, security, hosting and ongoing maintenance.",
    outcomes: [
      "A clearer first impression for customers comparing providers online",
      "Stronger enquiry paths through WhatsApp, email and structured calls to action",
      "Fast, static-friendly builds with practical SEO foundations",
      "Secure deployment choices, business-email support and documented maintenance",
    ],
    builds: [
      "Company and service websites",
      "Website redesigns",
      "E-commerce and catalogue websites",
      "Custom Next.js websites",
      "WordPress support and recovery",
      "Landing pages for campaigns or offers",
      "Customer portals and digital platforms when the scope requires software engineering",
    ],
    process: [
      "Positioning and service-architecture review",
      "Content structure, conversion paths and sitemap",
      "Visual design system and responsive interface",
      "Development with performance, accessibility and security foundations",
      "SEO metadata, structured data, sitemap and launch checks",
      "Hosting, domain, business-email and maintenance planning",
    ],
    considerations: [
      "Pricing depends on scope, content readiness, integrations, e-commerce depth, number of pages and maintenance requirements.",
      "Aptpro can support WordPress where it is the right fit, and can build custom Next.js websites when performance, control and long-term maintainability matter.",
      "Website work is treated as a business system: customers must understand the offer, trust it and know what to do next.",
    ],
    faqs: [
      {
        question: "Does Aptpro offer website design in Nairobi?",
        answer:
          "Yes. Aptpro supports Nairobi and Kenyan businesses with company websites, website redesigns, e-commerce foundations, custom Next.js websites, WordPress support, SEO foundations, hosting and maintenance planning.",
      },
      {
        question: "Can Aptpro help with domain and business email setup?",
        answer:
          "Yes. Aptpro can help plan and configure domain, hosting and business-email requirements as part of a website or infrastructure engagement.",
      },
      {
        question: "Do you publish fixed website packages?",
        answer:
          "No fixed price is published because scope, content, integrations, functionality and support requirements vary. Aptpro first clarifies the business objective and then scopes a practical delivery path.",
      },
      {
        question: "Can Aptpro maintain an existing WordPress website?",
        answer:
          "Aptpro can support WordPress websites, diagnose problems, improve structure and advise when a rebuild or custom implementation would be more maintainable.",
      },
    ],
  },
  erpSystems: {
    eyebrow: "Custom ERP systems Kenya",
    title: "Business systems designed around workflows, roles, records and reporting.",
    intro:
      "Aptpro helps growing SMEs digitise operations in practical phases. The focus is not generic software theatre: it is clear customer records, inventory, billing, service delivery, approvals, dashboards, communication and audit trails that match how staff work.",
    industries: [
      "Healthcare and veterinary operations",
      "Retail and inventory-led businesses",
      "Professional services",
      "Training and education businesses",
      "Field-service teams",
      "Agriculture and outreach programmes",
      "Property and facility operations",
      "Growing SMEs with manual workflows",
    ],
    capabilities: [
      "Customer management",
      "Inventory and procurement",
      "Billing and payments workflow",
      "Appointments and service delivery",
      "Role-based access",
      "Reports and dashboards",
      "Documented approvals and audit trails",
      "Local intranet or cloud deployment planning",
      "Integrations where technically and commercially appropriate",
    ],
    process: [
      "Operational discovery",
      "Workflow mapping",
      "Requirements and risk analysis",
      "System architecture",
      "Phased implementation",
      "Data preparation and migration",
      "User testing",
      "Training",
      "Deployment",
      "Support and continuous improvement",
    ],
    caseStudy:
      "NASCAH ERP is an active development and implementation engagement for complex veterinary operations. It demonstrates reusable ERP capabilities across customer management, service delivery, clinical workflows, inventory, billing, communication, reporting and access control without making veterinary work Aptpro's whole identity.",
  },
  cybersecurity: {
    eyebrow: "Defensive cybersecurity services Kenya",
    title: "Security reviews and hardening for authorised business environments.",
    intro:
      "Aptpro focuses on defensive cybersecurity: reducing practical business risk through assessment, access control, secure configuration, vulnerability management and recovery readiness. The goal is safer operations, not fear-based theatre.",
    services: [
      "Security assessments",
      "Vulnerability management",
      "Access-control reviews",
      "Website security reviews",
      "Network hardening",
      "Security configuration reviews",
      "Backup and recovery reviews",
      "Security awareness",
      "Risk prioritisation",
      "Secure architecture",
      "Incident-readiness planning",
      "Security-conscious software development",
    ],
    principles: [
      "Work only in authorised environments",
      "Prioritise risk by business impact",
      "Harden identity, backups, endpoints, networks and web surfaces",
      "Document findings in plain language",
      "Turn security into routines that staff can follow",
    ],
  },
  infrastructure: {
    eyebrow: "Managed IT services Nairobi",
    title: "Structured IT and infrastructure support for the technology staff depend on.",
    intro:
      "Aptpro treats infrastructure as a business service: documented, supportable and aligned with continuity. The work covers daily IT support, networks, email, local servers, cloud deployment, remote access, backups and specialist systems.",
    services: [
      "Managed IT support",
      "Network setup and troubleshooting",
      "Local servers and intranets",
      "Cloud deployment",
      "User and device support",
      "Business email and Microsoft Outlook",
      "QuickBooks access support",
      "Backup planning",
      "Remote access",
      "CCTV planning",
      "PACS and specialist-system integration",
      "Business continuity",
    ],
    supportModel: [
      "Diagnose the environment before changing it",
      "Document access, devices, services and recovery steps",
      "Separate quick fixes from structural improvements",
      "Plan deployments around connectivity, power, users and risk",
      "Keep private infrastructure details out of public-facing material",
    ],
  },
};

export const projectGroups = [
  "Websites and digital platforms",
  "ERP and business systems",
  "Cybersecurity and infrastructure",
  "Specialist integrations",
  "Concepts and deployment planning",
];

export const externalSeoChecklist = [
  "Google Business Profile setup and maintenance",
  "Google Search Console verification and sitemap submission",
  "Bing Webmaster Tools verification",
  "Consistent business-directory citations",
  "Ethical client review collection after approved work",
  "Project backlinks from client sites where appropriate",
  "Portfolio outreach and local citations",
  "Regular useful content based on real customer questions",
  "Performance monitoring after deployment",
  "Search-query tracking and monthly SEO review",
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
    category: "ERP and business systems",
    problem:
      "Veterinary work involves customers, animals, clinical cases, appointments, triage, consultations, laboratory, imaging, pharmacy, inventory, billing, reporting and communications across different roles.",
    role:
      "Active development and implementation engagement for an integrated ERP with role-based access, local intranet deployment planning and staged migration where appropriate.",
    capabilities: ["ERP workflows", "Clinical operations", "Inventory and billing", "Role-based access"],
    status: "Active implementation",
  },
  {
    name: "Veterinary Imaging and PACS",
    category: "Specialist integrations",
    problem: "Imaging workflows need reliable local access, organized studies and connectivity between imaging equipment and clinical teams.",
    role:
      "Configuration and integration work involving Orthanc PACS, CT, X-ray and ultrasound workflows, DICOM connectivity and local imaging access.",
    capabilities: ["Orthanc PACS", "DICOM workflows", "Local imaging access"],
    status: "Implemented support",
  },
  {
    name: "Laboratory Integration",
    category: "Specialist integrations",
    problem: "Laboratory activity needs to connect with clinical records without creating duplicated entry or unclear handovers.",
    role: "Technical planning and integration work involving veterinary laboratory equipment and clinical-system workflows.",
    capabilities: ["Integration planning", "Clinical workflow mapping", "System design"],
    status: "Deployment planning",
  },
  {
    name: "Tesni Energies Website",
    category: "Websites and digital platforms",
    problem: "A solar-energy business needed clearer service presentation and troubleshooting support for its web presence.",
    role:
      "Website support including service structure, WordPress troubleshooting and clearer presentation of residential, commercial, installation, maintenance, storage and consultation services.",
    capabilities: ["Website structure", "WordPress support", "Service presentation", "Conversion flow"],
    status: "Implemented support",
  },
  {
    name: "Pet Food E-commerce Concept",
    category: "Websites and digital platforms",
    problem: "A pet-food business needed a simple way to present products and guide customers toward enquiry or ordering.",
    role: "Product catalogue, cart and WhatsApp-assisted ordering experience designed for a pet-food business.",
    capabilities: ["Catalogue design", "Cart flow", "WhatsApp ordering"],
    status: "Technical concept",
  },
  {
    name: "Farm CCTV Solution",
    category: "Cybersecurity and infrastructure",
    problem: "A rural farm environment needs monitoring that accounts for power, connectivity, coverage and remote access.",
    role:
      "Planning for a solar-powered 4G CCTV deployment with attention to coverage, connectivity, power and remote monitoring.",
    capabilities: ["CCTV planning", "4G connectivity", "Solar power considerations"],
    status: "Deployment planning",
  },
  {
    name: "Business IT Support",
    category: "Cybersecurity and infrastructure",
    problem: "Everyday IT issues interrupt work when networks, accounting users, email and workstation setup are not handled quickly.",
    role:
      "Network-adapter troubleshooting, network issue resolution, QuickBooks user support, business-email creation, password resets and Outlook configuration.",
    capabilities: ["Troubleshooting", "QuickBooks support", "Email and Outlook"],
    status: "Implemented support",
  },
  {
    name: "Business Email and Domain Infrastructure",
    category: "Cybersecurity and infrastructure",
    problem: "Professional communication needs reliable DNS, domain and branded-email configuration.",
    role: "Domain, DNS and branded-email configuration for professional business communication.",
    capabilities: ["DNS", "Domain setup", "Business email"],
    status: "Implemented support",
  },
  {
    name: "Local Server and Intranet Deployment",
    category: "Cybersecurity and infrastructure",
    problem: "Some business applications need reliable multi-computer access without exposing private systems publicly.",
    role: "Windows-based local hosting and multi-computer access planning for business applications.",
    capabilities: ["Local hosting", "Intranet planning", "Windows deployment"],
    status: "Deployment planning",
  },
  {
    name: "Pastoral Livestock Outreach Data System",
    category: "Concepts and deployment planning",
    problem: "Outreach work needs lightweight records for owners, herds, animal categories, treatments and medication issued.",
    role:
      "A lightweight field-data concept for recording owners, herd details, animal categories, treatments and medication issued during veterinary outreach work.",
    capabilities: ["Field data capture", "Veterinary records", "Simple reporting"],
    status: "Technical concept",
  },
  {
    name: "Security and Network Diagnostic Tool Concept",
    category: "Concepts and deployment planning",
    problem: "Support teams need structured diagnostics and reporting for authorized security and network reviews.",
    role:
      "A command-line cybersecurity and network-scanning concept focused on structured diagnostics and reporting for authorized environments.",
    capabilities: ["Network diagnostics", "Security reporting", "CLI tooling"],
    status: "Technical concept",
  },
  {
    name: "Workflow and Cost-Mapping Consulting",
    category: "Concepts and deployment planning",
    problem: "Small businesses often need to understand workflows, expenses, pricing and reporting before changing systems.",
    role:
      "Operational mapping concepts for service businesses and training studios that need clearer workflows, expenses, pricing and reporting.",
    capabilities: ["Workflow mapping", "Cost analysis", "Reporting structure"],
    status: "Consulting concept",
  },
];
