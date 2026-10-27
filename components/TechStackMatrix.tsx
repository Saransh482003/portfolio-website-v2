"use client";

import React from "react";
import { Cpu, Database, Layers, Terminal } from "lucide-react";
import { TECH_STACK_MATRIX } from "@/data/architectureData";

export default function TechStackMatrix() {
  return (
    <section id="stack" className="border-t border-white/10 py-24 scroll-mt-20">
      <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>03 // PRODUCTION STACK MATRIX</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineering Stack &amp; Capabilities
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-400">
          Technologies deployed in real-world clinical, legal, and enterprise retrieval and computer vision systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {TECH_STACK_MATRIX.map((cat) => (
          <div
            key={cat.category}
            className="surface-card rounded-2xl p-6 hover:border-white/20 transition duration-300"
          >
            <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
              {cat.icon === "Database" && <Database className="h-4 w-4 text-emerald-400" />}
              {cat.icon === "Cpu" && <Cpu className="h-4 w-4 text-cyan-400" />}
              {cat.icon === "Terminal" && <Terminal className="h-4 w-4 text-amber-400" />}
              {cat.icon === "Layers" && <Layers className="h-4 w-4 text-violet-400" />}
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                {cat.category}
              </h3>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {cat.skills.map((sk) => (
                <div
                  key={sk.name}
                  className="rounded-xl border border-white/5 bg-[#08090d] p-3 transition hover:border-white/15"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">{sk.name}</span>
                    <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      {sk.level}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[10px] text-zinc-400 leading-normal">
                    {sk.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}