"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { EngineeringNote, PROFILE } from "@/data/architectureData";

interface ModalsProps {
  activeNote: EngineeringNote | null;
  onCloseNote: () => void;
  showLoom: boolean;
  onCloseLoom: () => void;
}

export default function Modals({
  activeNote,
  onCloseNote,
  showLoom,
  onCloseLoom,
}: ModalsProps) {
  // Handle ESC key to close open modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeNote) onCloseNote();
        if (showLoom) onCloseLoom();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeNote, showLoom, onCloseNote, onCloseLoom]);

  return (
    <>
      {/* ENGINEERING NOTE READER MODAL */}
      {activeNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={onCloseNote}
        >
          <div
            className="surface-card w-full max-w-2xl rounded-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-emerald-400">
                  {activeNote.tag} · {activeNote.readTime}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  {activeNote.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseNote}
                className="rounded-lg p-2 text-zinc-400 hover:bg-white/10 hover:text-white"
                aria-label="Close Note"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Formula Specification */}
            <div className="mt-4 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-3.5 font-mono text-xs text-emerald-300 overflow-x-auto">
              {activeNote.specFormula}
            </div>

            {/* Content Details */}
            <div className="mt-5 space-y-4">
              <p className="text-sm font-medium leading-relaxed text-zinc-200">
                {activeNote.summary}
              </p>
              {activeNote.details.map((p, idx) => (
                <p key={idx} className="text-sm leading-relaxed text-zinc-400">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-400">
                Key Result: {activeNote.takeaway}
              </span>
              <button
                type="button"
                onClick={onCloseNote}
                className="rounded-lg border border-white/15 px-3 py-1.5 font-mono text-xs text-zinc-300 hover:bg-white/5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOOM VIDEO WALKTHROUGH MODAL */}
      {showLoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={onCloseLoom}
        >
          <div
            className="surface-card w-full max-w-3xl rounded-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">
                  RAGner — 60-Second Architecture Walkthrough
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Live demo of multi-tenant B2B sandboxes and recursive tree retrieval
                </p>
              </div>
              <button
                type="button"
                onClick={onCloseLoom}
                className="rounded-lg p-2 text-zinc-400 hover:bg-white/10 hover:text-white"
                aria-label="Close Video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#08090d]">
              <iframe
                src={PROFILE.loomEmbedUrl}
                allowFullScreen
                className="h-full w-full border-0"
                title="RAGner Architecture Walkthrough"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}