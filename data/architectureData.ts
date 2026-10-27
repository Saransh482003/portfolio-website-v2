// data/architectureData.ts

export interface HeroScenario {
  id: string;
  label: string;
  domain: string;
  query: string;
  activeEngine: string;
  routingPath: string;
  latency: string;
  resultPreview: string;
  citation: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  domainTag: "rag" | "vision" | "agents" | "all";
  badge: string;
  summary: string;
  metrics: string[];
  problem: string;
  architecture: string;
  impact: string;
  stack: string[];
  flowSteps?: { step: string; title: string; desc: string }[];
  primaryUrl?: string;
  primaryLabel?: string;
  hasVideoWalkthrough?: boolean;
  sandboxes?: { name: string; domain: string; url: string }[];
}

export interface FreelanceService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  deliverables: string[];
  idealFor: string;
  turnaround: string;
  badge: string;
}

export interface EngagementStep {
  step: string;
  title: string;
  timeline: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: string; note: string }[];
}

export interface EngineeringNote {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  summary: string;
  specFormula: string;
  takeaway: string;
  details: string[];
}

export const PROFILE = {
  name: "Saransh Saini",
  role: "AI Systems Architect",
  credentials: "BS in Data Science, IIT Madras ('26) · Incoming MSc in AI, NTU Singapore ('27)",
  bio: "I architect and deploy deterministic retrieval pipelines (GraphRAG, RAPTOR, Qdrant) and low-latency computer vision systems for enterprise document intelligence and clinical research.",
  email: "saranshsaini48@gmail.com",
  github: "https://github.com/Saransh482003",
  linkedin: "https://www.linkedin.com/in/saranshsaini48/",
  cvUrl: "/Saransh_Saini_CV.pdf",
  ragnerLiveUrl: "https://ragner.vercel.app/",
  loomEmbedUrl: "https://www.loom.com/embed/YOUR_LOOM_VIDEO_ID",
};

export const HERO_SCENARIOS: HeroScenario[] = [
  {
    id: "lease-audit",
    label: "100-Page Lease Audit",
    domain: "Commercial Real Estate / Legal",
    query:
      "How do the force majeure exceptions in Exhibit C modify the default indemnification cap across Sections 14 and 22?",
    activeEngine: "RAPTOR Hierarchical Tree + Qdrant Hybrid",
    routingPath: "Intent Classifier → Collapsed Tree (Level 2 Summary + Leaf Clauses)",
    latency: "640ms retrieval",
    resultPreview:
      "Exhibit C (§C.4) carves out supply-chain delays from standard Section 14 defaults, capping aggregate indemnification at 1.5x annual base rent rather than the uncapped liability in Section 22.1.",
    citation: "Verified: Master_Lease_2026.pdf · Pages 19, 48, 112 (RAPTOR Cluster #04)",
  },
  {
    id: "clinical-rag",
    label: "Clinical Trial Protocol",
    domain: "Biomedical Research (HTIC / Oncology)",
    query:
      "Cross-reference patient exclusion criteria for Stage III cohorts against cardiotoxicity biomarkers across all trial amendments.",
    activeEngine: "Neo4j GraphRAG + RAPTOR Synthesis",
    routingPath: "Intent Classifier → Cypher 2-Hop Ontology Traversal + Tree Synthesis",
    latency: "710ms retrieval",
    resultPreview:
      "Amendment 3 excludes patients with baseline LVEF < 50% or elevated Troponin-I (>0.04 ng/mL) when co-administered with anthracycline regimens.",
    citation: "Verified: Protocol_Oncology_v3.pdf · §4.2 & Ontology Node [Cardiotoxicity_Edge_12]",
  },
  {
    id: "pinpoint-lookup",
    label: "Pinpoint Clause Lookup",
    domain: "Enterprise Operations",
    query:
      "Locate the exact SLA termination penalty formula and grace period for Tier-1 infrastructure outages.",
    activeEngine: "Qdrant Hybrid (Dense BGE + Sparse BM25)",
    routingPath: "Intent Classifier → Reciprocal Rank Fusion (RRF Top-5 Leaf Nodes)",
    latency: "190ms retrieval",
    resultPreview:
      " Outages exceeding 45 continuous minutes trigger a 5% service credit per 30-minute increment, with unilateral termination rights activating after 3 breaches in any rolling 60-day window.",
    citation: "Verified: Enterprise_MSA_Annex_B.pdf · Page 34, Clause 9.3",
  },
];

