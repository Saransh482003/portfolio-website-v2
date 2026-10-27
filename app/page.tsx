"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SystemsSection from "@/components/SystemsSection";
import FreelanceServices from "@/components/FreelanceServices";
import TechStackMatrix from "@/components/TechStackMatrix";
import EngineeringNotes from "@/components/EngineeringNotes";
import ExperienceSection from "@/components/ExperienceSection";
import ContactInquiry from "@/components/ContactInquiry";
import Modals from "@/components/Modals";
import Footer from "@/components/Footer";
import { EngineeringNote } from "@/data/architectureData";
import { Check } from "lucide-react";

export default function PortfolioPage() {
  const [activeNoteModal, setActiveNoteModal] = useState<EngineeringNote | null>(null);
  const [showLoomModal, setShowLoomModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedScope, setSelectedScope] = useState<string>("Enterprise RAG & GraphRAG");

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedScope(serviceTitle);
  };

  return (
    <div className="relative min-h-screen text-zinc-100 overflow-x-hidden selection:bg-emerald-500/25 selection:text-emerald-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-[#0e1117]/95 px-4 py-3 text-xs font-medium text-emerald-300 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
          <Check className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Dot Matrix Background Grid */}
      <div className="hero-dot-matrix pointer-events-none absolute inset-x-0 top-0 h-[820px]" />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <HeroSection
          onOpenLoom={() => setShowLoomModal(true)}
          onNotify={showNotification}
        />

        <SystemsSection
          onOpenLoom={() => setShowLoomModal(true)}
        />

        <FreelanceServices
          onSelectService={handleSelectService}
        />

        <TechStackMatrix />

        <EngineeringNotes
          onSelectNote={(note) => setActiveNoteModal(note)}
        />

        <ExperienceSection />

        <ContactInquiry
          selectedScope={selectedScope}
          onSelectScope={setSelectedScope}
          onNotify={showNotification}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <Modals
        activeNote={activeNoteModal}
        onCloseNote={() => setActiveNoteModal(null)}
        showLoom={showLoomModal}
        onCloseLoom={() => setShowLoomModal(false)}
      />
    </div>
  );
}
