import React, { useEffect, useState } from "react";
import { Logo, Icon } from "./Brand";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-ink/80 border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-20">
        <div className="flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center">
            <Logo />
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-sand-muted transition-colors hover:text-sand-light"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-800 px-5 py-2.5 text-sm text-sand-light transition-all hover:border-sand hover:bg-sand/10"
            >
              Book Consultation
              <Icon.ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-sand-light lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Icon.Close className="h-5 w-5" /> : <Icon.Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-line pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-sand-muted hover:bg-ink-800 hover:text-sand-light"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-ink-800 px-5 py-3 text-sm text-sand-light"
              >
                Book Consultation
                <Icon.ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
