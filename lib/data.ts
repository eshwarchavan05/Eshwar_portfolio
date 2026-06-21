export const profile = {
  name: "Eshwar Chavan",
  role: "Full-Stack MERN Developer",
  headline: "Full-stack developer building AI-integrated web applications",
  location: "Bengaluru, Karnataka",
  email: "eshwarchavan05@gmail.com",
  phone: "+91-9632228236",
  github: "https://github.com/eshwarchavan05",
  linkedin: "https://www.linkedin.com/in/eshwar-chavan-1aa667377",
  summary:
    "CS student and full-stack developer focused on React, Node.js, and Generative AI systems. I build production-grade web apps end to end — from RAG chatbots and ML-backed diagnostics to fintech calculators — with an emphasis on real performance gains, not just feature lists. Comfortable across the MERN stack, Python/Flask, and core data structures & algorithms.",
  resumeSummary:
    "Results-driven full-stack developer and CS student with expertise in architecting scalable web applications and AI-integrated systems. Proficient in React.js, Node.js, and Generative AI (LLMs), with demonstrated success optimizing system performance and delivering user-centric solutions.",
  currentFocus: ["Generative AI / RAG systems", "Data Structures & Algorithms", "Full-stack MERN architecture"],
  resume: "/Resume.pdf",
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  demo?: string;
  featured: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    challenges: string;
    outcomes: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "sakhisetu",
    name: "SakhiSetu",
    tagline: "AI-driven government services navigator",
    description:
      "A MERN + FastAPI platform that helps users navigate government schemes and services through a multilingual, retrieval-augmented chatbot.",
    stack: ["React", "Node.js", "FastAPI", "Gemini API", "SQLite", "Playwright"],
    highlights: [
      "Built a RAG chatbot on the Gemini API reaching 92% query-handling accuracy",
      "Multilingual engine covering 10+ regional languages",
      "Automated data sync pipeline with Playwright, removing manual updates",
      "Cut backend response times by 25% via SQLite indexing and query tuning",
    ],
    github: "https://github.com/eshwarchavan05/sakhi_sethu",
    featured: true,
    caseStudy: {
      problem:
        "Government scheme information in India is fragmented across departments and rarely available in regional languages, leaving many citizens unable to find services they're entitled to.",
      solution:
        "Built a retrieval-augmented generation chatbot that indexes scheme data and answers natural-language queries in the user's own language, backed by a FastAPI service and a MERN front end.",
      architecture:
        "React front end talks to a Node.js API layer and a FastAPI service hosting the RAG pipeline (Gemini API for generation, a vector-indexed knowledge base for retrieval, SQLite for structured records). A Playwright-driven pipeline keeps scheme data current without manual edits.",
      challenges:
        "Balancing retrieval accuracy with response latency, and extending language support without retraining the core model — solved by separating retrieval (language-agnostic embeddings) from generation (prompted per target language).",
      outcomes: [
        "92% accuracy on natural-language queries",
        "10+ regional languages supported",
        "100% reduction in manual data-update effort",
        "25% faster backend responses after indexing work",
      ],
    },
  },
  {
    slug: "farmscan",
    name: "FarmScan",
    tagline: "AI crop disease diagnostic system",
    description:
      "A full-stack diagnostic tool for farmers: upload a crop photo, get an instant disease identification and treatment guidance, powered by a CNN model.",
    stack: ["React", "Node.js", "Flask", "TensorFlow", "MongoDB", "JWT"],
    highlights: [
      "CNN model served via Flask API detects 38 crop diseases at a documented 94% success rate",
      "Real-time weather integration to support agricultural decisions",
      "JWT-based auth and encrypted endpoints for data integrity",
      "Schema redesign in MongoDB improved diagnostic-history retrieval by 15%",
    ],
    github: "https://github.com/eshwarchavan05/farm-scan",
    demo: "https://farm-scan-sooty.vercel.app",
    featured: true,
    caseStudy: {
      problem:
        "Smallholder farmers often lack quick access to agricultural expertise, so crop diseases go undiagnosed until yield damage is already significant.",
      solution:
        "A mobile-friendly web app where a farmer photographs a crop leaf; a CNN model classifies the disease and the app returns treatment guidance alongside current weather context.",
      architecture:
        "React front end uploads images to a Node/Express API, which proxies inference requests to a Flask service running the TensorFlow CNN model. MongoDB stores user accounts and diagnostic history behind JWT-authenticated, encrypted endpoints.",
      challenges:
        "Keeping inference latency low enough for a usable mobile experience while running a deep model on modest infrastructure, and structuring MongoDB documents so history lookups stayed fast as data grew.",
      outcomes: [
        "94% documented detection success rate across 38 disease classes",
        "100% data integrity via JWT auth + endpoint encryption",
        "15% faster diagnostic-history retrieval after schema redesign",
      ],
    },
  },
  {
    slug: "emi-pro",
    name: "EMI Pro",
    tagline: "Smart loan & EMI planning tool",
    description:
      "A production fintech app for real-time EMI calculation, loan comparison, amortization schedules, and repayment analysis.",
    stack: ["React", "Tailwind CSS", "Vite", "Recharts"],
    highlights: [
      "Real-time EMI calculation, loan comparison, and repayment analysis",
      "Amortization schedules and prepayment-savings estimation with interactive charts",
      "PDF/Excel export and LocalStorage-based calculation history",
      "Dark mode and a fully responsive, mobile-first UI",
    ],
    github: "https://github.com/eshwarchavan05/EMI-PRO",
    demo: "https://emi-pro.vercel.app",
    featured: true,
    caseStudy: {
      problem:
        "Comparing loan offers usually means juggling spreadsheets — borrowers can't easily see how prepayments or tenure changes affect total interest paid.",
      solution:
        "A single-page calculator that models EMI, amortization, and prepayment scenarios live, with exportable schedules so the analysis isn't locked inside the browser tab.",
      architecture:
        "Vite + React app with client-side financial calculations, Recharts for amortization/interest visualizations, and LocalStorage for persisting calculation history without a backend.",
      challenges:
        "Keeping calculations accurate across edge cases (variable prepayments, partial tenures) while keeping the UI responsive as charts re-render on every input change.",
      outcomes: [
        "Fully client-side, deployed and live on Vercel",
        "PDF/Excel export for sharing repayment plans",
        "Mobile-first responsive layout with dark mode",
      ],
    },
  },
  {
    slug: "hospital-queue",
    name: "Hospital Queue",
    tagline: "Real-time patient queue management",
    description:
      "A TypeScript web app for managing and visualizing hospital patient queues in real time.",
    stack: ["TypeScript", "React", "CSS"],
    highlights: [
      "Built with a fully typed TypeScript front end",
      "Live, deployed demo on Vercel",
    ],
    github: "https://github.com/eshwarchavan05/hospital-queue",
    demo: "https://hospital-queue-tau.vercel.app",
    featured: false,
    caseStudy: {
      problem: "Walk-in patient queues at clinics are typically tracked manually, making wait times unpredictable for both staff and patients.",
      solution: "A queue management interface that gives staff a live, structured view of patient order and status.",
      architecture: "A TypeScript + React single-page app with component-driven state management for queue updates.",
      challenges: "Modeling queue state transitions cleanly in TypeScript so the UI stays consistent as entries are added, served, or removed.",
      outcomes: ["Deployed live demo on Vercel", "Typed front end for safer state handling"],
    },
  },
  {
    slug: "shophub",
    name: "ShopHub",
    tagline: "E-commerce storefront",
    description: "A JavaScript-based e-commerce storefront project with product browsing and a live deployed demo.",
    stack: ["JavaScript", "React"],
    highlights: ["Live deployed demo on Vercel"],
    github: "https://github.com/eshwarchavan05/ShopHub",
    demo: "https://shop-hub-gold.vercel.app",
    featured: false,
    caseStudy: {
      problem: "Practicing core e-commerce UX patterns: catalog browsing, product detail, and cart flows.",
      solution: "A storefront UI implementing standard e-commerce browsing patterns end to end.",
      architecture: "Client-rendered JavaScript/React app deployed on Vercel.",
      challenges: "Structuring component state for cart and catalog interactions without a backend.",
      outcomes: ["Live, publicly accessible demo"],
    },
  },
  {
    slug: "resume-builder",
    name: "Resume Builder",
    tagline: "Multi-template resume builder with live preview",
    description: "A resume builder with multiple templates, live preview, and PDF export, built with React and Tailwind CSS.",
    stack: ["React", "Tailwind CSS"],
    highlights: ["Multiple resume templates with live preview", "Client-side PDF export", "Live deployed demo"],
    github: "https://github.com/eshwarchavan05/ResumeBuilder",
    demo: "https://resume-builder-rose-xi-33.vercel.app",
    featured: false,
    caseStudy: {
      problem: "Most free resume builders lock formatting or templates behind paywalls.",
      solution: "An open template-based builder where users edit content and see a live, exportable preview.",
      architecture: "React + Tailwind CSS front end with client-side PDF generation, no backend dependency.",
      challenges: "Keeping print/PDF output visually identical to the on-screen live preview across templates.",
      outcomes: ["Live, publicly accessible demo", "Multiple selectable templates"],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const skills = {
  Languages: ["JavaScript (ES6+)", "C++", "Python", "TypeScript", "SQL", "HTML5/CSS3"],
  Frontend: ["React.js", "Tailwind CSS", "Vite", "Responsive Web Design"],
  Backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth"],
  Databases: ["MongoDB", "MySQL", "SQLite"],
  "AI / ML": ["Generative AI (LLMs)", "RAG pipelines", "TensorFlow (CNN)"],
  Tools: ["Git", "GitHub", "Postman", "Linux", "Vercel", "Playwright"],
};

export const education = [
  {
    school: "Dayananda Sagar College of Engineering",
    location: "Bengaluru, KA",
    degree: "B.E. in Computer Science and Engineering",
    period: "2023 – 2027",
  },
  {
    school: "Sarvajna PU College",
    location: "Kalburgi, KA",
    degree: "Pre-University (PCMB) — 93.23%",
    period: "2021 – 2023",
  },
];

export const certifications = [
  "Full-Stack Web Development — freeCodeCamp",
  "Data Structures & Algorithms — Coursera",
  "C++ — Infosys Springboard",
];

export const githubStats = {
  username: "eshwarchavan05",
  publicRepos: 16,
  topLanguages: ["JavaScript", "Python", "TypeScript", "HTML", "Dart"],
  competitiveProgramming: "200+ algorithmic problems solved on LeetCode and CodeChef",
};
