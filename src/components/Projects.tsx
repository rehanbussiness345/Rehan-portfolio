import React, { useState } from "react";
import { Icon } from "./Brand";

type Project = {
  name: string;
  industry: string;
  description: string;
  tech: string[];
  results: string[];
  image: string;
  link?: string;
  demo?: string;
};

const projects: Record<string, Project[]> = {
  web: [
    {
      name: "Apex Hospital",
      industry: "Healthcare",
      description:
        "A modern hospital website with departments, doctors, appointments and patient resources — engineered for speed and local SEO.",
      tech: ["React", "Next.js", "Tailwind", "Vercel"],
      results: ["+210% organic traffic", "4.8s → 1.2s load time", "Top 3 local search rankings"],
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop",
      link: "https://apex-hospital-delta.vercel.app/",
      demo: "https://apex-hospital-delta.vercel.app/",
    },
    {
      name: "Fitness Club",
      industry: "Fitness & Wellness",
      description:
        "High-converting fitness club website with membership plans, class schedules, trainer profiles and lead-capture funnels.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      results: ["+184% monthly leads", "Mobile-first UX", "Automated membership inquiries"],
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
      link: "https://mohtesham-fitness-club.vercel.app/",
      demo: "https://mohtesham-fitness-club.vercel.app/",
    },
    {
      name: "Interior Path Modular Kitchen",
      industry: "Interior Design",
      description:
        "Portfolio-driven interior design website showcasing modular kitchen projects, services and client inquiries.",
      tech: ["React", "Next.js", "Tailwind", "Sanity CMS"],
      results: ["Rich visual portfolio", "3x faster inquiry response", "SEO-optimized galleries"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1600&auto=format&fit=crop",
      link: "https://interior-path-modular-kitchen-25bnd0o6d-rehan22.vercel.app/",
      demo: "https://interior-path-modular-kitchen-25bnd0o6d-rehan22.vercel.app/",
    },
    {
      name: "FMS Dental",
      industry: "Healthcare · Dental",
      description:
        "Professional dental clinic website with services, specialists, patient testimonials and online appointment booking.",
      tech: ["React", "Tailwind", "Node.js", "Vercel"],
      results: ["+156% appointment bookings", "Local SEO dominance", "Mobile-optimized UX"],
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop",
      link: "https://fms-dental.vercel.app/",
      demo: "https://fms-dental.vercel.app/",
    },
    {
      name: "Classic Events Photography",
      industry: "Photography",
      description:
        "Cinematic portfolio website for an events photography brand with gallery collections and booking workflows.",
      tech: ["Next.js", "Tailwind", "Vercel", "Cloudinary"],
      results: ["High-speed image galleries", "Booking-ready pages", "Brand-first storytelling"],
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
      link: "https://classic-events-photography.vercel.app/",
      demo: "https://classic-events-photography.vercel.app/",
    },
    {
      name: "EduStream Learning Platform",
      industry: "EdTech",
      description:
        "Custom learning platform with courses, student dashboards, progress tracking and AI-powered recommendations.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      results: ["Scalable LMS architecture", "Stripe payments", "AI course recommendations"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    },
  ],
  mobile: [
    {
      name: "HealthTrack Pro",
      industry: "Healthcare · Mobile",
      description:
        "Cross-platform health tracking app with vitals, medication reminders and doctor-patient messaging.",
      tech: ["React Native", "Expo", "Node.js", "MongoDB"],
      results: ["4.8★ App Store rating", "50K+ downloads", "Push & SMS reminders"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "RestoOrder",
      industry: "Restaurants",
      description:
        "Restaurant ordering app with digital menus, tableside QR, real-time orders and kitchen display system.",
      tech: ["Flutter", "Firebase", "Node.js"],
      results: ["3x faster order flow", "QR dine-in + delivery", "Realtime kitchen KDS"],
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "FitPulse Coach",
      industry: "Fitness",
      description:
        "Personal training app with custom workouts, nutrition tracking, progress analytics and trainer chat.",
      tech: ["React Native", "TypeScript", "Supabase"],
      results: ["Custom workout builder", "Nutrition macro tracking", "Trainer-led community"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
    },
  ],
  ai: [
    {
      name: "LeadFlow AI Agent",
      industry: "SaaS · Sales",
      description:
        "An intelligent lead-qualification agent that chats, qualifies and books meetings 24/7 on autopilot.",
      tech: ["OpenAI", "LangChain", "Node.js", "Cal.com"],
      results: ["60% of chats auto-qualified", "3x more booked meetings", "Always-on sales agent"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "SupportGPT Agent",
      industry: "Customer Support",
      description:
        "AI customer support agent trained on your docs, FAQs and product — deflects tickets and scales your team.",
      tech: ["GPT-4o", "RAG", "Pinecone", "Next.js"],
      results: ["72% ticket deflection", "Sub-2s response time", "Multi-language support"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "ContentPilot AI",
      industry: "Marketing",
      description:
        "Research-backed content agent that plans SEO briefs, writes structured posts and publishes to your CMS.",
      tech: ["Claude", "LangGraph", "Notion API", "WordPress"],
      results: ["10x faster content production", "SEO-optimized briefs", "Automated publishing"],
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
    },
  ],
  design: [
    {
      name: "NovaBank Fintech App",
      industry: "Fintech · UI/UX",
      description:
        "Mobile-first fintech product design with clean dashboards, fast onboarding and accessible UX patterns.",
      tech: ["Figma", "Design System", "Prototyping", "UX Research"],
      results: ["+38% onboarding completion", "WCAG 2.1 AA", "Reusable design system"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Aurora Spa Brand System",
      industry: "Wellness · Branding",
      description:
        "Brand identity, web design and booking experience design for a premium wellness spa chain.",
      tech: ["Figma", "Illustrator", "Webflow"],
      results: ["Premium visual identity", "Unified brand system", "Booking-first UX"],
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "LogiBoard SaaS Dashboard",
      industry: "SaaS · Dashboard",
      description:
        "Complex logistics dashboard redesigned for clarity — dense data, simple decisions, beautiful interactions.",
      tech: ["Figma", "D3.js concepts", "Prototyping"],
      results: ["40% fewer clicks per task", "Data-dense UI", "Interactive prototypes"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    },
  ],
  seo: [
    {
      name: "Dental Clinic SEO Growth",
      industry: "Healthcare · SEO",
      description:
        "Technical SEO, local optimization and content strategy that pushed a multi-location dental clinic to top-3 results.",
      tech: ["Ahrefs", "Google Search Console", "Schema.org", "On-page SEO"],
      results: ["+210% organic traffic", "Top 3 local pack", "+320% monthly leads"],
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "E-commerce SEO Overhaul",
      industry: "E-commerce",
      description:
        "Site architecture, technical SEO and category-page content system for a 2,000+ product store.",
      tech: ["Screaming Frog", "SEMrush", "Shopify", "Content clusters"],
      results: ["+184% organic revenue", "Core Web Vitals green", "120+ ranking keywords"],
      image:
        "https://images.unsplash.com/photo-1556742400-b5b7c5121f9f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "SaaS Organic Flywheel",
      industry: "SaaS · Growth",
      description:
        "Founder-led content, comparison pages and programmatic SEO that built a predictable organic pipeline.",
      tech: ["Ahrefs", "Notion", "Webflow", "Programmatic SEO"],
      results: ["+260% signups", "140+ ranking keywords", "$0 CAC organic channel"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    },
  ],
};

const tabs: { key: keyof typeof projects; label: string }[] = [
  { key: "web", label: "Web Development" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "ai", label: "AI Agents" },
  { key: "design", label: "UI/UX Design" },
  { key: "seo", label: "SEO Success" },
];

export const Projects: React.FC = () => {
  const [active, setActive] = useState<keyof typeof projects>("web");
  const list = projects[active];

  return (
    <section id="projects" className="relative py-[120px]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-sand-muted">03 — Projects</div>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-sand-light md:text-5xl">
              Selected work that shipped, scaled and ranked.
            </h2>
            <p className="mt-6 text-sand-muted">
              A curated look at websites, mobile apps, AI agents and growth projects delivered for clients across industries.
            </p>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-sand-muted">
            {list.length} projects · live links included
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
                active === t.key
                  ? "border-sand bg-sand text-ink"
                  : "border-line bg-ink-800/60 text-sand-muted hover:border-line-strong hover:text-sand-light"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-800/40 transition-all duration-300 hover:-translate-y-1 hover:border-sand/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-sand backdrop-blur">
                  {p.industry}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-sand-light">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-muted">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-ink-900 px-2.5 py-1 text-[11px] text-sand-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 space-y-2 border-t border-line pt-5">
                  {p.results.map((r) => (
                    <div key={r} className="flex items-start gap-2 text-sm text-sand-light/90">
                      <Icon.Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sand" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sand px-4 py-2.5 text-sm font-medium text-ink transition-all hover:bg-sand-light"
                    >
                      Visit Website
                      <Icon.ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line-strong bg-ink-900 px-4 py-2.5 text-sm text-sand-light transition-all hover:border-sand hover:bg-sand/10"
                    >
                      Live Demo
                      <Icon.External className="h-4 w-4" />
                    </a>
                  )}
                  {!p.link && !p.demo && (
                    <a
                      href="#contact"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line-strong bg-ink-900 px-4 py-2.5 text-sm text-sand-light hover:border-sand"
                    >
                      Request Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