export const HIGHLIGHTS = [
  {
    label: "Retrieval Architecture",
    value: "Tri-Modal RAG",
    detail: "Qdrant Hybrid Search + RAPTOR Trees + Neo4j GraphRAG",
  },
  {
    label: "R&D Pedigree",
    value: "HTIC · IITM Research Park",
    detail: "Clinical RAG synthesis & cardiovascular vision pipelines",
  },
  {
    label: "Academic Credentials",
    value: "IIT Madras & NTU Singapore",
    detail: "BS in Data Science ('26) · Incoming MSc in AI ('27)",
  },
  {
    label: "Core Production Stack",
    value: "PyTorch · FastAPI · Docker",
    detail: "Next.js, OpenCV, LangChain, Qdrant & Neo4j",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ragner",
    number: "01",
    category: "Flagship Enterprise Retrieval System",
    domainTag: "rag",
    title: "RAGner — Tri-Modal Agentic Retrieval Workspace",
    badge: "Live Production",
    summary:
      "Multi-tenant document intelligence platform engineered to eliminate cross-clause context blindness on 100+ page legal contracts, commercial leases, and clinical SOPs.",
    metrics: [
      "3 Retrieval Engines (Vector + Tree + Graph)",
      "4 Live Multi-Tenant B2B Workspaces",
      "Recursive K-Means RAPTOR Clustering",
    ],
    primaryUrl: "https://ragner.vercel.app/",
    primaryLabel: "Launch Workspace",
    hasVideoWalkthrough: true,
    problem:
      "Standard top-k vector RAG slices long documents into isolated 500-token chunks—losing cross-section dependencies and failing on global synthesis or multi-hop entity queries.",
    architecture:
      "Engineered a deterministic router orchestrating Qdrant (hybrid dense + sparse BM25 search for exact lookups), RAPTOR (recursive K-Means tree summarization for global context), and Neo4j GraphRAG (multi-hop entity traversal).",
    impact:
      "Eliminated cross-annex hallucinations on complex long-form PDFs and shipped isolated multi-tenant B2B sandboxes with strict page-level citation grounding.",
    stack: ["Python", "FastAPI", "Next.js", "Qdrant", "RAPTOR", "Neo4j", "Docker"],
    flowSteps: [
      { step: "01", title: "Hierarchical Chunking", desc: "PDF structure parsing & table retention into structured text chunks" },
      { step: "02", title: "Tri-Modal Indexing", desc: "Dense/BM25 in Qdrant, recursive tree in RAPTOR, & entity graph in Neo4j" },
      { step: "03", title: "Deterministic Routing", desc: "Intent classifier routes pinpoint, thematic, or multi-hop queries" },
      { step: "04", title: "Page-Grounding", desc: "Reciprocal rank fusion with strict page & paragraph citations" },
    ],
    sandboxes: [
      {
        name: "Neuralix",
        domain: "Industrial AI",
        url: "https://ragner.vercel.app/explore?bot=neuralix",
      },
      {
        name: "Triomics",
        domain: "Clinical Oncology",
        url: "https://ragner.vercel.app/explore?bot=triomics",
      },
      {
        name: "Straive",
        domain: "Document Ops",
        url: "https://ragner.vercel.app/explore?bot=straive",
      },
      {
        name: "Scaler",
        domain: "EdTech Corpus",
        url: "https://ragner.vercel.app/explore?bot=scaler",
      },
    ],
  },
  {
    id: "htic-clinical",
    number: "02",
    category: "Biomedical AI · HTIC, IIT Madras Research Park",
    domainTag: "rag",
    title: "Clinical Knowledge Synthesis & Cardiovascular Vision",
    badge: "R&D Production",
    summary:
      "Hierarchical retrieval pipelines for clinical literature synthesis paired with deep learning computer vision benchmarks for cardiovascular imaging.",
    metrics: [
      "HTIC · IIT Madras Research Park",
      "RAPTOR + Neo4j Clinical Ontology",
      "PyTorch Contraction Kinematics",
    ],
    problem:
      "Flat chunking over dense biomedical papers severs physiological pathways from clinical contraindications, while manual review of cardiovascular video feeds suffers from high observer variance.",
    architecture:
      "Constructed domain-grounded RAPTOR hierarchical trees paired with Neo4j clinical ontology graphs for multi-scale retrieval, alongside PyTorch and OpenCV vision pipelines for automated contraction analysis.",
    impact:
      "Delivered citation-locked clinical literature synthesis and reproducible quantitative computer vision benchmarks for healthcare researchers at HTIC.",
    stack: ["PyTorch", "OpenCV", "Neo4j GraphRAG", "RAPTOR", "LangChain", "Python"],
    flowSteps: [
      { step: "01", title: "Corpus Ingestion", desc: "Extraction of trial protocols, PubMed literature, & SOP guidelines" },
      { step: "02", title: "Biomedical Graph", desc: "Neo4j ontology linking biomarkers, drug contraindications, & endpoints" },
      { step: "03", title: "Vision Pipeline", desc: "PyTorch tracking of cardiac tissue contraction kinematics" },
      { step: "04", title: "Clinical Audit", desc: "Zero-hallucination citation checks against verified medical literature" },
    ],
  },
  {
    id: "assistive-nav",
    number: "03",
    category: "Multimodal Edge Computer Vision",
    domainTag: "vision",
    title: "Real-Time Assistive Indoor Navigation Engine",
    badge: "Edge Verified",
    summary:
      "Wearable low-latency spatial awareness pipeline converting 2D detections and monocular depth maps into prioritized directional audio alerts.",
    metrics: [
      "Sub-100ms Local Inference",
      "YOLOv8 + Depth Anything v2",
      "LAB-Channel CLAHE Normalization",
    ],
    primaryUrl: "https://github.com/Saransh482003",
    primaryLabel: "View Repository",
    problem:
      "2D bounding boxes alone cannot judge physical collision proximity in dim indoor corridors, while cloud VLM APIs introduce 2+ seconds of unsafe network latency.",
    architecture:
      "Fused YOLOv8 detection with monocular depth estimation pre-processed via LAB-space CLAHE, feeding a deterministic spatial hazard matrix and offline Piper TTS.",
    impact:
      "Achieved real-time obstacle prioritization and directional auditory guidance in low-light indoor environments with zero cloud dependency.",
    stack: ["YOLOv8", "Monocular Depth", "OpenCV (CLAHE)", "Piper TTS", "Python"],
    flowSteps: [
      { step: "01", title: "Sensor Ingestion", desc: "Low-light camera feed pre-processed with CLAHE in LAB color space" },
      { step: "02", title: "Spatial Inference", desc: "YOLOv8 obstacle detection synchronized with Depth Anything v2" },
      { step: "03", title: "Hazard Matrix", desc: "Deterministic priority queue ranking obstacles by collision hazard score" },
      { step: "04", title: "Edge TTS Alerts", desc: "Sub-100ms directional audio cues generated fully offline via Piper" },
    ],
  },
  {
    id: "curecue-tasim",
    number: "04",
    category: "Applied Multimodal Systems",
    domainTag: "agents",
    title: "CureCue (BharatGen '25 Winner) & TA-Sim Evaluator",
    badge: "2nd Runner-Up · National",
    summary:
      "Award-winning offline medication adherence assistant and an automated voice-enabled technical interview simulator.",
    metrics: [
      "2nd Runner-Up · BharatGen 2025",
      "YOLOv8 + Gemini 2.0 Flash",
      "Ollama (Llama 3) + ChromaDB",
    ],
    primaryUrl: "https://github.com/Saransh482003/TA-Sim",
    primaryLabel: "TA-Sim GitHub",
    problem:
      "Patients face prescription non-adherence without offline verification tools (CureCue), while university courses lack scalable oral technical evaluations (TA-Sim).",
    architecture:
      "Combined YOLOv8 pill verification with Gemini 2.0 Flash for CureCue; engineered TA-Sim using Next.js, Flask, ChromaDB syllabus grounding, local Llama 3 (Ollama), and real-time voice synthesis.",
    impact:
      "Recognized nationally at the BharatGen 2025 Hackathon; automated multi-turn oral technical evaluations grounded in course rubrics.",
    stack: ["YOLOv8", "Gemini 2.0 Flash", "Next.js", "Flask", "ChromaDB", "Ollama"],
    flowSteps: [
      { step: "01", title: "Multimodal Inputs", desc: "Speech audio streams and offline camera pill identification" },
      { step: "02", title: "Local Retrieval", desc: "ChromaDB course syllabus vector store & patient prescription tables" },
      { step: "03", title: "Grounded LLM", desc: "Llama 3 local inference with zero data leakage to external clouds" },
      { step: "04", title: "Dynamic Scorecard", desc: "Real-time rubrics evaluation and conversational voice feedback" },
    ],
  },
];

