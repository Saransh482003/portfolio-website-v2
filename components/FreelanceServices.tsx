"use client";

import React from "react";
import { ArrowUpRight, Check, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { ENGAGEMENT_STEPS, FREELANCE_SERVICES } from "@/data/architectureData";

interface FreelanceServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function FreelanceServices({ onSelectService }: FreelanceServicesProps) {
  return (
    <section id="services" className="border-t border-white/10 py-24 scroll-mt-20">
      <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>02 // FREELANCE BASE OF OPERATIONS</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineering Services &amp; AI Advisory
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-zinc-400">
          Contract engineering &amp; technical advisory for funded startups, enterprise R&amp;D teams, and domain-specific B2B platforms.
        </p>
      </div>

      {/* 3 Core High-Value Freelance Offerings */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {FREELANCE_SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="surface-card flex flex-col justify-between rounded-2xl p-7 hover:border-emerald-500/40 transition-all duration-300 relative group"
          >
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 font-semibold">SERVICE {srv.number}</span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[10px] text-emerald-300">
                  {srv.badge}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-white group-hover:text-emerald-300 transition">
                {srv.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {srv.tagline}
              </p>

              {/* Turnaround Badge */}
              <div className="mt-5 rounded-xl border border-white/5 bg-[#08090d] p-3 font-mono text-xs text-zinc-300">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>TYPICAL TURNAROUND</span>
                </div>
                <div className="text-emerald-400 font-semibold mt-1">{srv.turnaround}</div>
              </div>

              {/* Deliverables */}
              <div className="mt-6 space-y-2.5">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  CORE DELIVERABLES:
                </div>
                {srv.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs leading-relaxed text-zinc-300">
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Target Audience & CTA */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-zinc-500 truncate max-w-[170px]" title={srv.idealFor}>
                {srv.idealFor}
              </span>
              <a
                href="#contact"
                onClick={() => onSelectService(srv.title)}
                className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-white group-hover:text-emerald-300 transition"
              >
                <span>Inquire</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* 4-Step Engagement Timeline */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-[#08090d]/90 p-8">
        <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-medium">
              STRUCTURED ENGAGEMENT WORKFLOW
            </span>
            <h4 className="text-xl font-bold text-white mt-1">
              From Scoping to Production Handover
            </h4>
          </div>
          <span className="font-mono text-xs text-zinc-400">
            Daily async Loom updates · Clean Git commits · Containerized CI/CD
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ENGAGEMENT_STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 relative"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 font-bold">PHASE {step.step}</span>
                <span className="text-zinc-500">{step.timeline}</span>
              </div>
              <div className="mt-2 text-base font-bold text-white">
                {step.title}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition Callout */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 pt-6 border-t border-white/5 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Deterministic routing without infinite loops</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Exact page-level citation provenance</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Rigorous latency &amp; recall benchmark suite</span>
          </div>
        </div>
      </div>
    </section>
  );
}