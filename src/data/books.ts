export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  editors: string[];
  publisher: string;
  year: number;
  doi: string;
  isbn: string;
  /** path in /public; omit for books without a published cover yet */
  cover?: string;
  status?: "forthcoming";
  /** short presentation of the book (replace with the official preface text if you like) */
  about: string;
  themes: string[];
  /** DOIs of chapters Bahaa Eddine authored in this volume */
  myChapters?: { title: string; doi: string }[];
  /** gradient for the generated cover when no image exists */
  palette?: [string, string];
};

export const books: Book[] = [
  {
    slug: "ai-driven-cybersecurity",
    title: "AI-Driven Cybersecurity",
    subtitle: "Techniques, Systems, and Resilience",
    editors: ["Bahaa Eddine Elbaghazaoui", "Khalid Benabbes", "Tarik El Moudden"],
    publisher: "IGI Global Scientific Publishing",
    year: 2027,
    doi: "10.4018/979-8-2600-3465-1",
    isbn: "979-8-2600-3465-1",
    cover: "/books/ai-driven-cybersecurity.jpg",
    about:
      "This volume brings together research on how artificial intelligence is reshaping cyber defence: intelligent techniques for detecting and responding to threats, the design of AI-enabled security systems, and the resilience of digital infrastructures facing increasingly automated attacks.",
    themes: ["Threat detection", "AI-enabled security systems", "Cyber resilience", "Smart education security"],
    myChapters: [{ title: "Intelligent Cybersecurity for Smart Education", doi: "10.4018/979-8-2600-3465-1.ch009" }],
  },
  {
    slug: "agentic-intelligence-cyber-warfare",
    title: "Agentic Intelligence and the Rise of Autonomous Cyber Warfare",
    editors: ["Bahaa Eddine Elbaghazaoui", "Khalid Benabbes", "Tarik El Moudden"],
    publisher: "IGI Global Scientific Publishing",
    year: 2027,
    doi: "10.4018/979-8-2600-0413-5",
    isbn: "979-8-2600-0413-5",
    cover: "/books/agentic-intelligence-cyber-warfare.jpg",
    palette: ["#0f1b3d", "#b4232f"],
    about:
      "This volume looks at agentic AI (autonomous systems that plan and act on their own) and what it changes in cyber conflict. Chapters cover agent-based architectures, reinforcement learning, generative AI and multi-agent systems on both sides: autonomous attacks and vulnerability exploitation, and agentic cyber defence, phishing response and cybersecurity education.",
    themes: ["Agentic AI", "Multi-agent systems", "Autonomous cyber defence", "Cyber warfare"],
  },
  {
    slug: "genai-applications-intelligent-systems",
    title: "Generative AI Applications and Intelligent Systems",
    subtitle: "From Chatbots to Cybersecurity",
    editors: ["Bahaa Eddine Elbaghazaoui", "Mohamed Amnai", "Noreddine Gherabi"],
    publisher: "IGI Global Scientific Publishing",
    year: 2026,
    doi: "10.4018/979-8-3373-8011-7",
    isbn: "979-8-3373-8011-7",
    cover: "/books/genai-applications-intelligent-systems.jpg",
    about:
      "An overview of how generative AI is applied in real intelligent systems, from conversational agents and chatbots to computer vision and security. The chapters cover models, architectures and use cases that show both what generative AI can do and where its limits are.",
    themes: ["Chatbots & LLMs", "Intelligent systems", "Deep learning", "Cybersecurity"],
    myChapters: [{ title: "A Comprehensive Review of Weight Initialization Strategies for CNNs in Remote Sensing", doi: "10.4018/979-8-3373-8011-7.ch008" }],
  },
  {
    slug: "genai-data-architectures",
    title: "Generative AI-Powered Data Architectures",
    subtitle: "From Governance to Autonomous Analytics",
    editors: ["Bahaa Eddine Elbaghazaoui", "Mohamed Amnai", "Noreddine Gherabi"],
    publisher: "IGI Global Scientific Publishing",
    year: 2026,
    doi: "10.4018/979-8-3373-5616-7",
    isbn: "979-8-3373-5616-7",
    cover: "/books/genai-data-architectures.jpg",
    about:
      "This book follows the whole data lifecycle (governance, ingestion, transformation, storage and autonomous analytics) and shows how generative AI fits into modern data architectures. It looks at modelling, orchestration, privacy and ethics, and aims to connect data engineering with recent advances in AI.",
    themes: ["Data governance", "Data pipelines", "Autonomous analytics", "Privacy & ethics"],
    myChapters: [{ title: "Generative AI for Fake News Detection in Data Architectures", doi: "10.4018/979-8-3373-5616-7.ch009" }],
  },
  {
    slug: "data-governance-devsecops",
    title: "Data Governance, DevSecOps, and Advancements in Modern Software",
    editors: ["Bahaa Eddine Elbaghazaoui", "Mohamed Amnai", "Noreddine Gherabi"],
    publisher: "IGI Global Scientific Publishing",
    year: 2025,
    doi: "10.4018/979-8-3373-0365-9",
    isbn: "979-8-3373-0365-9",
    cover: "/books/data-governance-devsecops.jpg",
    about:
      "A reference on building secure, well-governed and resilient software. It covers DataOps, DevSecOps, data governance and modern software architecture, as well as data science and AI-driven systems, for both researchers and practitioners.",
    themes: ["DevSecOps", "DataOps", "Data governance", "Software architecture"],
    myChapters: [
      { title: "Embedding Security into DevOps", doi: "10.4018/979-8-3373-0365-9.ch008" },
      { title: "Integrating Security in DataOps", doi: "10.4018/979-8-3373-0365-9.ch010" },
    ],
  },
];
