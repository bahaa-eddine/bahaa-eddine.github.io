export type Project = {
  name: string;
  summary?: string;
  responsibilities: string[];
  stack: string[];
  team?: string;
};

export type Job = {
  period: string;
  org: string;
  location?: string;
  role: string;
  current?: boolean;
  projects: Project[];
};

export const experience: Job[] = [
  {
    period: "Jan 2025 — present",
    org: "ZenithSoft / ADD",
    location: "Morocco",
    role: "Technical Leader",
    current: true,
    projects: [
      {
        name: "E-Himaya platform: maintenance & evolution",
        responsibilities: [
          "Migrated the microservices to Java 25 and Spring Boot 4",
          "Fixed vulnerabilities found in a DGSSI / maCERT security audit and patched CVEs",
          "Integrated SSL/TLS, a SendGrid newsletter service and an FAQ chatbot",
          "Reduced API response times with caching and asynchronous processing",
          "Helped migrate the frontend to a modular React architecture",
          "Handled on-premises deployment on Atlas Cloud Service VMs with Docker",
        ],
        stack: ["Java", "Spring Boot", "Kotlin", "React", "Redux", "Docker", "PostgreSQL", "MongoDB", "MinIO"],
      },
      {
        name: "Data.gov.ma: national open-data platform (CKAN)",
        responsibilities: [
          "Maintain, monitor and extend CKAN core, its extensions and Python plugins",
          "Optimized Solr indexing and search, and managed open-data roles and access policies",
          "Customized CKAN themes and connected them to a modular React frontend",
          "Upgraded CKAN components, fixed CVEs and set up SSL/TLS and Docker",
        ],
        stack: ["Python", "CKAN", "PostgreSQL", "Solr", "Docker", "Drupal"],
      },
    ],
  },
  {
    period: "Mar 2024 — Aug 2024",
    org: "Intelcia IT Solutions",
    location: "Morocco / France",
    role: "Senior Technical Expert",
    projects: [
      {
        name: "Fast → Fastr for SFR",
        summary: "Joint R&D initiative to modernize SFR's telecom tooling.",
        responsibilities: [
          "Modernized Fast into Fastr using a microservices approach",
          "Integrated AI capabilities (Fastr-AI) and automated processing workflows",
          "Built UI components, led code reviews and applied software craftsmanship practices",
        ],
        stack: ["Java", "Spring Boot", "Kafka", "Sinequa", "Spring Batch", "React", "Redux", "MongoDB"],
        team: "Architect, 6 developers, manager, 2 POs, 2 BAs",
      },
    ],
  },
  {
    period: "Jan 2024 — Aug 2024",
    org: "ZenithSoft",
    location: "Morocco",
    role: "Project Manager",
    projects: [
      {
        name: "MPM / PDA: Ministry of Agriculture & Maritime Fisheries",
        summary: "Rebuilt an embedded PDA application as a web and mobile platform.",
        responsibilities: [
          "Analyzed specifications, wrote technical specs and designed the UI/UX",
          "Built the Android app with Kotlin Multiplatform and Jetpack Compose, with offline sync",
          "Built the React frontend and set up Keycloak security and session management",
          "Laid the application foundation and owned code quality and reviews",
        ],
        stack: ["Kotlin", "Jetpack Compose", "React", "Keycloak"],
        team: "Project manager and 3 developers",
      },
    ],
  },
  {
    period: "Aug 2023 — Mar 2024",
    org: "SPVie Assurances",
    location: "Morocco / France",
    role: "Senior Full-stack Java Developer",
    projects: [
      {
        name: "Santé Log: electronic contract management",
        summary: "Membership, document management and claims.",
        responsibilities: [
          "Modernized the system with a microservices approach",
          "Built a catalog with BeanIO, PDF generation with Carbone.io and storage with MinIO",
          "Orchestrated jobs with Spring Cloud Data Flow and handled file transfer with Spring Integration",
          "Built a dashboard portal with Vaadin",
        ],
        stack: ["Java", "Spring Boot", "Spring Batch", "Docker", "Azure", "PostgreSQL", "MinIO"],
        team: "Architect, manager, PO, 4 developers",
      },
    ],
  },
  {
    period: "Feb 2023 — Jul 2023",
    org: "Axelor",
    location: "France",
    role: "Senior Full-stack Java / React Developer",
    projects: [
      {
        name: "Axelor Open Platform: BPM, CRM & ERP",
        responsibilities: [
          "Optimized processes and threading inside the framework",
          "Integrated client projects with Axelor and built generic frontend widgets",
          "Generated documents with Carbone.io",
        ],
        stack: ["Java", "React", "Docker", "PostgreSQL"],
      },
    ],
  },
  {
    period: "Jul 2020 — Feb 2023",
    org: "Ministry of Interior",
    location: "Morocco",
    role: "Confirmed Full-stack Java / React Developer",
    projects: [
      {
        name: "Cri-Invest: regional investment centres platform",
        summary: "Launching and tracking investment projects across Morocco's regional investment centres.",
        responsibilities: [
          "Analyzed specifications, estimated stories and wrote technical specs",
          "Built backend and frontend features with unit tests (JUnit, Mockito, Jest, Enzyme)",
          "Ran code reviews and kept code quality high (SOLID, Clean Code)",
        ],
        stack: ["Java", "Spring Boot", "React", "GitLab", "SQL Server", "Postman"],
        team: "PO, Scrum Master, 6 developers, 2 BAs",
      },
      {
        name: "Civil Status: statistics & reporting",
        summary: "Jobs that collect, transform and analyze civil records (births, marriages, deaths).",
        responsibilities: [
          "Designed the project and built documented APIs",
          "Automated processing with batch jobs across several databases",
        ],
        stack: ["Java", "Spring Boot", "Spring Batch", "Swagger", "PostgreSQL", "SQL Server"],
        team: "Architect and developer",
      },
    ],
  },
  {
    period: "Sep 2019 — Jun 2020",
    org: "ZenithSoft",
    location: "Morocco",
    role: "Junior Full-stack Java / React Developer",
    projects: [
      {
        name: "Assar: agricultural product pricing (Ministry of Agriculture)",
        responsibilities: [
          "Built the application from scratch and set up its foundation",
          "Wrote technical specs, helped the team with design questions and ran code reviews",
        ],
        stack: ["Java", "Spring", "React", "GitLab", "MongoDB", "Postman"],
        team: "Manager and 3 developers",
      },
    ],
  },
  {
    period: "Mar 2019 — Jul 2019",
    org: "OCP SA — Digital Factory",
    location: "Morocco",
    role: "End-of-studies Intern",
    projects: [
      {
        name: "Prospektor: anomaly management in OCP mines",
        responsibilities: [
          "Built the native Android app, including design and technical tickets",
          "Presented to the client and took part in Scrum ceremonies",
        ],
        stack: ["Android", "Java", "JUnit"],
        team: "PO, designer, Scrum Master, 4 developers",
      },
    ],
  },
];

export const industryStartYear = 2019;
/** Years of experience shown on the site (displayed as "8+"). */
export const experienceYears = 8;
