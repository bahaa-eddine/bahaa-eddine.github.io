export type Course = {
  title: string;
  hours: number;
  audience: string;
  year: string;
  topics: string[];
};

export type Institution = {
  id: string;
  name: string;
  role: string;
  period: string;
  current?: boolean;
  courses: Course[];
};

export type Place = {
  id: string;
  name: string;
  city: string;
  role: string;
  period: string;
  kind: "current" | "teaching" | "training" | "education";
  coords: [number, number];
  /** id of the matching Institution (to scroll to it) */
  institution?: string;
};

const AIC = "Engineering — AI & Cybersecurity";
const IDT = "Engineering — Industrial Digital Transformation";
const MSBDCC = "Master's in Big Data & Cloud Computing";

export const institutions: Institution[] = [
  {
    id: "ensa-bm",
    name: "ENSA Béni Mellal",
    role: "Permanent Professor",
    period: "2024 — present",
    current: true,
    courses: [
      { title: "Software Architecture", hours: 60, audience: AIC, year: "2026", topics: ["Monolith", "Layered & N-tier", "SOA", "Microservices", "REST APIs", "Event-driven", "DDD"] },
      { title: "Smart Factory", hours: 60, audience: IDT, year: "2026", topics: ["Odoo", "ERP", "MES", "IoT", "Industry 4.0", "AI"] },
      { title: "Relational Databases & PL/SQL", hours: 60, audience: AIC, year: "2025", topics: ["SQL", "DDL / DML", "Joins & subqueries", "Procedures & functions", "Packages", "Triggers", "Cursors", "Tuning"] },
      { title: "Software Quality", hours: 45, audience: IDT, year: "2025", topics: ["Selenium", "SonarQube", "Unit / integration / E2E", "Snyk", "Distributed systems"] },
      { title: "Innovation & Design Thinking", hours: 45, audience: AIC, year: "2025", topics: ["Problem solving", "Prototyping", "User-centred design"] },
      { title: "Algorithms & C Language", hours: 45, audience: "Preparatory Cycle — 1st year", year: "2025", topics: ["Control structures", "Functions", "Arrays", "Algorithm design"] },
      { title: "Performance Management & Dashboards", hours: 45, audience: IDT, year: "2024 — 2025", topics: ["KPI", "Monitoring", "Power BI", "KNIME", "Analysis & feedback"] },
      { title: "Software Engineering", hours: 45, audience: IDT, year: "2024 — 2026", topics: ["Life cycle", "Design patterns", "Scrum & Kanban", "CI/CD", "Jenkins", "Java"] },
    ],
  },
  {
    id: "emsi",
    name: "EMSI — Moroccan School of Engineering Sciences",
    role: "Professor",
    period: "2025",
    courses: [
      { title: "React Native", hours: 50, audience: "Computer Engineering & Networks — 2nd year", year: "2025", topics: ["Components", "Props & state", "Hooks", "Navigation", "Redux", "API integration", "Expo"] },
    ],
  },
  {
    id: "uit",
    name: "Ibn Tofail University — Kénitra",
    role: "Adjunct Lecturer in Computer Science",
    period: "2020 — 2023",
    courses: [
      { title: "Artificial Intelligence", hours: 45, audience: MSBDCC, year: "2023", topics: ["Deep learning", "Neural networks", "NLP", "Computer vision", "Intelligent agents", "Genetic algorithms", "Generative AI"] },
      { title: "Python Programming", hours: 45, audience: MSBDCC, year: "2022", topics: ["Data structures", "OOP", "NumPy", "Pandas", "Matplotlib", "Web scraping", "Flask API"] },
      { title: "Virtualization & Cloud Computing", hours: 45, audience: MSBDCC, year: "2021", topics: ["Hypervisors", "IaaS / PaaS / SaaS", "Docker", "Kubernetes", "Cloud security"] },
      { title: "Algorithms, Big Data & Machine Learning", hours: 45, audience: MSBDCC, year: "2020", topics: ["Complexity", "Regression", "Classification", "Clustering", "scikit-learn", "KNIME"] },
      { title: "Operating Systems: Linux / Unix", hours: 80, audience: "Bachelor's in Database Administration & Web Development", year: "2020 — 2021", topics: ["Shell", "Processes", "File systems", "Permissions", "Networking", "Scripting"] },
    ],
  },
  {
    id: "zenithsoft",
    name: "ZenithSoft — Corporate & Government Training",
    role: "Trainer",
    period: "2022 — 2024",
    courses: [
      { title: "Generative AI with Spring AI", hours: 40, audience: "ZenithSoft engineers", year: "2024", topics: ["Spring AI", "Machine learning", "Chatbots", "TensorFlow"] },
      { title: "Spring Security & Keycloak", hours: 40, audience: "Ministry of Agriculture & Maritime Fisheries", year: "2024", topics: ["Spring Boot", "Spring Security", "Keycloak", "JWT"] },
      { title: "DevOps", hours: 40, audience: "Ministry of Agriculture & Maritime Fisheries", year: "2024", topics: ["Git", "CI/CD", "GitLab", "Docker", "Docker Compose"] },
      { title: "Java, Spring & Spring Boot", hours: 40, audience: "Ministry of Tourism & Handicrafts", year: "2024", topics: ["Java", "Spring Data", "REST", "MySQL", "H2"] },
      { title: "Reactive Programming with WebFlux", hours: 40, audience: "Ministry of Tourism & Handicrafts", year: "2023", topics: ["Spring Boot", "WebFlux", "Streams", "Async APIs"] },
      { title: "Distributed Systems & Microservices", hours: 40, audience: "Ministry of Agriculture & Maritime Fisheries", year: "2022", topics: ["Spring Cloud", "Eureka", "Gateway", "Config server"] },
      { title: "Data Analytics", hours: 40, audience: "Ministry of Agriculture & Maritime Fisheries", year: "2022", topics: ["Visualisation", "Prediction", "Big data", "Clustering", "Classification"] },
    ],
  },
  {
    id: "simplon",
    name: "Simplon.ma — Bootcamps",
    role: "Trainer & jury member",
    period: "2025",
    courses: [
      { title: "UML, OOP, Java & JavaScript bootcamp", hours: 16, audience: "École Numérique Ahmed Al Hansali", year: "2025", topics: ["UML", "OOP", "Java streams & collections", "ES6+", "async / await", "Maven"] },
      { title: "Data engineering bootcamp", hours: 24, audience: "YouCode", year: "2025", topics: ["Airflow", "Python", "Batch & stream", "Streamlit", "REST API", "Docker"] },
    ],
  },
];

