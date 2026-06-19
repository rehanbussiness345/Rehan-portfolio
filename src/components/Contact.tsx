import React, { useState } from "react";
import { Icon } from "./Brand";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "AI Agent Development",
  "SEO Services",
  "Social Media Management",
  "Website Maintenance",
  "Digital Growth Consulting",
];

const budgets = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,500", "$7,500 – $15,000", "$15,000+"];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  details: "",
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const update = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Compose mailto fallback so the form reliably sends to email.
      const subject = encodeURIComponent(`New Project Inquiry — ${form.name} (${form.service || "General"})`);
      const body = encodeURIComponent(
        `Full Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\n\nProject Details:\n${form.details}`
      );

      // Attempt to persist to localStorage as a lightweight "database"
      try {
        const key = "rt_inquiries";
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.push({ ...form, at: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch {
        /* ignore storage errors */
      }

      // Open email client to send inquiry
      window.location.href = `mailto:rehanbussiness345@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-[120px]">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 lg:px-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-sand-muted">05 — Contact</div>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-sand-light md:text-5xl">
              Let's Build Something Amazing Together.
            </h2>
            <p className="mt-6 text-sand-muted">
              Share a few details about your project and I'll get back to you within 24 hours with next steps, timeline and a transparent quote.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:rehanbussiness345@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-800/40 p-5 transition-all hover:border-sand/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand/10 text-sand">
                  <Icon.Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-sand-muted">Email</div>
                  <div className="text-sm text-sand-light">rehanbussiness345@gmail.com</div>
                </div>
              </a>
             
              <a
                href="https://www.instagram.com/rehantrixa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-800/40 p-5 transition-all hover:border-sand/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand/10 text-sand">
                  <Icon.Instagram className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-sand-muted">Instagram</div>
                  <div className="text-sm text-sand-light">@rehantrixa</div>
                </div>
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-gradient-to-br from-sand/5 to-transparent p-6">
              <div className="font-display text-xl text-sand-light">Working hours</div>
              <p className="mt-2 text-sm text-sand-muted">
                Monday – Saturday · 10 AM – 8 PM (GMT+5)<br />
                Response time within 24 hours · Worldwide remote projects welcome.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-3xl border border-line bg-ink-800/40 p-6 md:p-10"
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-display text-2xl text-sand-light">Project Inquiry</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-sand-muted">Confidential</div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-sm text-sand-light outline-none transition-colors focus:border-sand"
                      placeholder="John Doe"
                    />
                  </Field>
                  <Field label="Company Name">
                    <input
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-sm text-sand-light outline-none transition-colors focus:border-sand"
                      placeholder="Acme Inc."
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-sm text-sand-light outline-none transition-colors focus:border-sand"
                      placeholder="you@company.com"
                    />
                  </Field>
                 <Field label="Phone Number">
                    <input
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-sm text-sand-light outline-none transition-colors focus:border-sand"
                      placeholder="+1 555 000 0000"
                    />
                  </Field>
                  <Field label="Service Required" required>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-sm text-sand-light outline-none transition-colors focus:border-sand"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Project Budget">
                    <select
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      className="w-full rounded-xl border border-line bg-ink-900 px-4 py-3 text-sm text-sand-light outline-none transition-colors focus:border-sand"
                    >
                      <option value="">Select a range…</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Project Details" required>
                    <textarea
                      required
                      rows={5}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      className="w-full resize-none rounded-xl border border-line bg-ink-900 px-4 py-3 text-sm text-sand-light outline-none transition-colors focus:border-sand"
                      placeholder="Tell me about your project, goals, timeline and anything else I should know…"
                    />
                  </Field>
                </div>

                <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="text-xs text-sand-muted">
                    By submitting, you agree to be contacted about your inquiry. No spam. Ever.
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-2 rounded-full bg-sand px-8 py-3.5 text-sm font-medium text-ink transition-all hover:bg-sand-light disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending…" : "Send Inquiry"}
                    <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {status === "success" && (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-sand/30 bg-sand/5 p-4 text-sm text-sand-light">
                    <Icon.Check className="mt-0.5 h-5 w-5 text-sand" />
                    <div>
                      <div className="font-medium">Your email client has been opened with your inquiry.</div>
                      <div className="mt-1 text-sand-muted">
                        Your details have also been saved locally. I'll reply within 24 hours at rehanbussiness345@gmail.com.
                      </div>
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                    Something went wrong. Please email me directly at rehanbussiness345@gmail.com.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field: React.FC<{ label: string; required?: boolean; children: React.ReactNode }> = ({ label, required, children }) => (
  <label className="block">
    <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-sand-muted">
      {label} {required && <span className="text-sand">*</span>}
    </span>
    {children}
  </label>
);
