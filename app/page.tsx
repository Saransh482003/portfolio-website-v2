// app/page.tsx
"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Cpu,
  Database,
  FileText,
  Layers,
  Mail,
  Play,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import {
  PROFILE,
  HERO_SCENARIOS,
  HIGHLIGHTS,
  CASE_STUDIES,
  ENGINEERING_NOTES,
  EXPERIENCE,
  EngineeringNote,
} from "@/data/architectureData";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function PortfolioPage() {
  const [selectedScenario, setSelectedScenario] = useState(HERO_SCENARIOS[0]);
  const [activeNoteModal, setActiveNoteModal] = useState<EngineeringNote | null>(null);
  const [showLoomModal, setShowLoomModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Architecture / Engineering Inquiry — ${name}${org ? ` (${org})` : ""}`;
    const body = `Hi Saransh,\n\n${message}\n\nBest,\n${name}\n${org}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="relative min-h-screen text-zinc-100">
      {/* Subtle Top Hero Dot Matrix */}
      <div className="hero-dot-matrix pointer-events-none absolute inset-x-0 top-0 h-[680px]" />

      {/* FLOATING GLASS PILL NAVBAR */}
      <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0c0c0f]/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white">
            {/* <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span> */}
            <span>Saransh Saini</span>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-medium text-zinc-400 md:flex">
            <a href="#work" className="transition hover:text-white">
              Systems
            </a>
            <a href="#notes" className="transition hover:text-white">
              Architecture Notes
            </a>
            <a href="#experience" className="transition hover:text-white">
              Pedigree
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-1.5 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-1.5 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/10"
            >
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        {/* 1. HERO SECTION: ASYMMETRIC SPLIT WITH LIVE INTERACTIVE ROUTER */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 font-mono text-[11px] font-medium text-emerald-300">
                <Sparkles className="h-3 w-3" />
                <span>{PROFILE.credentials}</span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
                Engineering deterministic{" "}
                <span className="bg-gradient-to-r from-white via-zinc-200 to-emerald-400 bg-clip-text text-transparent">
                  retrieval &amp; vision systems
                </span>{" "}
                for complex corpora.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {PROFILE.bio}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-zinc-950 shadow-lg shadow-white/5 transition hover:bg-zinc-200"
                >
                  <span>Explore Production Systems</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={PROFILE.ragnerLiveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  <span>Launch RAGner Live</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowLoomModal(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
                >
                  <Play className="h-3.5 w-3.5 text-emerald-400" />
                  <span>60s Walkthrough</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Retrieval Console (Fills the empty hero space) */}
            <div className="lg:col-span-5">
              <div className="surface-card rounded-2xl p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-1.5 font-mono text-[11px] font-medium text-zinc-300">
                      ragner-router // interactive trace
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                    {selectedScenario.latency}
                  </span>
                </div>

                {/* Scenario Selector Tabs */}
                <div className="mt-3.5 grid grid-cols-3 gap-1.5 rounded-lg bg-[#070709] p-1">
                  {HERO_SCENARIOS.map((sc) => {
                    const active = sc.id === selectedScenario.id;
                    return (
                      <button
                        key={sc.id}
                        type="button"
                        onClick={() => setSelectedScenario(sc)}
                        className={`rounded-md px-2 py-1.5 font-mono text-[10px] font-medium transition ${
                          active
                            ? "bg-zinc-800 text-white shadow-sm"
                            : "text-zinc-500 hover:text-zinc-300"
                        }`}
                      >
                        {sc.label}
                      </button>
                    );
                  })}
                </div>

                {/* Query & Active Route Display */}
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg border border-white/5 bg-[#070709]/90 p-3">
                    <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
                      <span>INPUT QUERY ({selectedScenario.domain})</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-200">
                      &ldquo;{selectedScenario.query}&rdquo;
                    </p>
                  </div>

                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-3">
                    <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400">
                      <span className="flex items-center gap-1.5">
                        <Zap className="h-3 w-3" />
                        <span>ACTIVE ENGINE: {selectedScenario.activeEngine}</span>
                      </span>
                    </div>
                    <div className="mt-1 font-mono text-[11px] text-zinc-400">
                      {selectedScenario.routingPath}
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/5 bg-[#070709]/90 p-3">
                    <div className="font-mono text-[10px] text-zinc-500">
                      GROUNDED SYNTHESIS OUTPUT
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-300">
                      {selectedScenario.resultPreview}
                    </p>
                    <div className="mt-2.5 border-t border-white/5 pt-2 font-mono text-[10px] text-emerald-400/90">
                      ✓ {selectedScenario.citation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Telemetry Strip in Glass Cards */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="surface-card rounded-xl p-5">
                <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400/90">
                  {item.label}
                </div>
                <div className="mt-1.5 text-base font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-zinc-400">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SELECTED PRODUCTION SYSTEMS */}
        <section id="work" className="border-t border-white/10 py-24">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                01 // PRODUCTION ARCHITECTURE
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Selected Systems &amp; Case Studies
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              Every system is documented by the exact failure mode it resolves, its internal architecture, and its production impact.
            </p>
          </div>

          <div className="space-y-8">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.id}
                className="surface-card rounded-2xl p-6 sm:p-8"
              >
                {/* Header Row */}
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-md bg-white/5 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-400">
                        {study.number}
                      </span>
                      <span className="font-mono text-xs text-zinc-400">
                        {study.category}
                      </span>
                      <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
                        {study.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                      {study.title}
                    </h3>
                    <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-zinc-400">
                      {study.summary}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                    {study.hasVideoWalkthrough && (
                      <button
                        type="button"
                        onClick={() => setShowLoomModal(true)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/25 hover:text-white"
                      >
                        <Play className="h-3.5 w-3.5 text-emerald-400" />
                        <span>60s Walkthrough</span>
                      </button>
                    )}

                    {study.primaryUrl && (
                      <a
                        href={study.primaryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-zinc-200"
                      >
                        <span>{study.primaryLabel}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Key Metric Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#070709] px-3 py-1.5 font-mono text-xs text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* 3-Column Breakdown with Visual Left Accent Bars */}
                <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="rounded-xl border border-white/5 bg-[#070709]/60 p-5">
                    <div className="border-l-2 border-rose-400/80 pl-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                      01 / Failure Mode Solved
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {study.problem}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-[#070709]/60 p-5">
                    <div className="border-l-2 border-emerald-400 pl-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                      02 / System Architecture
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {study.architecture}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-[#070709]/60 p-5">
                    <div className="border-l-2 border-cyan-400 pl-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                      03 / Production Impact
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {study.impact}
                    </p>
                  </div>
                </div>

                {/* Interactive Multi-Tenant Bot Cards for RAGner */}
                {study.sandboxes && (
                  <div className="mt-6 rounded-xl border border-white/10 bg-[#070709]/80 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-xs text-zinc-400">
                        LIVE MULTI-TENANT B2B SANDBOXES (CLICK TO TEST):
                      </span>
                      <span className="font-mono text-[11px] text-emerald-400">
                        ● Isolated Vector Namespaces
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                      {study.sandboxes.map((sb) => (
                        <a
                          key={sb.name}
                          href={sb.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 transition hover:border-emerald-500/40 hover:bg-emerald-500/[0.05]"
                        >
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                              {sb.name}
                            </div>
                            <div className="font-mono text-[11px] text-zinc-500">
                              {sb.domain}
                            </div>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Footer */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. ENGINEERING NOTES: 3-COLUMN BENTO GRID (NO BORING FLAT LIST) */}
        <section id="notes" className="border-t border-white/10 py-24">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                02 // ARCHITECTURAL TEARDOWNS
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Engineering Notes &amp; Benchmarks
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              Deep-dive technical notes on hierarchical retrieval, deterministic routing, and low-latency computer vision.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ENGINEERING_NOTES.map((note) => (
              <div
                key={note.id}
                onClick={() => setActiveNoteModal(note)}
                className="surface-card group flex cursor-pointer flex-col justify-between rounded-2xl p-6 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500">
                    <span className="text-emerald-400">{note.tag}</span>
                    <span>{note.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold leading-snug text-white transition group-hover:text-emerald-300">
                    {note.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {note.summary}
                  </p>

                  {/* Pipeline Spec Pill */}
                  <div className="mt-5 rounded-lg border border-white/5 bg-[#070709] p-3 font-mono text-[11px] text-zinc-300">
                    {note.specFormula}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[11px] text-emerald-400">
                    {note.takeaway}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-medium text-white group-hover:translate-x-0.5 transition">
                    <span>Read</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EXPERIENCE & PEDIGREE: VERTICAL TIMELINE SPINE */}
        <section id="experience" className="border-t border-white/10 py-24">
          <div className="mb-14">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              03 // VERIFIED PEDIGREE
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
              Experience &amp; Academic Background
            </h2>
          </div>

          <div className="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[15px] before:w-px before:bg-gradient-to-b before:from-emerald-500 before:via-zinc-800 before:to-transparent md:before:left-[215px]">
            {EXPERIENCE.map((item) => (
              <div
                key={item.role}
                className="relative grid grid-cols-1 gap-4 pl-10 md:grid-cols-12 md:gap-8 md:pl-0"
              >
                {/* Left Period Column */}
                <div className="md:col-span-3 md:pr-8 md:text-right">
                  <div className="font-mono text-xs font-semibold text-zinc-300">
                    {item.period}
                  </div>
                  <span className="mt-1 inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                    {item.badge}
                  </span>
                </div>

                {/* Timeline Node Dot */}
                <div
                  className={`absolute left-[10px] top-1.5 h-3 w-3 rounded-full border-2 md:left-[210px] ${
                    item.active
                      ? "border-emerald-400 bg-emerald-400 shadow-[0_0_12px_#10b981]"
                      : "border-zinc-600 bg-[#070709]"
                  }`}
                />

                {/* Right Content Card */}
                <div className="surface-card rounded-xl p-6 md:col-span-9">
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <div className="mt-0.5 text-sm font-medium text-zinc-300">
                    {item.org} ·{" "}
                    <span className="text-zinc-500">{item.dept}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CONTACT & ARCHITECTURE INQUIRY */}
        <section id="contact" className="border-t border-white/10 py-24">
          <div className="surface-card rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  04 // INITIATE DIALOGUE
                </div>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                  Let&apos;s build or collaborate.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  Available for custom enterprise retrieval deployments, architecture consulting, and research or engineering collaborations.
                </p>

                <div className="mt-8 space-y-4">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#070709] px-4 py-2.5 font-mono text-xs text-zinc-200 transition hover:border-emerald-500/40 hover:text-white"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-zinc-400" />
                    )}
                    <span>{copied ? "Copied to clipboard!" : PROFILE.email}</span>
                  </button>

                  <div className="flex items-center gap-6 pt-2 font-mono text-xs text-zinc-400">
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href={PROFILE.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      Resume PDF ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form onSubmit={handleContact} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-mono text-[11px] text-zinc-400">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full rounded-lg border border-white/10 bg-[#070709] px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-[11px] text-zinc-400">
                        ORGANIZATION / INSTITUTION
                      </label>
                      <input
                        type="text"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Company or University"
                        className="w-full rounded-lg border border-white/10 bg-[#070709] px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block font-mono text-[11px] text-zinc-400">
                      PROJECT OR INQUIRY DETAILS
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your document corpus, architecture requirements, or research inquiry..."
                      className="w-full rounded-lg border border-white/10 bg-[#070709] px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-zinc-200"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-zinc-500 sm:flex-row">
          <span>© {2026} Saransh Saini · AI Systems Architect</span>
          <span>IIT Madras (&apos;26) · Incoming NTU Singapore (&apos;27)</span>
        </div>
      </footer>

      {/* ENGINEERING NOTE READER MODAL */}
      {activeNoteModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveNoteModal(null)}
        >
          <div
            className="surface-card w-full max-w-2xl rounded-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-emerald-400">
                  {activeNoteModal.tag} · {activeNoteModal.readTime}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {activeNoteModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveNoteModal(null)}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 rounded-lg border border-white/10 bg-[#070709] p-3.5 font-mono text-xs text-emerald-300">
              {activeNoteModal.specFormula}
            </div>

            <div className="mt-5 space-y-4">
              <p className="text-sm leading-relaxed text-zinc-300">
                {activeNoteModal.summary}
              </p>
              {activeNoteModal.details.map((p, idx) => (
                <p key={idx} className="text-sm leading-relaxed text-zinc-400">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LOOM WALKTHROUGH MODAL */}
      {showLoomModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setShowLoomModal(false)}
        >
          <div
            className="surface-card w-full max-w-3xl rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">
                RAGner — 60-Second Architecture Walkthrough
              </h3>
              <button
                type="button"
                onClick={() => setShowLoomModal(false)}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#070709]">
              <iframe
                src={PROFILE.loomEmbedUrl}
                allowFullScreen
                className="h-full w-full border-0"
                title="RAGner Architecture Walkthrough"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}