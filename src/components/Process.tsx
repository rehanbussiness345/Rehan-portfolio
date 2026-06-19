import React from "react";
import { Icon } from "./Brand";

const steps = [
  { title: "Requirement Gathering", desc: "Deep-dive discovery call to understand goals, users, competitors and success metrics." },
  { title: "Planning & Strategy", desc: "Scope, architecture, content roadmap and growth plan aligned with business outcomes." },
  { title: "Design & Prototyping", desc: "Wireframes, UI design and interactive prototypes — reviewed before a single line of code." },
  { title: "Development", desc: "Modern, modular, scalable code built on proven stacks with weekly progress demos." },
  { title: "Testing & Optimization", desc: "Performance, SEO, cross-device and usability testing to ensure production-ready quality." },
  { title: "Launch & Growth Support", desc: "Smooth launch, analytics setup, and ongoing optimization for long-term growth and ROI." },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-[120px]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-20">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-sand-muted">04 — Process</div>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-sand-light md:text-5xl">
              A proven 6-step process that ships on time and on strategy.
            </h2>
          </div>
          <p className="text-sand-muted md:col-span-5">
            Every project follows a transparent, collaborative workflow — so you always know what's next, what's shipped, and how it impacts growth.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-line bg-ink-800/40 p-8 transition-all hover:-translate-y-1 hover:border-sand/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand/10 text-sand transition-colors group-hover:bg-sand group-hover:text-ink">
                  <Icon.Sparkles className="h-5 w-5" />
                </div>
                <div className="font-display text-5xl text-sand/10 transition-colors group-hover:text-sand/30">
                  0{i + 1}
                </div>
              </div>
              <h3 className="mt-8 font-display text-xl text-sand-light">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
