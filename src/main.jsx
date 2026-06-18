import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Github,
  Globe2,
  Layers3,
  Link as LinkIcon,
  Linkedin,
  Mail,
  Network,
  Phone,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Users,
  Workflow,
} from "lucide-react";
import "./styles.css";

const skills = [
  ["Languages & Frameworks", Code2, ["C#", "JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS", "SQL"]],
  ["Backend", ServerCog, ["ASP.NET Core 8", "Node.js", "EF Core", "ADO.NET", "FluentValidation", "Hangfire", "Quartz.NET"]],
  ["Frontend", Layers3, ["React", "Vite", "Angular", "Tailwind", "TanStack Query v5"]],
  ["Databases", Database, ["SQL Server", "SSMS", "MongoDB Atlas"]],
  ["Infrastructure & Tools", Network, ["RabbitMQ", "SignalR", "Cloudinary", "JWT/RBAC", "Git", "XAMPP", "Claude Code", "Canva"]],
  ["Professional Strengths", Users, ["Systems architecture", "Requirements analysis", "Bug diagnosis", "Team leadership", "Analytical thinking"]],
];

const contactLinks = [
  {
    label: "markvigo32@gmail.com",
    href: "mailto:markvigo32@gmail.com",
    icon: Mail,
  },
  {
    label: "0907 223 6045",
    href: "tel:+639072236045",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://ph.linkedin.com/in/vigo-mark-bernard-p-95047a3a6",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/glaunne333",
    icon: Github,
  },
];

