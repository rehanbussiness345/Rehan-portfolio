import React from "react";
import { Icon } from "./Brand";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-[120px]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-20">
        <div className="grid items-start gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-sand-muted">01 — About</div>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-sand-light md:text-5xl">
              Web Developer, Mobile App Developer &amp; AI Agent Developer.
            </h2>
            <div className="mt-10 space-y-3">
              {[
                "Custom Solutions, Not Templates",
                "Performance & SEO By Default",
                "End-to-End Digital Growth",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border border-line bg-ink-800/50 px-4 py-3 text-sm text-sand-light">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sand text-ink">
                    <Icon.Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-[15px] leading-[1.85] text-sand-muted md:col-span-7">
            <p>
              I help businesses establish a powerful online presence through custom websites,
              mobile applications, AI-powered automation, and digital growth strategies.
              With expertise in modern web technologies, mobile app development, AI agent
              creation, and SEO optimization, I create solutions tailored specifically to each
              client's goals and industry requirements.
            </p>
            <p>
              Every business is unique, which is why I develop custom solutions rather than
              one-size-fits-all products. From startup landing pages to enterprise-level
              platforms, I focus on delivering scalable, high-performance solutions that drive
              measurable business results.
            </p>
            <p>
              My services go beyond development. I help businesses improve their search engine
              visibility, increase online traffic, generate quality leads, automate workflows
              using AI agents, strengthen social media presence, and build long-term digital
              growth strategies.
            </p>
            <p>
              Whether you need a website, mobile application, AI assistant, SEO strategy, or
              complete digital transformation — I provide end-to-end solutions designed to help
              your business grow faster and operate more efficiently.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "40+", v: "Projects" },
                { k: "15+", v: "Clients" },
                { k: "1+", v: "Industries" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-line bg-ink-800/40 p-5 text-center">
                  <div className="font-display text-3xl text-sand-light">{s.k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-sand-muted">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