export const ENGINEERING_NOTES: EngineeringNote[] = [
  {
    id: "raptor-vs-naive",
    tag: "RETRIEVAL ARCHITECTURE",
    readTime: "4 min read",
    title: "Why Naive Top-K RAG Fails on 100-Page Contracts",
    summary:
      "Fixed-token sliding windows sever cross-clause dependencies across long legal leases and clinical SOPs. Recursive K-Means tree summarization restores global document reasoning.",
    specFormula: "Leaf Chunks C₀ → Embeddings E(C₀) → K-Means Clusters → Recursive Tree (L₁..Lₙ)",
    takeaway: "-42% context token bloat on multi-annex queries",
    details: [
      "When a 120-page commercial lease defines exceptions in Exhibit D that override remedies in Section 14, flat cosine similarity over 500-token chunks only retrieves local lexical matches.",
      "By recursively clustering leaf embeddings via K-Means and generating abstractive parent summaries at ingestion time, queries retrieve both high-level thematic context and exact leaf clauses in a single pass.",
    ],
  },
  {
    id: "trimodal-routing",
    tag: "AGENTIC ORCHESTRATION",
    readTime: "5 min read",
    title: "Deterministic Tri-Modal Routing Without Agent Loops",
    summary:
      "Replacing unpredictable multi-agent ReAct loops with a bounded intent classifier that dispatches queries to Hybrid Vector Search, Knowledge Graphs, or Summary Trees.",
    specFormula: "Router(q) ∈ { Qdrant RRF(Dense, BM25), Neo4j Cypher(Hop≤3), RAPTOR(Level≥1) }",
    takeaway: "Eliminates 10–15s ReAct loop latency spikes",
    details: [
      "Pinpoint lookups (statute numbers, defined terms) require Reciprocal Rank Fusion (RRF) over dense embeddings and sparse BM25 lexical vectors.",
      "Relational queries ('Which subcontractors are bound by indemnity clauses in Project Alpha?') are routed to parameterized Neo4j Cypher templates rather than brittle free-form generation.",
    ],
  },
  {
    id: "yolov8-depth-fusion",
    tag: "EDGE COMPUTER VISION",
    readTime: "5 min read",
    title: "Spatial Hazard Scoring: YOLOv8 + Monocular Depth Fusion",
    summary:
      "Converting 2D bounding boxes and relative depth maps into deterministic audio alerts for indoor navigation under degraded lighting.",
    specFormula: "Hᵢ = w_d · P₇₅(Depth_eroded(Bᵢ)) + w_c · Centrality(Bᵢ) + w_s · Priority(cᵢ)",
    takeaway: "Eroded P75 depth window eliminates wall bleed",
    details: [
      "Applying Contrast Limited Adaptive Histogram Equalization (CLAHE) strictly to the luminance channel in LAB color space recovers structural edges in dim corridors without amplifying sensor noise.",
      "A deterministic priority queue suppresses static peripheral walls and dispatches non-overlapping directional cues via offline Piper TTS.",
    ],
  },
];

