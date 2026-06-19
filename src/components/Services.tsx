import React from "react";
import { Icon } from "./Brand";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  items: string[];
};

const services: Service[] = [
  {
    title: "Web Development",
    desc: "High-performance websites and platforms engineered for speed, scale and conversion.",
    icon: <Icon.Code className="h-6 w-6" />,
    items: ["Business Websites", "Corporate Websites", "Landing Pages", "E-Commerce Websites", "Custom Platforms"],
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications with smooth UX and reliable architecture.",
    icon: <Icon.Smartphone className="h-6 w-6" />,
    items: ["Android Apps", "iOS Apps", "Cross-Platform Apps", "Business Applications"],
  },
  {
    title: "Web & App Design",
    desc: "Conversion-focused UI/UX design that turns visitors into customers with elegant interfaces.",
    icon: <Icon.Palette className="h-6 w-6" />,
    items: ["UI Design", "UX Design", "Wireframing", "Prototyping"],
  },
  {
    title: "AI Agent Development",
    desc: "Custom AI agents and intelligent automation that reduce workload and generate leads 24/7.",
    icon: <Icon.Bot className="h-6 w-6" />,
    items: ["AI Chatbots", "AI Assistants", "Customer Support Agents", "Lead Generation Agents", "Business Automation Agents"],
  },
  {
    title: "SEO Services",
    desc: "Data-driven search engine optimization that builds visibility, traffic and revenue long-term.",
    icon: <Icon.Search className="h-6 w-6" />,
    items: ["Technical SEO", "On-Page SEO", "Local SEO", "Website Optimization", "Traffic Growth"],
  },
  {
    title: "Social Media Support",
    desc: "Brand-building social strategies that grow audiences, strengthen positioning and generate leads.",
    icon: <Icon.Share className="h-6 w-6" />,
    items: ["Social Media Strategy", "Content Planning", "Brand Visibility", "Engagement Growth", "Business Promotion", "Lead Generation Campaigns"],
  },
  {
    title: "Website Maintenance",
    desc: "Keep your site secure, fast and updated with ongoing technical support and performance care.",
    icon: <Icon.Shield className="h-6 w-6" />,
    items: ["Security Updates", "Performance Optimization", "Content Updates", "Technical Support"],
  },
  {
    title: "Digital Growth Consulting",
    desc: "Strategic guidance across product, funnels, content and paid media — so growth is systematic, not random.",
    icon: <Icon.Rocket className="h-6 w-6" />,
    items: ["Growth Audits", "Funnel Strategy", "Content Systems", "Paid Acquisition", "Analytics & CRO"],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-[120px]">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-sand-muted">02 — Services</div>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-sand-light md:text-5xl">
              A full-stack partner for your digital growth.
            </h2>
            <p className="mt-6 text-sand-muted">
              From the first line of code to the first organic lead — one developer, one process, one accountable partner.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3.5 text-sm font-medium text-ink transition-all hover:bg-sand-light"
          >
            Discuss Your Project
            <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sand/40 hover:bg-ink-800/80"
            >
              <div className="absolute right-4 top-4 font-display text-4xl text-sand/10 transition-colors group-hover:text-sand/30">
                0{i + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand/10 text-sand transition-colors group-hover:bg-sand group-hover:text-ink">
                {s.icon}
              </div>
              <h3 className="mt-6 font-display text-xl text-sand-light">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-muted">{s.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-sand-light/90">
                    <span className="h-1 w-1 rounded-full bg-sand" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
