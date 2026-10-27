"use client";

import React, { useState, useMemo } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "@/data/architectureData";

interface SystemsSectionProps {
  onOpenLoom: () => void;
}

export default function SystemsSection({ onOpenLoom }: SystemsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "rag" | "vision" | "agents">("all");
  const [activeTabs, setActiveTabs] = useState<Record<string, "overview" | "flow" | "sandboxes">>({
    ragner: "overview",
    "htic-clinical": "overview",
    "assistive-nav": "overview",
    "curecue-tasim": "overview",
  });

  const filteredStudies = useMemo(() => {
    if (selectedFilter === "all") return CASE_STUDIES;
    return CASE_STUDIES.filter((cs) => cs.domainTag === selectedFilter);
  }, [selectedFilter]);

  const setTab = (studyId: string, tab: "overview" | "flow" | "sandboxes") => {
    setActiveTabs((prev) => ({ ...prev, [studyId]: tab }));
  };

  return (
    <section id="work" className="border-t border-white/10 py-24 scroll-mt-20">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>01 // PRODUCTION ARCHITECTURE</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Battle-Tested Systems &amp; Case Studies
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-400">
          Documented by specific failure modes resolved, underlying graph/tree math, and real production metrics.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-zinc-500 mr-1">FILTER DOMAIN:</span>
        {[
          { id: "all", label: "All Systems (4)" },
          { id: "rag", label: "Enterprise RAG & GraphRAG (2)" },
          { id: "vision", label: "Edge Computer Vision (1)" },
          { id: "agents", label: "Multimodal Systems (1)" },
        ].map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setSelectedFilter(f.id as any)}
            className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition ${
              selectedFilter === f.id
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Case Studies List */}
      <div className="space-y-8">
        {filteredStudies.map((study) => {
          const currentTab = activeTabs[study.id] || "overview";

          return (
            <article
              key={study.id}
              className="surface-card rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300"
            >
              {/* Header Row */}
              <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-400">
                      SYSTEM {study.number}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {study.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300">
                      {study.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
                    {study.summary}
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  {study.hasVideoWalkthrough && (
                    <button
                      type="button"
                      onClick={onOpenLoom}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-zinc-200 transition hover:border-white/30 hover:text-white"
                    >
                      <Play className="h-3.5 w-3.5 text-emerald-400" />
                      <span>60s Video</span>
                    </button>
                  )}

                  {study.primaryUrl && (
                    <a
                      href={study.primaryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-300"
                    >
                      <span>{study.primaryLabel}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Key Metric Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {study.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#08090d] px-3 py-1.5 font-mono text-xs text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              {/* Internal Tab Switcher */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-white/5 pb-3">
                <button
                  type="button"
                  onClick={() => setTab(study.id, "overview")}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition ${
                    currentTab === "overview"
                      ? "bg-white/10 text-white border border-white/15"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Failure Mode &amp; Architecture
                </button>
                {study.flowSteps && (
                  <button
                    type="button"
                    onClick={() => setTab(study.id, "flow")}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition ${
                      currentTab === "flow"
                        ? "bg-white/10 text-white border border-white/15"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Interactive 4-Step Flow
                  </button>
                )}
                {study.sandboxes && (
                  <button
                    type="button"
                    onClick={() => setTab(study.id, "sandboxes")}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition ${
                      currentTab === "sandboxes"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "text-zinc-400 hover:text-emerald-300"
                    }`}
                  >
                    Live B2B Sandboxes ({study.sandboxes.length})
                  </button>
                )}
              </div>

              {/* Tab 1: Overview */}
              {currentTab === "overview" && (
                <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
                  <div className="rounded-xl border border-white/5 bg-[#08090d]/80 p-5">
                    <div className="border-l-2 border-rose-400/90 pl-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                      01 / Failure Mode Solved
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {study.problem}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-[#08090d]/80 p-5">
                    <div className="border-l-2 border-emerald-400 pl-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                      02 / System Architecture
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {study.architecture}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-[#08090d]/80 p-5">
                    <div className="border-l-2 border-cyan-400 pl-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                      03 / Production Impact
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {study.impact}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: Flow */}
              {currentTab === "flow" && study.flowSteps && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {study.flowSteps.map((fs) => (
                    <div
                      key={fs.step}
                      className="rounded-xl border border-white/10 bg-[#08090d] p-4 relative"
                    >
                      <div className="font-mono text-xs font-semibold text-emerald-400">
                        PHASE {fs.step}
                      </div>
                      <div className="mt-1 text-sm font-bold text-white">
                        {fs.title}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                        {fs.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Sandboxes */}
              {currentTab === "sandboxes" && study.sandboxes && (
                <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs font-medium text-emerald-300">
                      ISOLATED MULTI-TENANT TEST SANDBOXES:
                    </span>
                    <span className="font-mono text-[11px] text-zinc-400">
                      Click to test live query endpoints
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {study.sandboxes.map((sb) => (
                      <a
                        key={sb.name}
                        href={sb.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#08090d] p-4 transition hover:border-emerald-500/50 hover:bg-emerald-500/[0.06]"
                      >
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-emerald-300">
                            {sb.name}
                          </div>
                          <div className="font-mono text-xs text-zinc-400 mt-1">
                            {sb.domain}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                          <span>Launch Sandbox</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Footer */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-5">
                <span className="font-mono text-[11px] text-zinc-500 mr-2">TECH DEPLOYED:</span>
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
          );
        })}
      </div>
    </section>
  );
}