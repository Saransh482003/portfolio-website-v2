"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Database,
  ExternalLink,
  Layers,
  Network,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";
import { PROFILE } from "@/data/architectureData";

interface RagnerPlaycardProps {
  onOpenLoom: () => void;
}

export default function RagnerPlaycard({ onOpenLoom }: RagnerPlaycardProps) {
  const [activeEngine, setActiveEngine] = useState<number>(0);

  const engines = [
    {
      name: "Qdrant Hybrid",
      type: "Vector Engine",
      desc: "Dense embeddings + sparse BM25 for pinpoint clause retrieval",
      badge: "Dense + Sparse",
      icon: Database,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
    {
      name: "RAPTOR Trees",
      type: "Hierarchical Tree",
      desc: "Recursive K-Means clustering for thematic document summaries",
      badge: "Global Synthesis",
      icon: Layers,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      name: "Neo4j GraphRAG",
      type: "Knowledge Graph",
      desc: "Multi-hop entity relations connecting cross-annex obligations",
      badge: "Ontology Traversal",
      icon: Network,
      accent: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    },
  ];

  const sandboxes = [
    { name: "Neuralix", domain: "Industrial AI", url: "https://ragner.vercel.app/explore?bot=neuralix" },
    { name: "Triomics", domain: "Clinical Oncology", url: "https://ragner.vercel.app/explore?bot=triomics" },
    { name: "Straive", domain: "Document Ops", url: "https://ragner.vercel.app/explore?bot=straive" },
    { name: "Scaler", domain: "EdTech Corpus", url: "https://ragner.vercel.app/explore?bot=scaler" },
  ];

  return (
    <div className="surface-card rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
      {/* Ambient background glow inside the poster */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/15 transition-all duration-500" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/15 transition-all duration-500" />

      {/* Browser / App Window Chrome */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="ml-1.5 font-mono text-[11px] text-zinc-400">
            ragner.vercel.app
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Workspace</span>
          </span>
        </div>
      </div>

      {/* Poster Hero Banner */}
      <div className="mt-5 relative z-10">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase text-emerald-400">
            <Sparkles className="h-3 w-3" />
            <span>FLAGSHIP ARCHITECTURE SYSTEM</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">v2.4 Production</span>
        </div>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>RAGner</span>
          <span className="text-zinc-500 text-base font-normal">/</span>
          <span className="text-base font-normal text-zinc-300">
            Tri-Modal Retrieval Workspace
          </span>
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          Engineered to eliminate cross-clause context blindness across 100+ page contracts, commercial leases, and clinical protocols using synchronized vector, tree, and graph intelligence.
        </p>
      </div>

      {/* Tri-Modal Retrieval Architecture Visual Selector */}
      <div className="mt-5 rounded-xl border border-white/10 bg-[#08090d]/80 p-3.5 relative z-10">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2.5">
          <span>TRI-MODAL ENGINE PIPELINE</span>
          <span className="text-emerald-400 font-medium">Click to inspect</span>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {engines.map((eng, idx) => {
            const Icon = eng.icon;
            const active = activeEngine === idx;

            return (
              <button
                key={eng.name}
                type="button"
                onClick={() => setActiveEngine(idx)}
                className={`flex flex-col items-start p-2 rounded-lg text-left font-mono transition-all duration-200 ${
                  active
                    ? `${eng.accent} border shadow-sm`
                    : "border border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-1 w-full justify-between">
                  <Icon className="h-3.5 w-3.5" />
                  <span className="text-[9px] font-semibold">{eng.badge}</span>
                </div>
                <div className="mt-1 text-[11px] font-bold text-white truncate w-full">
                  {eng.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Engine Description */}
        <div className="mt-3 rounded-lg border border-white/5 bg-[#08090d] p-2.5 text-xs text-zinc-300 font-mono flex items-center justify-between">
          <span>{engines[activeEngine].desc}</span>
        </div>
      </div>

      {/* Multi-Tenant B2B Sandboxes Strip */}
      <div className="mt-4 relative z-10">
        <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 mb-1.5">
          <span>4 LIVE MULTI-TENANT WORKSPACES:</span>
          <span className="text-emerald-400 font-semibold">● Isolated Namespaces</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {sandboxes.map((sb) => (
            <a
              key={sb.name}
              href={sb.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-[#08090d] p-2 text-center transition hover:border-emerald-500/50 hover:bg-emerald-500/[0.05] group/sb"
            >
              <div className="text-[11px] font-bold text-white group-hover/sb:text-emerald-300 transition">
                {sb.name}
              </div>
              <div className="text-[9px] font-mono text-zinc-500 truncate">
                {sb.domain}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Direct Playcard Launch CTAs */}
      <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5 relative z-10">
        <a
          href={PROFILE.ragnerLiveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-zinc-950 shadow-lg transition hover:bg-emerald-300 hover:scale-[1.01]"
        >
          <Zap className="h-3.5 w-3.5 text-zinc-950" />
          <span>Launch RAGner Live</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          onClick={onOpenLoom}
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs font-medium text-zinc-200 transition hover:border-white/30 hover:text-white"
        >
          <Play className="h-3.5 w-3.5 text-emerald-400" />
          <span>60s Demo</span>
        </button>
      </div>
    </div>
  );
}