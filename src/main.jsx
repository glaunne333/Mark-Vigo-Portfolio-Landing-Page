import React from "react";
import { createRoot } from "react-dom/client";
import {
  Archive,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Code2,
  Database,
  FileText,
  Github,
  Globe2,
  Layers3,
  Link as LinkIcon,
  Network,
  ServerCog,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import "./styles.css";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    items: ["C#", "JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS", "SQL"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    items: ["ASP.NET Core 8", "Node.js", "EF Core", "ADO.NET", "FluentValidation", "Hangfire", "Quartz.NET"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    items: ["React", "Vite", "Angular", "Tailwind", "TanStack Query v5"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["SQL Server", "SSMS", "MongoDB Atlas"],
  },
  {
    title: "Infrastructure & Tools",
    icon: Network,
    items: ["RabbitMQ", "SignalR", "Cloudinary", "JWT/RBAC", "Git", "XAMPP", "Claude Code", "Canva"],
  },
  {
    title: "Core Strengths",
    icon: BrainCircuit,
    items: [
      "REST API design",
      "Background jobs",
      "Real-time systems",
      "File integrity patterns",
      "Systems architecture",
      "Team leadership",
    ],
  },
];

const personalProjects = [
  {
    name: "MinuteMate",
    url: "https://minute-mate-green.vercel.app/",
    icon: FileText,
    summary:
      "Browser-based meeting minutes assistant that converts raw notes or transcript-style text into structured summaries, decisions, action items, risks, follow-up messages, and formal minutes.",
    tags: ["Productivity", "Summaries", "Browser app"],
  },
  {
    name: "ProcureFlow",
    url: "https://procure-flow-mu.vercel.app/login",
    icon: Workflow,
    summary:
      "Procurement request and approval system showing a realistic enterprise workflow: employees submit purchase requests, managers approve or reject them, and finance tracks ordering and completion.",
    tags: ["Approvals", "Enterprise workflow", "Portfolio system"],
  },
  {
    name: "AssetTrack",
    url: "https://asset-track-phi.vercel.app/",
    icon: Boxes,
    summary:
      "Internal asset custody and inventory demo for laptops, monitors, phones, ID cards, and tools across registration, assignment, return, repair, closure, audit logging, and archive review.",
    tags: ["Inventory", "Audit logs", "Custody tracking"],
  },
];

const clientProjects = [
  {
    name: "Cubed Employee Portal System",
    period: "April 2026 - May 2026",
    role: "Lead Developer & Systems Architect",
    team: "Team Size: 4 members",
    icon: Building2,
    summary:
      "Architected and built a comprehensive internal employee management portal for Cubed from the ground up, owning database design, API architecture, security model, job scheduling strategy, and real-time infrastructure.",
    highlights: [
      "Designed a 30+ table SQL Server schema for users, departments, attendance, leave, documents, tasks, notifications, and audit logs with GUID PKs, soft deletes, rowversion concurrency, EF Core global filters, SignalR notifications, and 15 Hangfire jobs.",
      "Engineered a biometric attendance import pipeline with SHA-256 deduplication, date-range conflict detection, OB workflows, correction limits, and OB-normalized Excel reporting per batch.",
      "Built a hierarchical document repository with 4-level nesting, granular grants, shareable token links, batch operations, and automatic fulfillment of pending document requests.",
    ],
    tech:
      "ASP.NET Core 8, EF Core, SQL Server, React, TanStack Query v5, SignalR, Hangfire, Cloudinary, JWT, Caddy, EPPlus",
  },
  {
    name: "Cubed IT Helpdesk V2",
    period: "February 2026 - April 2026",
    role: "Lead Developer & Systems Architect",
    team: "Team Size: 4 members",
    icon: ShieldCheck,
    summary:
      "Designed and shipped a full-featured internal IT helpdesk system for Cubed, replacing a manual ticket-handling process across two production versions.",
    highlights: [
      "Architected a 14-table SQL Server schema covering tickets, resolutions, knowledge base articles, audit logs, and 3-role access with 10 Quartz.NET background jobs.",
      "Implemented a RabbitMQ async notification pipeline with in-process fallback, prefetch control, and nack/retry logic.",
      "Built Cloudinary storage abstraction with a local dev swap, weekly asset reference health checks, and stale-ticket backup assignee escalation.",
    ],
    outcomes: [
      "V2 shipped and actively deployed for Cubed staff with ongoing maintenance and feature iteration.",
      "Eliminated manual email-based ticket coordination through a structured ticket lifecycle, auto-confirm, archival, and audit trail.",
    ],
    tech:
      "ASP.NET Core 8, ADO.NET, SQL Server, React, Vite, TanStack Query v5, RabbitMQ, Cloudinary, Quartz.NET, JWT",
  },
  {
    name: "UDM Document Management System",
    period: "December 2025",
    role: "Full-Stack Developer",
    team: "Team Size: 5 members",
    icon: Archive,
    summary:
      "Developed a centralized web-based document system for the UDM QA Department to manage accreditation documents with searchable metadata, categories, and keywords.",
    highlights: [
      "Integrated NLP features for readability, similarity, summarization, anomaly detection, and role-based access control.",
      "Built a real-time dashboard for system statistics and workflow insights across admins, moderators, and users.",
    ],
    outcomes: [
      "NLP checker caught document anomalies before upload with 90% accuracy, reducing database bloat and improving review time by 50%.",
      "Repository handled hundreds of files with zero major crashes and minimal performance degradation.",
    ],
    tech: "HTML, CSS, JavaScript, Python, MongoDB Atlas, Cloudinary, MERN stack",
  },
];

function SectionHeader({ kicker, title, text }) {
  return (
    <div className="section-header">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Full-stack developer / systems architect</p>
          <h1 id="hero-title">Mark Vigo</h1>
          <p className="hero-lede">
            I build practical internal systems with sharp database design, dependable backend workflows,
            and React interfaces made for real business operations.
          </p>
          <div className="hero-actions" aria-label="Primary navigation">
            <a href="#personal-projects">
              <Globe2 size={18} aria-hidden="true" />
              Personal Work
            </a>
            <a href="#client-projects">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              Client Work
            </a>
          </div>
          <div className="hero-stats" aria-label="Portfolio highlights">
            <span><strong>3</strong> client systems</span>
            <span><strong>30+</strong> table enterprise schema</span>
            <span><strong>15</strong> background jobs in one portal</span>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Portrait of Mark Vigo">
          <img src="/mark-vigo-portrait.png" alt="Mark Vigo graduation portrait" />
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeader
          kicker="Skills"
          title="A stack built around enterprise workflows"
          text="Backend-heavy full-stack development, with the supporting tools needed for reliable internal software."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="card-title">
                  <Icon size={20} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeader
          kicker="Work Experience"
          title="IT Intern, Cubed Technologies Solutions Phils. Inc."
          text="Malate, Manila / February 2026 - May 2026"
        />
        <article className="experience-panel">
          <div className="experience-head">
            <Users size={22} aria-hidden="true" />
            <div>
              <h3>Team lead for in-house software delivery</h3>
              <p>On-the-Job Training</p>
            </div>
          </div>
          <ul className="feature-list">
            <li>Developed in-house software systems while coordinating requirements with supervisors and aligning with company policies.</li>
            <li>Led a development team composed of three other IT interns, managing project flow, communication, deadlines, targets, and criteria.</li>
            <li>Contributed to expansion modules for the company enterprise software system, particularly maintenance modules, while observing business rules and data protection practices.</li>
          </ul>
        </article>
      </section>

      <section className="section" id="personal-projects">
        <SectionHeader
          kicker="Personal Projects"
          title="Focused portfolio systems"
          text="Each project explores a practical workflow and keeps its live link behind a compact icon action."
        />
        <div className="project-grid">
          {personalProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <div className="project-mark">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <a className="icon-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="chip-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="client-projects">
        <SectionHeader
          kicker="Client Projects"
          title="Production-minded internal systems"
          text="Client work emphasizing architecture, workflow reliability, background processing, access control, and auditability."
        />
        <div className="client-stack">
          {clientProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="client-card" key={project.name}>
                <div className="client-heading">
                  <div className="project-mark">
                    <Icon size={23} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="meta"><CalendarDays size={15} aria-hidden="true" /> {project.period}</p>
                    <h3>{project.name}</h3>
                    <p className="role">{project.role} / {project.team}</p>
                  </div>
                </div>
                <p className="client-summary">{project.summary}</p>
                <ul className="feature-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {project.outcomes && (
                  <div className="outcomes">
                    <p><BadgeCheck size={16} aria-hidden="true" /> Outcomes</p>
                    <ul>
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="tech"><CheckCircle2 size={16} aria-hidden="true" /> {project.tech}</p>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <span>Mark Vigo</span>
        <div className="footer-links" aria-label="Footer links">
          <a href="#skills"><Code2 size={17} aria-hidden="true" /> Skills</a>
          <a href="#personal-projects"><LinkIcon size={17} aria-hidden="true" /> Projects</a>
          <a href="#client-projects"><Github size={17} aria-hidden="true" /> Portfolio</a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
