"use client";

import React from "react";
import { ArrowUpRight, Play, Sparkles, Zap } from "lucide-react";
import { HIGHLIGHTS, PROFILE } from "@/data/architectureData";
import RagnerPlaycard from "./RagnerPlaycard";

interface HeroSectionProps {
  onOpenLoom: () => void;
  onNotify?: (msg: string) => void;
}

export default function HeroSection({ onOpenLoom }: HeroSectionProps) {
  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        {/* Left Column (Hero Pitch & Credentials) */}
        <div className="lg:col-span-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-emerald-300 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Available for Select AI Consulting &amp; Contract Eng</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[1.12]">
            Engineering deterministic{" "}
            <span className="bg-gradient-to-r from-white via-zinc-100 to-emerald-400 bg-clip-text text-transparent">
              retrieval &amp; vision systems
            </span>{" "}
            for high-stakes enterprise corpora.
          </h1>

          {/* Body Bio */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I partner with tech companies and enterprise engineering teams to deploy deterministic Tri-Modal retrieval (RAPTOR hierarchical trees, Neo4j GraphRAG, Qdrant hybrid search) and low-latency computer vision pipelines. Engineered to eliminate hallucinations, slash token costs, and replace brittle multi-agent loops.
          </p>

          {/* Pedigree Pill Strip */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono">
            <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
              BS in Data Science, IIT Madras (&apos;26)
            </span>
            <span className="text-zinc-600">·</span>
            <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">
              Incoming MSc in AI, NTU Singapore (&apos;27)
            </span>
            <span className="text-zinc-600">·</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1">
              Ex-AI/ML Intern @ HTIC
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-zinc-950 shadow-xl shadow-white/10 transition hover:bg-emerald-300 hover:scale-[1.02]"
            >
              <Sparkles className="h-4 w-4 text-zinc-950" />
              <span>Start a Project Inquiry</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={PROFILE.ragnerLiveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20 hover:border-emerald-500/50"
            >
              <Zap className="h-4 w-4" />
              <span>Launch RAGner Live</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={onOpenLoom}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white hover:bg-white/[0.08]"
            >
              <Play className="h-3.5 w-3.5 text-emerald-400" />
              <span>60s Video Walkthrough</span>
            </button>
          </div>
        </div>

        {/* Right Column: RAGner Flagship Showcase Playcard */}
        <div className="lg:col-span-5">
          <RagnerPlaycard onOpenLoom={onOpenLoom} />
        </div>
      </div>

      {/* 4 Highlights Cards (High-Contrast Glass Panels) */}
      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.label}
            className="surface-card rounded-2xl p-5 hover:border-emerald-500/30 transition group"
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400/90 font-medium">
              {item.label}
            </div>
            <div className="mt-2 text-base font-bold text-white group-hover:text-emerald-300 transition">
              {item.value}
            </div>
            <div className="mt-1 text-xs leading-relaxed text-zinc-400">
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}