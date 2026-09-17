"use client";

import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

export function NumberedStep({ code, title, description, icon, variant = "default" }: { code: string; title: string; description: string; icon?: ReactNode; variant?: "default" | "security" }) {
  return (
    <article className={`numbered-step ${variant === "security" ? "security-step" : ""}`}>
      <div className="step-rail"><span>{code}</span>{icon}</div>
      <div><h3>{title}</h3><p>{description}</p></div>
    </article>
  );
}

export function SecurityTerminal({ title = "defensive-review", lines, status = "READY", footer = "MODE: DEFENSIVE" }: { title?: string; lines: string[]; status?: string; footer?: string }) {
  return (
    <div className="security-terminal" role="img" aria-label={`Presentation terminal showing ${title} status ${status}`}>
      <div className="terminal-bar" aria-hidden="true"><span /><span /><span /><strong><Terminal size={14} /> aptpro@security / {title}</strong><small>SESSION: AUTHORISED</small></div>
      <div className="terminal-body" aria-hidden="true"><p><b>aptpro@security:~$</b> initialize {title}</p>{lines.map((line, index) => <p key={line} style={{ "--line": index } as React.CSSProperties}>&gt; {line}</p>)}<p className="terminal-status">STATUS: {status}</p><p className="terminal-prompt"><b>aptpro@security:~$</b> <span /></p></div>
      <div className="terminal-footer"><span>{footer}</span><span>SCOPE: AUTHORISED</span></div>
    </div>
  );
}

export function SecurityArchitecture() {
  return <div className="security-architecture" role="img" aria-label="Conceptual defensive posture layers: identity, endpoint, network, application, data and backup"><div className="architecture-core"><ShieldCheck size={24} aria-hidden="true" /><strong>APTPro</strong><small>DEFENSIVE POSTURE</small></div>{["IDENTITY","ENDPOINT","NETWORK","APPLICATION","DATA","BACKUP"].map((item, index) => <span key={item} className={`architecture-node node-${index + 1}`}>{item}</span>)}</div>;
}

export function SecurityCard({ code, title, description, status, category }: { code: string; title: string; description: string; status: string; category: string }) {
  return (
    <motion.article className="security-card" tabIndex={0} whileHover={{ y: -3 }} transition={{ duration: 0.18 }}>
      <div className="security-card-scan" aria-hidden="true" />
      <div className="security-card-head"><span>{code}</span><small><i aria-hidden="true" />{status}</small></div>
      <h2>{title}</h2><p>{description}</p>
      <div className="security-card-foot"><span>{category}</span><span><CheckCircle2 size={15} aria-hidden="true" />DOCUMENTED</span></div>
    </motion.article>
  );
}

type CaseStudy = { name: string; category: string; problem: string; role: string; capabilities: string[]; status: string };

export function CaseStudyTabs({ projects }: { projects: CaseStudy[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];
  return (
    <div className="case-study-shell">
      <div className="case-study-tabs" role="tablist" aria-label="Selected experience">
        {projects.map((item, index) => <button key={item.name} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{String(index + 1).padStart(2, "0")}<span>{item.name}</span></button>)}
      </div>
      <motion.article key={project.name} className="case-study-panel" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <div className="case-study-kicker"><span>{project.status}</span><small>{project.category}</small></div>
        <h3>{project.name}</h3>
        <div className="case-study-grid"><div><small>Challenge</small><p>{project.problem}</p></div><div><small>Approach & system</small><p>{project.role}</p></div></div>
        <div className="tech-badges">{project.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
        <a className="inline-link" href="/projects">Explore full project context <ArrowUpRight size={16} /></a>
      </motion.article>
    </div>
  );
}

export function CapabilityStrip() {
  return <div className="capability-strip" aria-label="Aptpro engagement strengths">{[["04","Core delivery areas"],["01","Accountable technology partner"],["KE","Local operating context"],["OPS","Systems built for continuity"]].map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>;
}
