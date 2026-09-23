export type SecurityItem = { name: string; status: string; summary: string; boundary: string };

export const defensiveTools: SecurityItem[] = [
  { name: "QR Phishing (Quishing) Scanner", status: "Built utility", summary: "Decodes QR content and evaluates embedded destinations before a user follows them, supporting defensive URL and domain review.", boundary: "Defensive analysis only; it does not publish bypass methods or claim mobile-device control." },
  { name: "Legacy Office Exploit Checker", status: "Built utility", summary: "Performs static document triage for suspicious Office and RTF structures, embedded content and contextual indicators.", boundary: "Document inspection only; no exploit construction guidance or payload examples are published." },
  { name: "Infostealer Behavioral Monitor", status: "Built utility", summary: "Explores endpoint signals associated with credential theft and information-stealing behaviour for defensive investigation.", boundary: "Behavioural monitoring, not malware development or credential-access instruction." },
  { name: "Mobile Money Transaction Anomaly Notifier", status: "Built utility / simulated-data analysis", summary: "Explores transaction-pattern risk scoring and alerts using simulated or mock transaction and SMS-style data.", boundary: "No direct M-PESA infrastructure access, partnership or live transaction deployment is claimed." },
  { name: "SSH Brute-Force Detector & Alerting", status: "Built utility", summary: "Analyses authorised server authentication logs for repeated failures, source patterns and threshold-based defensive alerts.", boundary: "For authorised log sources only; it does not provide password-attack instructions." },
  { name: "Malware Hash & Reputation Checker", status: "Built utility", summary: "Generates file hashes and checks reputation through authorised threat-intelligence sources where configured.", boundary: "External intelligence APIs are integrations, not partnerships; no credentials are exposed." },
  { name: "File Integrity Monitor", status: "Built utility", summary: "Establishes cryptographic baselines and identifies unexpected new, deleted or modified files for review.", boundary: "Supports early warning and integrity reporting; it is not represented as ransomware prevention." },
  { name: "Local Network Device Mapper", status: "Built utility", summary: "Provides ARP-based visibility into devices on an authorised local network to support inventory and unknown-device review.", boundary: "Authorised network discovery only; no reconnaissance or evasion guidance is published." },
];

const item = (name: string, status: string, summary: string, boundary: string): SecurityItem => ({ name, status, summary, boundary });
export const engineeringGroups = [
  { title: "Fraud & identity security", status: "R&D / prototype architecture", items: [
    item("Real-Time Mobile Money Scam Interdiction", "R&D / prototype architecture", "Explores enriching payment-risk decisions with behavioural, device, number-verification and telecommunications-context signals during an authorisation window.", "No GSMA, Safaricom, M-PESA, bank or telecom deployment is claimed."),
    item("AI-Synthetic Identity & Digital KYC Defense", "R&D / prototype", "Explores cross-signal inconsistencies across identity, document, device and account behaviour for synthetic-identity risk prioritisation.", "No government, bank or telecom database access is claimed."),
    item("Identity & Access Risk Analytics", "Engineering research", "Explores authentication patterns, privilege changes, unusual sequences and risk scoring around access events.", "An unusual event is a prompt for investigation, not proof of compromise."),
  ] },
  { title: "Detection, operations & response", status: "R&D / prototype engineering", items: [
    item("Lightweight NIDS & Security Automation", "R&D / prototype", "Explores lower-overhead network telemetry, detection, enrichment, prioritisation and controlled response playbooks for constrained environments.", "No SME, SACCO or enterprise deployment is claimed."),
    item("AI-Assisted SOC Triage", "Engineering research", "Explores alert summaries, event grouping, timelines, IOC context and analyst decision support.", "Human oversight remains part of sensitive response decisions."),
    item("Threat Intelligence Enrichment Pipeline", "Engineering research", "Normalises indicators and adds reputation, source confidence, deduplication and telemetry context for investigation.", "No private threat feeds or API details are exposed."),
    item("Security Log Anomaly Detection", "Engineering research", "Explores baseline behaviour and statistical or machine-learning-assisted prioritisation across security logs.", "An anomaly is not automatically malicious."),
    item("Digital Forensics & Incident Evidence Workflow", "Engineering research", "Organises endpoint artefacts, events, timelines, indicators, notes and case reporting for defensive investigations.", "No anti-forensics or evasion techniques are published."),
  ] },
  { title: "AI & data security", status: "Engineering research", items: [
    item("Security Data Engineering", "Engineering research", "Explores a common analytics layer for endpoint, network, identity, application and cloud telemetry.", "No customer data or private data schemas are represented."),
    item("Securing AI Systems", "Engineering research", "Covers prompt injection, retrieval authorisation, tool permissions, secrets, auditability and AI application boundaries.", "Enterprise defensive design; no attack recipes are published."),
    item("Sensitive Data Discovery & Classification", "Engineering research", "Explores how sensitive information can be identified, classified and mapped to improve protection and governance.", "No access to client data is implied."),
    item("Data Exfiltration & Ransomware Early Warning", "Engineering research", "Explores unusual transfer patterns, integrity changes and recovery-oriented defensive signals.", "Does not claim prevention of all data loss or ransomware."),
  ] },
  { title: "Future security architecture", status: "Research / architecture", items: [
    item("Post-Quantum Cryptography Readiness", "Research / architecture", "Explores cryptographic inventory, crypto-agility, certificate dependencies and hybrid migration planning.", "No national, government or customer cryptographic migration is claimed."),
    item("Sectoral Cyber Fusion & Threat Intelligence Architecture", "Research / architecture", "Explores IOC sharing, normalisation, correlation, case management and response-orchestration concepts.", "No bank, telecom, government or KE-CIRT integration is claimed."),
    item("Cloud Security Posture & Attack Surface Monitoring", "Engineering research", "Explores identity permissions, exposed services, configuration drift, logging and authorised public-asset observations.", "Authorised organisational assets only; no cloud partnership or scanning guidance is claimed."),
  ] },
];