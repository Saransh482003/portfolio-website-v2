"use client";

import React from "react";
import { Check } from "lucide-react";
import { EXPERIENCE } from "@/data/architectureData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/10 py-24 scroll-mt-20">
      {/* Header */}
      <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>05 // VERIFIED PEDIGREE</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic &amp; Research Pedigree
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-400">
          A chronological trajectory of clinical AI research, scalable systems development, and academic excellence across IIT Madras &amp; NTU Singapore.
        </p>
      </div>

      {/* Bulletproof Two-Column Timeline */}
      <div className="relative">
        {/* Continuous Luminous Vertical Spine (Centered on the 32px node column) */}
        <div className="pointer-events-none absolute left-[15px] top-4 bottom-6 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/35 to-zinc-800/50" />

        <div className="space-y-10">
          {EXPERIENCE.map((item, idx) => (
            <div key={item.role + idx} className="relative flex items-start gap-4 sm:gap-7 group">
              {/* Timeline Milestone Node (32px wide column, centered directly on the 15px spine) */}
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
                {item.active ? (
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 animate-ping" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_16px_#10b981]" />
                  </div>
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-500/60 bg-[#08090d] shadow-sm group-hover:border-emerald-400 group-hover:scale-110 transition duration-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                )}
              </div>

              {/* Milestone Card — Completely separated in flex-1, zero overlap possible */}
              <div className="surface-card flex-1 rounded-2xl p-6 sm:p-7 hover:border-emerald-500/40 transition-all duration-300">
                {/* Milestone Top Row: Period & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-white/10 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-zinc-300">
                      {item.badge}
                    </span>
                    {item.active && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active / Incoming</span>
                      </span>
                    )}
                  </div>

                  <div className="font-mono text-xs text-zinc-400 sm:text-right">
                    <div className="font-semibold text-white">{item.org}</div>
                    <div className="text-zinc-500 text-[11px]">{item.dept}</div>
                  </div>
                </div>

                {/* Milestone Title & Main Description */}
                <h3 className="text-xl font-bold text-white mt-4 group-hover:text-emerald-300 transition">
                  {item.role}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                  {item.description}
                </p>

                {/* Bulleted Milestone Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs leading-relaxed text-zinc-400">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Skills & Competencies Tags */}
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/5">
                    <span className="font-mono text-[10px] text-zinc-500 mr-1 uppercase">FOCUS:</span>
                    {item.skills.map((sk) => (
                      <span
                        key={sk}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}