export const EXPERIENCE = [
  {
    period: "Jan 2027 – Dec 2027",
    role: "MSc in Artificial Intelligence (Incoming)",
    org: "Nanyang Technological University (NTU), Singapore",
    dept: "College of Computing and Data Science (CCDS)",
    badge: "Incoming Postgraduate",
    active: true,
    description:
      "Graduate specialization in Artificial Intelligence at NTU CCDS, focusing on scalable retrieval architectures, deep learning, and multimodal computer vision.",
    skills: ["Advanced AI", "Multimodal Retrieval", "Large Vision Models", "Deep Learning Research"],
    highlights: [
      "Specializing in distributed retrieval & foundation models at one of Asia's top computing colleges",
      "Research direction centered on low-latency inference and hierarchical graph-based synthesis",
    ],
  },
  {
    period: "Jun 2025 – Feb 2026",
    role: "AI/ML & Full-Stack Engineering Intern",
    org: "Healthcare Technology Innovation Centre (HTIC)",
    dept: "IIT Madras Research Park",
    badge: "9 Months R&D",
    active: false,
    description:
      "Architected production GraphRAG (Neo4j) and RAPTOR hierarchical retrieval pipelines for clinical knowledge synthesis; engineered and benchmarked PyTorch/OpenCV vision models for cardiovascular imaging.",
    skills: ["Neo4j GraphRAG", "RAPTOR Trees", "PyTorch Vision", "FastAPI", "Clinical SOPs"],
    highlights: [
      "Built deterministic RAPTOR + Neo4j GraphRAG pipeline for medical research literature",
      "Benchmarked automated cardiovascular tissue contraction kinematics using PyTorch & OpenCV",
      "Designed zero-hallucination citation checks over dense oncology trial protocols",
    ],
  },
  {
    period: "Jan 2025 – May 2026",
    role: "Teaching Assistant — Software Engineering & Tools in Data Science",
    org: "Indian Institute of Technology Madras",
    dept: "BS Degree Program",
    badge: "Academic Mentorship",
    active: false,
    description:
      "Mentored undergraduate cohorts in production software engineering, full-stack architecture (Flask, Vue.js, Docker, Celery, Redis), automated testing, and system design.",
    skills: ["System Design", "Docker CI/CD", "Flask & Redis", "Automated Testing", "Code Reviews"],
    highlights: [
      "Guided students through production full-stack engineering, async task queues, and Docker setups",
      "Evaluated term projects and conducted architectural code reviews for scalable web backends",
    ],
  },
  {
    period: "Graduated May 2026",
    role: "BS in Data Science & Applications",
    org: "Indian Institute of Technology Madras",
    dept: "Dual Degree: BSc in Data Analytics, DSEU ('26)",
    badge: "BharatGen '25 Winner",
    active: false,
    description:
      "Completed 4-year BS in Data Science & Applications at IIT Madras alongside a BSc in Data Analytics at DSEU. Placed 2nd Runner-Up nationally at the BharatGen 2025 Hackathon.",
    skills: ["Data Science", "Machine Learning", "Statistical Modeling", "Edge AI", "Algorithms"],
    highlights: [
      "Placed 2nd Runner-Up nationally at BharatGen 2025 Hackathon for CureCue multimodal assistant",
      "Dual degree rigor across IIT Madras BS curriculum and DSEU analytics degree",
    ],
  },
];

