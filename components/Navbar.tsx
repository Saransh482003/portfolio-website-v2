"use client";

import React, { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { PROFILE } from "@/data/architectureData";

export function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0c0d12]/85 px-4 py-2.5 sm:px-5 sm:py-3 shadow-2xl backdrop-blur-xl">
        {/* Brand / Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:text-emerald-300 transition"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-semibold text-white">Saransh Saini</span>
          <span className="hidden lg:inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
            AI Architect
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-400 md:flex">
          <a href="#work" className="transition hover:text-white">
            Systems
          </a>
          <a href="#services" className="transition hover:text-white">
            Freelance Base
          </a>
          <a href="#notes" className="transition hover:text-white">
            Architecture Notes
          </a>
          <a href="#stack" className="transition hover:text-white">
            Capabilities
          </a>
          <a href="#experience" className="transition hover:text-white">
            Pedigree
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        {/* Action icons & primary CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-full p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-emerald-500/40 hover:bg-white/10"
          >
            <FileText className="h-3.5 w-3.5 text-emerald-400" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-zinc-950 shadow-md transition hover:bg-emerald-300"
          >
            <span>Work With Me</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-2xl border border-white/10 bg-[#0c0d12]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-3 font-medium text-sm text-zinc-300">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Production Systems
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Freelance Services &amp; Advisory
            </a>
            <a
              href="#notes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Architecture Notes
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Capabilities &amp; Stack
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Verified Pedigree
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 rounded-lg hover:bg-white/5 hover:text-white text-emerald-400"
            >
              Initiate Project Inquiry →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}