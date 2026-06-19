import React from "react";
import { Icon } from "./Brand";

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-36">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 grain" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sand/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10 lg:px-20">
        <div className="grid items-center gap-16 pb-24 pt-10 md:grid-cols-12 md:pt-16">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-800/60 px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand-muted animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sand" />
              </span>
              Accepting New Projects · 2026
            </div>

            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-sand-light sm:text-6xl md:text-7xl lg:text-[88px] animate-fade-up">
              Publishing Success,
              <br />
              <span className="italic text-sand">Building Businesses.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-sand-muted md:text-lg animate-fade-up">
              Web Development · Mobile Apps · AI Agents · SEO Growth · Social Media Management.
              I help founders and brands turn ideas into high-performing digital products that
              generate measurable results.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3.5 text-sm font-medium text-ink transition-all hover:bg-sand-light"
              >
                View Projects
                <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-800 px-6 py-3.5 text-sm text-sand-light transition-all hover:border-sand hover:bg-sand/10"
              >
                Book Consultation
                <Icon.ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm text-sand-muted transition-all hover:border-line-strong hover:text-sand-light"
              >
                Get Free Quote
              </a>
              <a
                href="mailto:rehanbussiness345@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm text-sand-muted transition-all hover:text-sand-light"
              >
                <Icon.Mail className="h-4 w-4" />
                Contact Now
              </a>
            </div>

           // <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-8 animate-fade-up">
              {[
                { k: "40+", v: "Projects Delivered" },
                { k: "15+", v: "Happy Clients" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-sand-light md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-sand-muted">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative md:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[28px] border border-line bg-gradient-to-br from-ink-800 to-ink-900 p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-ink-900">
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute inset-0 grain" />

                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-sand-muted">Portfolio · v2026</div>
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-sand/40" />
                      <span className="h-2 w-2 rounded-full bg-sand/60" />
                      <span className="h-2 w-2 rounded-full bg-sand" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-line bg-ink-800/80 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand/10 text-sand">
                          <Icon.Code className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-sand-light">Web Development</div>
                          <div className="text-xs text-sand-muted">React · Next.js</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-line bg-ink-800/80 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand/10 text-sand">
                          <Icon.Smartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-sand-light">Mobile Apps</div>
                          <div className="text-xs text-sand-muted">iOS · Android</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-sand/30 bg-sand/5 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand text-ink">
                          <Icon.Bot className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-sand-light">AI Agents</div>
                          <div className="text-xs text-sand-muted">Automation · LLMs</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-sand-muted">
                    <span>SEO · SMM · Design</span>
                    <span className="text-sand">● Live</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-ink-800/90 p-4 backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sand/10 text-sand">
                  <Icon.Chart className="h-4 w-4" />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Brand strip */}
        <div className="border-y border-line py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.3em] text-sand-muted/70">
            <span>React</span><span>·</span>
            <span>Next.js</span><span>·</span>
            <span>TypeScript</span><span>·</span>
            <span>Node.js</span><span>·</span>
            <span>React Native</span><span>·</span>
            <span>Flutter</span><span>·</span>
            <span>OpenAI</span><span>·</span>
            <span>LangChain</span><span>·</span>
            <span>Tailwind</span><span>·</span>
            <span>WordPress</span>
          </div>
        </div>
      </div>
    </section>
  );
};
