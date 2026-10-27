"use client";

import React, { useState } from "react";
import { Check, Clock, Copy, Zap } from "lucide-react";
import { HERO_SCENARIOS, HeroScenario } from "@/data/architectureData";

interface HeroTelemetryProps {
  onNotify?: (msg: string) => void;
}

export default function HeroTelemetry({ onNotify }: HeroTelemetryProps) {
  const [selectedScenario, setSelectedScenario] = useState<HeroScenario>(HERO_SCENARIOS[0]);
  const [copiedQuery, setCopiedQuery] = useState(false);

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(selectedScenario.query);
    setCopiedQuery(true);
    if (onNotify) onNotify("Query copied to clipboard");
    setTimeout(() => setCopiedQuery(false), 2000);
  };

  return (
    <div className="surface-card rounded-2xl p-5 shadow-2xl relative overflow-hidden">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="ml-1.5 font-mono text-[11px] font-semibold text-zinc-200">
            telemetry // deterministic-tracer
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
            <Clock className="h-3 w-3" />
            {selectedScenario.latency}
          </span>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="mt-3.5">
        <div className="text-[10px] font-mono text-zinc-400 mb-1.5 tracking-wider uppercase">
          BENCHMARK SCENARIO:
        </div>
        <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-[#08090d] p-1 border border-white/5">
          {HERO_SCENARIOS.map((sc) => {
            const active = sc.id === selectedScenario.id;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenario(sc)}
                className={`rounded-lg px-2 py-2 text-center font-mono text-[10px] font-medium transition ${
                  active
                    ? "bg-white/10 text-white shadow-sm border border-white/15"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                }`}
              >
                {sc.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual 4-Stage Routing Pipeline */}
      <div className="mt-4 rounded-xl border border-white/5 bg-[#08090d]/80 p-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
          <span>PIPELINE ROUTING STAGES</span>
          <span className="text-emerald-400">Deterministic Flow</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[9px]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-1.5">
            <div className="text-zinc-500">01 INGEST</div>
            <div className="text-zinc-200 font-semibold truncate">Query Parser</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-1.5">
            <div className="text-zinc-500">02 ROUTE</div>
            <div className="text-zinc-200 font-semibold truncate">Intent Matrix</div>
          </div>
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-1.5 text-emerald-300">
            <div className="text-emerald-400">03 RETRIEVAL</div>
            <div className="font-semibold truncate">Tri-Modal</div>
          </div>
          <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-1.5 text-cyan-300">
            <div className="text-cyan-400">04 GROUND</div>
            <div className="font-semibold truncate">Page Citation</div>
          </div>
        </div>
      </div>

      {/* Scenario Query Display */}
      <div className="mt-3.5 space-y-3">
        <div className="rounded-xl border border-white/10 bg-[#08090d] p-3.5">
          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
            <span>INPUT CORPUS: {selectedScenario.domain.toUpperCase()}</span>
            <button
              type="button"
              onClick={handleCopyQuery}
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition"
              title="Copy prompt text"
            >
              {copiedQuery ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              <span>{copiedQuery ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <p className="mt-1.5 text-xs font-normal leading-relaxed text-zinc-200">
            &ldquo;{selectedScenario.query}&rdquo;
          </p>
        </div>

        {/* Active Engine */}
        <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-3">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
            <Zap className="h-3.5 w-3.5 shrink-0" />
            <span className="font-semibold">ENGINE: {selectedScenario.activeEngine}</span>
          </div>
          <div className="mt-1 font-mono text-[11px] text-zinc-300">
            {selectedScenario.routingPath}
          </div>
        </div>

        {/* Grounded Output */}
        <div className="rounded-xl border border-white/10 bg-[#08090d] p-3.5">
          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
            <span>GROUNDED SYNTHESIS OUTPUT</span>
            <span className="text-emerald-400 font-semibold">Verified Grounding</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-zinc-300">
            {selectedScenario.resultPreview}
          </p>
          <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/5 pt-2 font-mono text-[10px] text-emerald-300">
            <Check className="h-3 w-3 text-emerald-400 shrink-0" />
            <span>{selectedScenario.citation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}