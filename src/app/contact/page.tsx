"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const contactDetails = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    desc: "Best way to reach me. I reply within 24 hours.",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    desc: "Available during regular business hours.",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: SITE.address,
    desc: "Toledo, Ohio, USA",
  },
  {
    icon: <GitHubIcon size={18} />,
    label: "GitHub",
    value: `github.com/${SITE.githubHandle}`,
    href: SITE.github,
    desc: "See my projects and code contributions.",
    external: true,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        label="06 / Contact"
        title="Let's Connect"
        subtitle="Whether you have an opportunity, a question, or just want to say hello — my inbox is always open."
        gradient="from-[#60a5fa] to-[#34d399]"
      />

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10">

          {/* Contact Info */}
          <AnimatedSection direction="left" className="space-y-5">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-6 hover:border-[#60a5fa]/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#60a5fa]/10 to-[#a78bfa]/10 border border-[#60a5fa]/15 flex items-center justify-center text-[#60a5fa] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#4a5568] mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="font-medium text-sm text-white hover:text-[#60a5fa] transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm text-white">{item.value}</p>
                    )}
                    <p className="text-xs text-[#4a5568] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-[#34d399]/[0.04] to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-400">Open to Opportunities</span>
              </div>
              <p className="text-[#8b9ab5] text-xs leading-relaxed">
                Currently looking for internships, co-op programs, and part-time software roles.
                Particularly interested in data science, systems engineering, and full-stack development.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#34d399]" />

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={56} className="text-emerald-400 mb-5" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                  <p className="text-[#8b9ab5] mb-8">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#34d399] text-white font-semibold text-sm hover:-translate-y-0.5 transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-black mb-6">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8b9ab5] tracking-wide">Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[#60a5fa]/50 focus:ring-1 focus:ring-[#60a5fa]/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8b9ab5] tracking-wide">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[#60a5fa]/50 focus:ring-1 focus:ring-[#60a5fa]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#8b9ab5] tracking-wide">Subject *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-[#60a5fa]/50 focus:ring-1 focus:ring-[#60a5fa]/20 transition-all"
                    >
                      <option value="" disabled>Select a topic...</option>
                      <option value="Internship Opportunity">Internship Opportunity</option>
                      <option value="Co-op Position">Co-op Position</option>
                      <option value="Full-time Role">Full-time Role</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#8b9ab5] tracking-wide">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your opportunity, project idea, or question..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[#60a5fa]/50 focus:ring-1 focus:ring-[#60a5fa]/20 transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-red-400 text-sm">
                      <AlertCircle size={15} />
                      Something went wrong. Please try emailing me directly at {SITE.email}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold bg-gradient-to-r from-[#60a5fa] to-[#34d399] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 transition-all duration-200"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-[#4a5568]">
                    I typically respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
