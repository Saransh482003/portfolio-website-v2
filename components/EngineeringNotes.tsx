"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ENGINEERING_NOTES, EngineeringNote } from "@/data/architectureData";

interface EngineeringNotesProps {
  onSelectNote: (note: EngineeringNote) => void;
}

export default function EngineeringNotes({ onSelectNote }: EngineeringNotesProps) {
  return (
    <section id="notes" className="border-t border-white/10 py-24 scroll-mt-20">
      <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>04 // ARCHITECTURAL TEARDOWNS</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineering Notes &amp; Benchmarks
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-400">
          Deep-dive technical notes on hierarchical retrieval, deterministic routing, and low-latency computer vision.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ENGINEERING_NOTES.map((note) => (
          <div
            key={note.id}
            onClick={() => onSelectNote(note)}
            className="surface-card group flex cursor-pointer flex-col justify-between rounded-2xl p-6 hover:-translate-y-1 transition duration-200"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <span className="text-emerald-400 font-medium">{note.tag}</span>
                <span>{note.readTime}</span>
              </div>

              <h3 className="mt-3 text-lg font-bold leading-snug text-white transition group-hover:text-emerald-300">
                {note.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {note.summary}
              </p>

              {/* Pipeline Spec Pill */}
              <div className="mt-5 rounded-lg border border-white/5 bg-[#08090d] p-3 font-mono text-[11px] text-zinc-300 overflow-x-auto">
                {note.specFormula}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="font-mono text-[11px] text-emerald-400">
                {note.takeaway}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs font-medium text-white group-hover:translate-x-0.5 transition">
                <span>Read Note</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}