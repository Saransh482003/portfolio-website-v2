"use client";

import React from "react";
import { EXPERIENCE } from "@/data/architectureData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-white/10 py-24 scroll-mt-20">
      <div className="mb-14">
        <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
          <span>05 // VERIFIED PEDIGREE</span>
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Experience &amp; Academic Background
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
          Rigorous research pedigree spanning premier technical institutes (IIT Madras, NTU Singapore) and specialized healthcare AI R&amp;D centers.
        </p>
      </div>

      <div className="space-y-6">
        {EXPERIENCE.map((item, idx) => (
          <div
            key={item.role + idx}
            className="surface-card rounded-2xl p-6 sm:p-7 hover:border-white/20 transition duration-200 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-emerald-400">
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
                <h3 className="text-xl font-bold text-white mt-1.5">{item.role}</h3>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-zinc-300">
                <div className="font-semibold text-white">{item.org}</div>
                <div className="text-zinc-500">{item.dept}</div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 max-w-4xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}