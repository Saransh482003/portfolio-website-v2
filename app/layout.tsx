// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saranshsaini.in"),
  title: "Saransh Saini — AI Systems Architect | GraphRAG, RAPTOR & Vision Systems",
  description:
    "AI Systems Architect & Incoming MSc AI Researcher at NTU Singapore (CCDS). Former AI/ML Intern at HTIC (IIT Madras Research Park) & BS in Data Science from IIT Madras. Deploying deterministic RAPTOR, Neo4j GraphRAG, and Qdrant retrieval pipelines.",
  keywords: [
    "Saransh Saini",
    "AI Systems Architect",
    "GraphRAG Consultant",
    "RAPTOR RAG",
    "Qdrant Hybrid Search",
    "NTU Singapore MSc AI",
    "IIT Madras Data Science",
    "Enterprise RAG POC",
  ],
  openGraph: {
    title: "Saransh Saini — AI Systems Architect & Incoming MSc AI Researcher (NTU Singapore)",
    description:
      "Deterministic Tri-Modal RAG (Qdrant + RAPTOR + Neo4j) and real-time computer vision pipelines. Request a 48-hour custom retrieval POC.",
    url: "https://www.saranshsaini.in",
    siteName: "Saransh Saini Architecture Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saransh Saini — AI Systems Architect",
    description:
      "Architecting production RAPTOR, Neo4j GraphRAG, and Qdrant systems for enterprise operations and clinical research.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}