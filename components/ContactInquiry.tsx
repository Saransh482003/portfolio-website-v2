"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, ShieldCheck } from "lucide-react";
import { PROFILE } from "@/data/architectureData";

interface ContactInquiryProps {
  selectedScope: string;
  onSelectScope: (scope: string) => void;
  onNotify?: (msg: string) => void;
}

export default function ContactInquiry({
  selectedScope,
  onSelectScope,
  onNotify,
}: ContactInquiryProps) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    if (onNotify) onNotify(`Copied ${PROFILE.email} to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Project Inquiry: ${selectedScope}] — ${name}${org ? ` (${org})` : ""}`;
    const body = `Hi Saransh,\n\nI am reaching out regarding ${selectedScope}.\n\nProject Requirements & Details:\n${message}\n\nClient Details:\nName: ${name}\nEmail: ${email}\nOrganization: ${org || "N/A"}\n\nBest,\n${name}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="border-t border-white/10 py-24 scroll-mt-20">
      <div className="surface-card rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              06 // INITIATE DIALOGUE
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build or collaborate.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Available for custom enterprise retrieval deployments, AI systems consulting, and high-impact machine learning contracts.
            </p>

            <div className="mt-8 space-y-4">
              <div className="text-xs font-mono text-zinc-400">DIRECT EMAIL:</div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#08090d] px-4 py-3 font-mono text-xs text-zinc-200 transition hover:border-emerald-500/50 hover:text-white"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 text-zinc-400" />
                )}
                <span>{copied ? "Copied to clipboard!" : PROFILE.email}</span>
              </button>

              <div className="flex flex-wrap items-center gap-5 pt-3 font-mono text-xs text-zinc-400">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-emerald-400 flex items-center gap-1 text-emerald-300"
                >
                  <span>Resume PDF</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

              {/* 24-hr Response Commitment */}
              <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 text-xs font-mono text-zinc-300">
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" />
                  <span>RESPONSE COMMITMENT</span>
                </div>
                <p className="mt-1 text-zinc-400 leading-relaxed">
                  All verified project inquiries receive a technical scoping assessment within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleContact} className="space-y-4">
              {/* Scope Selector */}
              <div>
                <label className="mb-2 block font-mono text-xs text-zinc-400">
                  WHAT ARE YOU LOOKING TO BUILD?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Enterprise RAG & GraphRAG",
                    "Computer Vision & Edge AI",
                    "AI Architecture Audit",
                    "General Advisory / Other",
                  ].map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => onSelectScope(scope)}
                      className={`rounded-xl border p-2.5 text-left font-mono text-xs transition ${
                        selectedScope.toLowerCase().includes(scope.toLowerCase().split(" ")[0])
                          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                          : "border-white/10 bg-[#08090d] text-zinc-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] text-zinc-400">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-[#08090d] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] text-zinc-400">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#08090d] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-[11px] text-zinc-400">
                  ORGANIZATION / INSTITUTION
                </label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="Company, Startup, or University"
                  className="w-full rounded-xl border border-white/10 bg-[#08090d] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-[11px] text-zinc-400">
                  PROJECT REQUIREMENTS &amp; TIMELINE *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your document corpus, query challenges, latency targets, or engagement timeline..."
                  className="w-full rounded-xl border border-white/10 bg-[#08090d] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-300 hover:scale-[1.01]"
              >
                <Mail className="h-4 w-4" />
                <span>Send Project Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}