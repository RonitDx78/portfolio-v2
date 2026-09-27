"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const info = [
  { icon: <Mail size={15} />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: <Phone size={15} />, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: <MapPin size={15} />, label: "Location", value: SITE.location },
  { icon: <GitHubIcon size={15} />, label: "GitHub", value: `github.com/${SITE.githubHandle}`, href: SITE.github, external: true },
];

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
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

  const inputCls = "w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-3 text-[#ccd6f6] text-sm placeholder-[#4a5568] focus:outline-none focus:border-[#64ffda]/50 focus:ring-1 focus:ring-[#64ffda]/20 transition-all";

  return (
    <>
      <PageHero
        num="06. Contact"
        title="Get In Touch"
        subtitle="Currently open to new opportunities. Whether it's a question or a job offer — I&apos;d love to hear from you."
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-28">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10">

          {/* Info */}
          <AnimatedSection direction="left" className="space-y-4">
            {info.map(item => (
              <div key={item.label} className="bg-[#112240] border border-[#233554] rounded p-5 flex items-start gap-4 hover:border-[#64ffda]/30 transition-colors">
                <span className="text-[#64ffda] mt-0.5 shrink-0">{item.icon}</span>
                <div className="min-w-0">
                  <p className="mono text-[#8892b0] text-[11px] mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={(item as { external?: boolean }).external ? "_blank" : undefined}
                      rel={(item as { external?: boolean }).external ? "noopener noreferrer" : undefined}
                      className="text-[#ccd6f6] text-sm hover:text-[#64ffda] transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#ccd6f6] text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="bg-[#112240] border border-[#233554] rounded p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="mono text-xs text-emerald-400">Open to Opportunities</span>
              </div>
              <p className="text-[#8892b0] text-xs leading-relaxed">
                Looking for internships, co-ops, and part-time software roles in data science,
                systems engineering, and full-stack development.
              </p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <div className="bg-[#112240] border border-[#233554] rounded p-8 md:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle size={48} className="text-[#64ffda] mb-5" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">Message Sent!</h3>
                  <p className="text-[#8892b0] text-sm mb-8">I&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mono text-[#64ffda] border border-[#64ffda]/40 px-6 py-2 rounded hover:bg-[#64ffda]/10 transition-colors text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-6">Send a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="mono text-[#8892b0] text-xs">Your Name *</label>
                      <input name="name" value={form.name} onChange={change} required placeholder="Jane Smith" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="mono text-[#8892b0] text-xs">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={change} required placeholder="jane@example.com" className={inputCls} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="mono text-[#8892b0] text-xs">Subject *</label>
                    <select name="subject" value={form.subject} onChange={change} required className={`${inputCls} bg-[#0a192f]`}>
                      <option value="" disabled>Select a topic...</option>
                      <option>Internship Opportunity</option>
                      <option>Co-op Position</option>
                      <option>Full-time Role</option>
                      <option>Collaboration</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="mono text-[#8892b0] text-xs">Message *</label>
                    <textarea name="message" value={form.message} onChange={change} required rows={6} placeholder="Tell me about your opportunity or project..." className={`${inputCls} resize-none`} />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded bg-red-900/20 border border-red-700/40 text-red-400 text-sm">
                      <AlertCircle size={14} />
                      Something went wrong. Please email me directly at {SITE.email}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mono w-full flex items-center justify-center gap-2 py-3.5 rounded border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
                  >
                    {status === "loading" ? (
                      <><div className="w-4 h-4 rounded-full border-2 border-[#64ffda]/30 border-t-[#64ffda] animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={14} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