export const FREELANCE_SERVICES: FreelanceService[] = [
  {
    id: "rag-systems",
    number: "01",
    title: "Enterprise RAG & GraphRAG Pipelines",
    tagline: "End-to-end deterministic retrieval over complex documents (100+ page contracts, clinical trials, technical manuals).",
    badge: "Most Requested",
    idealFor: "B2B SaaS, LegalTech, MedTech, and Enterprise Knowledge Bases",
    turnaround: "2 – 3 Weeks",
    deliverables: [
      "Custom Tri-Modal Routing (Vector + RAPTOR Trees + Neo4j GraphRAG)",
      "Reciprocal Rank Fusion (RRF) with BM25 sparse + dense embeddings",
      "Strict page-level citation & zero-hallucination verification hooks",
      "Benchmark test suite with latency, recall, and precision telemetry",
      "Dockerized FastAPI microservice with streaming response endpoints",
    ],
  },
  {
    id: "vision-edge",
    number: "02",
    title: "Computer Vision & Multimodal Edge AI",
    tagline: "Sub-100ms real-time object detection, spatial awareness, and video stream analytics.",
    badge: "Low-Latency",
    idealFor: "Robotics, Assistive Tech, Industrial Automation, and MedTech Imaging",
    turnaround: "2 – 4 Weeks",
    deliverables: [
      "Custom YOLOv8 fine-tuning & spatial depth fusion (Depth Anything v2)",
      "Low-light image enhancement (LAB-space CLAHE normalization)",
      "Edge-optimized inference (TensorRT, ONNX, or PyTorch on local hardware)",
      "Deterministic spatial hazard matrix & offline audio/alert synthesis",
      "Zero-cloud fallback architecture for private on-premise deployments",
    ],
  },
  {
    id: "ai-audit",
    number: "03",
    title: "AI Architecture Audit & Performance Tuning",
    tagline: "Diagnosing flaky agent loops, reducing token bloat by 40%+, and fixing retrieval failures.",
    badge: "High-ROI",
    idealFor: "Startups & Engineering Teams with struggling AI prototypes",
    turnaround: "5 – 7 Days",
    deliverables: [
      "Deep-dive audit of chunking strategies, embeddings, and context window leaks",
      "Eliminating brittle ReAct agent loops with deterministic intent routers",
      "Profiling retrieval latency & vector index memory footprint",
      "Executive architecture blueprint with prioritized remediation roadmap",
      "1-on-1 engineering handover call & team architecture walkthrough",
    ],
  },
];

