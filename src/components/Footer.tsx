import React from "react";
import { Logo, Icon } from "./Brand";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-ink-900">
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-sand-muted">
              Web Developer, Mobile App Developer, AI Agent Developer &amp; Digital Growth Consultant.
              Helping businesses publish, rank and scale online — one high-performance solution at a time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/rehantrixa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-sand-muted transition-all hover:border-sand hover:text-sand"
              >
                <Icon.Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:rehanbussiness345@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-sand-muted transition-all hover:border-sand hover:text-sand"
              >
                <Icon.Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+923000000000"
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-sand-muted transition-all hover:border-sand hover:text-sand"
              >
                <Icon.Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-sand-muted">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm text-sand-light/90">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Projects", "#projects"],
                ["Process", "#process"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="transition-colors hover:text-sand">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-sand-muted">Services</div>
            <ul className="mt-5 space-y-3 text-sm text-sand-light/90">
              {["Web Development", "Mobile Apps", "AI Agents", "UI/UX Design", "SEO Growth", "Social Media"].map((l) => (
                <li key={l}>
                  <a href="#services" className="transition-colors hover:text-sand">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-sand-muted">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-sand-light/90">
              <li>
                <a href="mailto:rehanbussiness345@gmail.com" className="break-all transition-colors hover:text-sand">
                  rehanbussiness345@gmail.com
                </a>
              </li>
              
              <li className="text-sand-muted">Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-sand-muted md:flex-row md:items-center">
          <div>© {year} Rehan Trixa. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#top" className="transition-colors hover:text-sand">Back to top ↑</a>
            <span>Crafted with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
