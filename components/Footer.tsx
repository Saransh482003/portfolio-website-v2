"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE } from "@/data/architectureData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 font-mono text-xs text-zinc-500 md:flex-row">
        <div>
          <span>© 2026 Saransh Saini</span> ·{" "}
          <span className="text-zinc-400">AI Systems Architect &amp; Consultant</span>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-zinc-400">
          <a href="#work" className="hover:text-white transition">Systems</a>
          <a href="#services" className="hover:text-white transition">Freelance Base</a>
          <a href="#notes" className="hover:text-white transition">Notes</a>
          <a href="#stack" className="hover:text-white transition">Stack</a>
          <a href="#experience" className="hover:text-white transition">Pedigree</a>
          <a href={PROFILE.cvUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Resume PDF</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-zinc-500">IIT Madras &apos;26 · NTU Singapore &apos;27</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-full p-2 border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/25 transition"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}