export const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    step: "01",
    title: "Corpus & Needs Discovery",
    timeline: "Days 1 – 3",
    description:
      "Deep dive into your document corpus, query failure modes, accuracy requirements, and latency targets. No generic templates.",
  },
  {
    step: "02",
    title: "Architecture Blueprint",
    timeline: "Days 4 – 7",
    description:
      "Design deterministic routing paths, chunking strategies, vector & graph schemas, and synthetic benchmark evaluation datasets.",
  },
  {
    step: "03",
    title: "Iterative Build & Benchmarks",
    timeline: "Week 2",
    description:
      "Engineered with daily async Loom updates, git commits, quantitative telemetry (recall@k, latency), and isolated test sandboxes.",
  },
  {
    step: "04",
    title: "Production Handover & CI/CD",
    timeline: "Week 3",
    description:
      "Dockerized microservices, comprehensive API documentation, CI/CD pipelines, and dedicated post-deployment support.",
  },
];

export const TECH_STACK_MATRIX: SkillCategory[] = [
  {
    category: "Retrieval & Graph Intelligence",
    icon: "Database",
    skills: [
      { name: "Qdrant Vector DB", level: "Production", note: "Hybrid dense & sparse BM25 indexing" },
      { name: "Neo4j GraphRAG", level: "Production", note: "Multi-hop knowledge graph ontologies" },
      { name: "RAPTOR Trees", level: "Production", note: "Recursive K-Means document clustering" },
      { name: "RRF Re-Ranking", level: "Production", note: "Reciprocal rank fusion scoring" },
      { name: "ChromaDB", level: "Proficient", note: "Local embedded vector stores" },
      { name: "LangChain & LlamaIndex", level: "Proficient", note: "Pipeline orchestration & loaders" },
    ],
  },
  {
    category: "Machine Learning & Vision",
    icon: "Cpu",
    skills: [
      { name: "PyTorch", level: "Production", note: "Deep learning models & kinematics" },
      { name: "YOLOv8 & Detection", level: "Production", note: "Real-time edge object classification" },
      { name: "Depth Anything v2", level: "Production", note: "Monocular relative depth estimation" },
      { name: "OpenCV (CLAHE)", level: "Production", note: "LAB color space image enhancement" },
      { name: "Hugging Face Transformers", level: "Proficient", note: "Fine-tuning & local model deployment" },
      { name: "Ollama & Local LLMs", level: "Production", note: "Llama 3 / Mistral offline inference" },
    ],
  },
  {
    category: "Backend & Systems Infrastructure",
    icon: "Terminal",
    skills: [
      { name: "FastAPI", level: "Production", note: "High-throughput async Python APIs" },
      { name: "Docker & Containerization", level: "Production", note: "Multi-stage production images" },
      { name: "Python 3.11 / 3.12", level: "Expert", note: "Type-hinted, tested, async backend core" },
      { name: "Linux & Bash", level: "Production", note: "Server management & GPU environment setup" },
      { name: "Redis & Celery", level: "Proficient", note: "Task queues & caching layers" },
      { name: "Piper TTS & Edge Audio", level: "Proficient", note: "Sub-50ms offline voice synthesis" },
    ],
  },
  {
    category: "Full-Stack & Product Engineering",
    icon: "Layers",
    skills: [
      { name: "Next.js & React 19", level: "Production", note: "Server components & high-performance UI" },
      { name: "TypeScript", level: "Production", note: "Strict type safety across full stack" },
      { name: "Tailwind CSS", level: "Expert", note: "Modern responsive interfaces & animations" },
      { name: "REST & WebSockets", level: "Production", note: "Real-time streaming agent protocols" },
      { name: "Vercel & Cloud Deploy", level: "Production", note: "Global CDN & edge routing" },
      { name: "Git & Collaborative CI/CD", level: "Expert", note: "Clean commits & PR automation" },
    ],
  },
];