export const totalHours = institutions.reduce(
  (sum, i) => sum + i.courses.reduce((s, c) => s + c.hours, 0),
  0,
);

/**
 * Map pins. Coordinates come from OpenStreetMap. ENSA Béni Mellal and ENSA
 * Khouribga are pinned at their university / city location; adjust here if needed.
 */
export const places: Place[] = [
  { id: "p-ensabm", name: "ENSA Béni Mellal", city: "Béni Mellal", role: "Permanent Professor", period: "2024 — present", kind: "current", coords: [32.3357, -6.37], institution: "ensa-bm" },
  { id: "p-uit", name: "Ibn Tofail University", city: "Kénitra", role: "Adjunct Lecturer · PhD 2023", period: "2020 — 2023", kind: "teaching", coords: [34.2469, -6.5874], institution: "uit" },
  { id: "p-ensak", name: "ENSA Khouribga", city: "Khouribga", role: "Software Engineering degree", period: "2019", kind: "education", coords: [32.8856, -6.9088] },
  { id: "p-oz", name: "Ibn Tofail High School", city: "Oued Zem", role: "Baccalaureate, Mathematical Sciences", period: "2013", kind: "education", coords: [32.8625, -6.5711] },
];

export type Supervision = { names: string[]; year: string; level?: string; org?: string; subject: string };

export const supervision: { group: string; items: Supervision[] }[] = [
  {
    group: "ENSA Béni Mellal — USMS",
    items: [
      { names: ["Hafid Laadimi"], year: "2026", level: "PFE", org: "ZenithSoft", subject: "CyberPen: AI-Assisted Cybersecurity Analysis Platform" },
      { names: ["Ibrahim Kasmi"], year: "2026", level: "PFE", org: "ZenithSoft", subject: "e-Health Platform for the Digitalization of Medical Consultations in Morocco, Enhanced by Sovereign AI" },
      { names: ["Kaoutar Nait Hamou"], year: "2026", level: "PFE", org: "Lear", subject: "Multi-Channel Notifications and Centralized Auditing" },
      { names: ["Roufaida Babzzine"], year: "2025", level: "PFE", org: "Orange Maroc", subject: "Smart FabLab 4.0: Towards a Connected Ecosystem Combining Predictive Maintenance, Robotics and Intelligent Platforms" },
      { names: ["Mohamed Sarhir"], year: "2025", level: "PFE", org: "Teal", subject: "Generative AI for Competitive Intelligence and Strategic Market Analysis" },
      { names: ["Hind Dirane"], year: "2025", level: "PFE", org: "COFICAB Maroc", subject: "Digitization, Automation and Optimization of Production and Quality Processes" },
      { names: ["Fatima Ben Sahel", "Salma Eljabiri", "Fatima Ezzahraa Metkal"], year: "2025", level: "PFA", subject: "AI-Based Text Correction and Rewriting Platform (LLM-based)" },
      { names: ["Abir Boufnichel", "Yassir Belfathi", "Abdrrahim Benaissa"], year: "2025", level: "PFA", subject: "From Design to Implementation of a Chatbot for ENSA Béni Mellal" },
    ],
  },
  {
    group: "Ibn Tofail University — Kénitra",
    items: [
      { names: ["Fatima Karhich"], year: "2024", subject: "Scraping LinkedIn Profiles for Data Analysis" },
      { names: ["Mahalmadane Mahamane Toure"], year: "2024", subject: "Contextual Profiling and Error Correction in Natural Language Processing" },
      { names: ["Mostapha Hanich"], year: "2022", subject: "Design and Development of a Medical State Monitoring Application" },
      { names: ["Mohammed Ziyad Mansouri"], year: "2022", subject: "Vocal Data Profiling and Machine Learning for Gender Identification and Prediction" },
    ],
  },
  {
    group: "ZenithSoft — Internships",
    items: [
      { names: ["Abir Boufnichel"], year: "2025", subject: "Multimodal Generation: Text, Image, Audio and Video" },
      { names: ["Hafid Laadimi"], year: "2025", subject: "AI and Cybersecurity: AI4Sec and Sec4AI Approaches" },
      { names: ["Mounir El Hattab"], year: "2025", subject: "AI-Powered Interactive Video Platform" },
      { names: ["Abderrahmane Abbar"], year: "2025", subject: "Embedded and Real-Time AI Systems" },
      { names: ["Nassima Rhannouch", "Nouhayla Elassouli"], year: "2023", subject: "Hotel Management Application using the MERN Stack" },
      { names: ["Khalil Soussane"], year: "2022", subject: "Backend of a Commercial Management Web App with Spring Boot & Spring Security" },
      { names: ["Moad Rhannoumi"], year: "2021", subject: "Web Application for Managing Lawyers' Documents with Spring Boot & React" },
    ],
  },
];