const personalProjects = [
  {
    name: "MinuteMate",
    url: "https://minute-mate-green.vercel.app/",
    icon: FileText,
    summary:
      "Browser-based meeting minutes assistant that turns raw notes or transcript-style text into summaries, decisions, action items, risks, follow-up messages, and formal minutes.",
    tags: ["Meeting notes", "Summaries", "Productivity"],
  },
  {
    name: "ProcureFlow",
    url: "https://procure-flow-mu.vercel.app/login",
    icon: Workflow,
    summary:
      "Procurement request and approval system for a realistic enterprise workflow: employees submit requests, managers approve or reject them, and finance tracks ordering and completion.",
    tags: ["Approvals", "Enterprise workflow", "Finance"],
  },
  {
    name: "AssetTrack",
    url: "https://asset-track-phi.vercel.app/",
    icon: Boxes,
    summary:
      "Internal asset custody and inventory demo covering registration, assignment, return, repair, closure, audit logging, and archive review.",
    tags: ["Inventory", "Audit logs", "Custody"],
  },
  {
    name: "ShopPulse",
    url: "https://shop-pulse-five.vercel.app/",
    icon: ShoppingCart,
    summary:
      "Ecommerce analytics dashboard built with Angular and Tailwind, using mock store data to visualize revenue trends, product performance, recent orders, customer segments, and conversion metrics without a backend or authentication.",
    tags: ["Angular", "Analytics", "Ecommerce"],
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
      "Comprehensive internal employee management portal for Cubed, built from the ground up across database design, API architecture, security, background jobs, and real-time infrastructure.",
    highlights: [
      "Designed a 30+ table SQL Server schema for users, departments, attendance, leave, documents, tasks, notifications, and audit logs.",
      "Implemented SignalR notifications and 15 Hangfire jobs covering attendance lifecycle, leave balance sync, and other system functions.",
      "Engineered biometric attendance import with SHA-256 deduplication, conflict detection, OB workflows, correction limits, and Excel reporting.",
      "Built a 4-level document repository with granular permissions, shareable token links, batch operations, and pending request fulfillment.",
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
      "Full-featured internal IT helpdesk system for Cubed, replacing manual ticket coordination with structured ticket lifecycle, notification, archival, and audit flows.",
    highlights: [
      "Architected a 14-table SQL Server schema for tickets, resolutions, knowledge base articles, audit logs, and 3-role access.",
      "Built 10 Quartz.NET jobs including inactivity-based offline status and maintenance cleanups.",
      "Designed a RabbitMQ async notification pipeline with fallback, prefetch control, and retry handling.",
      "Developed Cloudinary storage abstraction and backup assignee escalation for stale tickets.",
    ],
    outcomes: [
      "V2 shipped and actively deployed for Cubed staff.",
      "Eliminated manual email-based ticket coordination.",
    ],
    tech:
      "ASP.NET Core 8, ADO.NET, SQL Server, React, Vite, TanStack Query v5, RabbitMQ, Cloudinary, Quartz.NET, JWT",
  },
  {
    name: "UDM Document Management System",
    period: "December 2025",
    role: "Full-Stack Developer",
    team: "Team Size: 5 members",
    icon: FileText,
    summary:
      "Centralized web-based system for the UDM QA Department to manage accreditation documents with searchable metadata, categories, keywords, and role-based access.",
    highlights: [
      "Integrated NLP features for readability, similarity, summarization, and anomaly detection.",
      "Built a real-time dashboard for system statistics and workflow insights.",
    ],
    outcomes: [
      "NLP checker caught document anomalies before upload with 90% accuracy.",
      "Improved review time by 50% and handled hundreds of files with zero major crashes.",
    ],
    tech: "HTML, CSS, JavaScript, Python, MongoDB Atlas, Cloudinary, MERN stack",
  },
];

function SectionHeader({ kicker, title, text }) {
  return (
    <div className="section-header">
      <p className="kicker">{kicker}</p>
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

function App() {
  const [isContactBarVisible, setIsContactBarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero");
      const triggerPoint = hero ? hero.offsetHeight - 110 : 520;
      setIsContactBarVisible(window.scrollY > triggerPoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".panel, .client-card").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="page-shell">
      <aside className={`contact-bar ${isContactBarVisible ? "is-visible" : ""}`} aria-label="Contact information">
        <div className="contact-bar-inner">
          <a className="contact-name" href="#hero-title">Mark Vigo</a>
          <div className="contact-items">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a href={href} key={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                <Icon size={16} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Full-stack developer / systems architect</p>
          <h1 id="hero-title">Mark Vigo</h1>
          <div className="contact-strip" aria-label="Contact information">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a href={href} key={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                <Icon size={17} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
          <p className="hero-lede">
            I've shipped production internal systems at Cubed Technologies: a 30-table employee portal
            with real-time SignalR infrastructure, and a RabbitMQ-backed IT helpdesk that replaced
            manual email coordination entirely. I architect for reliability: strong schemas, auditable
            workflows, and backends that hold up under real business load.
          </p>
          <div className="hero-actions">
            <a href="https://drive.google.com/uc?export=download&id=1AvG4kJ6uAW2knpl0tZuYneYJJBiOpaqN" target="_blank" rel="noreferrer">
              <FileText size={18} /> Download CV
            </a>
            <a href="#personal-projects"><Globe2 size={18} /> Personal Work</a>
            <a href="#client-projects"><BriefcaseBusiness size={18} /> Client Work</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <img src="/mark-vigo-portrait.png" alt="Mark Vigo graduation portrait" />
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeader
          kicker="Skills"
          title="A stack built for enterprise workflows"
          text="Backend-heavy full-stack development supported by the tools needed for reliable internal software."
        />
        <div className="skills-grid">
          {skills.map(([title, Icon, items]) => (
            <article className="panel" key={title}>
              <div className="card-title"><Icon size={20} /><h3>{title}</h3></div>
              <div className="chip-row">{items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeader
          kicker="Work Experience"
          title="Cubed Technologies Solutions Phils. Inc."
          text="IT Intern / Malate, Manila / February 2026 - May 2026"
        />
        <article className="panel feature-panel">
          <div className="card-title"><Users size={22} /><h3>Team lead for in-house software delivery</h3></div>
          <ul className="feature-list">
            <li>Developed in-house software systems while coordinating with supervisors on requirements and policy alignment.</li>
            <li>Led a team of three other IT interns, overseeing project flow, communication, deadlines, targets, and criteria.</li>
            <li>Contributed to enterprise software expansion modules, especially maintenance modules, while observing business rules and data protection practices.</li>
          </ul>
        </article>
      </section>

      <section className="section" id="personal-projects">
        <SectionHeader
          kicker="Personal Projects"
          title="Focused portfolio systems"
          text=""
        />
        <div className="project-grid">
          {personalProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="panel project-card" key={project.name}>
                <div className="project-topline">
                  <span className="project-mark"><Icon size={22} /></span>
                  <a className="icon-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="chip-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="client-projects">
        <SectionHeader
          kicker="Client Projects"
          title="Production-minded internal systems"
          text="Client work focused on architecture, workflow reliability, access control, background processing, and auditability."
        />
        <div className="client-stack">
          {clientProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="panel client-card" key={project.name}>
                <div className="client-heading">
                  <span className="project-mark"><Icon size={23} /></span>
                  <div>
                    <p className="meta"><CalendarDays size={15} /> {project.period}</p>
                    <h3>{project.name}</h3>
                    <p className="role">{project.role} / {project.team}</p>
                  </div>
                </div>
                <p className="client-summary">{project.summary}</p>
                <ul className="feature-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                {project.outcomes && (
                  <div className="outcomes">
                    <p><BadgeCheck size={16} /> Outcomes</p>
                    <ul>{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                )}
                <p className="tech"><CheckCircle2 size={16} /> {project.tech}</p>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <span>Mark Vigo</span>
        <div className="footer-links">
          <a href="#skills"><Code2 size={17} /> Skills</a>
          <a href="#personal-projects"><LinkIcon size={17} /> Projects</a>
          <a href="https://github.com/glaunne333" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
