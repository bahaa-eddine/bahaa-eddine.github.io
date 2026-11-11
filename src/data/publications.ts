export type PubType = "journal" | "chapter" | "conference" | "other";

export type Publication = {
  type: PubType;
  year: number | "In press";
  title: string;
  authors: string[];
  venue: string;
  details?: string;
  badges?: string[];
  doi?: string;
  url?: string;
};

export const ME = "Bahaa Eddine Elbaghazaoui";
const A = ME;
const AMNAI = "Mohamed Amnai";
const FAKHRI = "Youssef Fakhri";
const CHOUKRI = "Ali Choukri";
const GHERABI = "Noreddine Gherabi";
const SEMMOURI = "Abdellatif Semmouri";
const JOURHMANE = "Mostafa Jourhmane";
const NAI = "Soukaina Nai";
const RIFAI = "Amal Rifai";
const SADIQ = "Abdelalim Sadiq";

export const publications: Publication[] = [
  // ——— Journal articles ———
  {
    type: "journal", year: 2026,
    title: "Integrating security within DevOps for continuous protection: Securing software development through unified practices",
    authors: [A, "Tarik El Moudden", "Salma El Omari", NAI, "Imane Moustati", "Khalid Benabbes"],
    venue: "International Journal of Computer Applications in Technology (IJCAT)",
    details: "Inderscience, Vol. 78, No. 4, pp. 348–364 · Special Issue: Recent Advances in Information Retrieval and Recommendation Systems",
    badges: ["Q2"],
    doi: "10.1504/IJCAT.2026.154037",
  },
  {
    type: "journal", year: 2025,
    title: "Comparative analysis of machine learning models for fake news detection in social media",
    authors: [A, AMNAI, FAKHRI, CHOUKRI, GHERABI],
    venue: "IAES International Journal of Artificial Intelligence (IJ-AI)",
    details: "Vol. 14, No. 3, pp. 1951–1959",
    badges: ["Q2"],
    doi: "10.11591/ijai.v14.i3.pp1951-1959",
  },
  {
    type: "journal", year: 2025,
    title: "Artificial intelligence predictive modeling for educational indicators using data profiling techniques",
    authors: [NAI, A, RIFAI, SADIQ],
    venue: "IAES International Journal of Artificial Intelligence (IJ-AI)",
    details: "Vol. 14, No. 4, pp. 3063–3073",
    doi: "10.11591/ijai.v14.i4.pp3063-3073",
  },
  {
    type: "journal", year: 2025,
    title: "An in-depth analysis of a tutoring solution by digital technology",
    authors: [NAI, RIFAI, SADIQ, A],
    venue: "International Journal of Electrical and Computer Engineering (IJECE)",
    details: "Vol. 15, No. 4, pp. 4058–4073",
    doi: "10.11591/ijece.v15i4.pp4058-4073",
  },
  {
    type: "journal", year: 2025,
    title: "Proposal for a learner model adapted for personalized tutoring based on IMS-LIP and PAPI",
    authors: [NAI, RIFAI, SADIQ, A],
    venue: "International Journal of Evaluation and Research in Education (IJERE)",
    details: "Vol. 14, No. 6",
    doi: "10.11591/ijere.v14i6.33366",
  },
  {
    type: "journal", year: 2023,
    title: "Predicting the next word using the Markov chain model according to profiling personality",
    authors: [A, AMNAI, FAKHRI],
    venue: "The Journal of Supercomputing",
    details: "Springer, pp. 12126–12141 · IF 3.3 · CiteScore 4.8",
    badges: ["Q1"],
    doi: "10.1007/s11227-023-05125-2",
  },
  {
    type: "journal", year: 2023,
    title: "Predicting user behavior using data profiling and hidden Markov model",
    authors: [A, AMNAI, FAKHRI],
    venue: "International Journal of Electrical and Computer Engineering (IJECE)",
    details: "Vol. 13, No. 5, pp. 5444–5453 · CiteScore 3.8",
    badges: ["Q2"],
    doi: "10.11591/ijece.v13i5.pp5444-5453",
  },
  {
    type: "journal", year: 2022,
    title: "Data profiling and machine learning to identify influencers from social media platforms",
    authors: [A, AMNAI, FAKHRI],
    venue: "Journal of ICT Standardization",
    details: "River Publishers, pp. 201–218",
    badges: ["Q3"],
    doi: "10.13052/jicts2245-800X.1026",
  },
  {
    type: "journal", year: 2021,
    title: "Discounted Markov decision processes with constrained costs: The decomposition approach",
    authors: [SEMMOURI, JOURHMANE, A],
    venue: "E3S Web of Conferences",
    details: "Vol. 229, 01047",
    badges: ["Q4"],
    doi: "10.1051/e3sconf/202122901047",
  },
  {
    type: "journal", year: 2020,
    title: "Markov decision processes with discounted costs: New test of non-optimal actions",
    authors: [SEMMOURI, JOURHMANE, A],
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    details: "Vol. 12 (5 Special Issue), pp. 608–616",
    badges: ["Q3"],
    doi: "10.5373/JARDCS/V12SP5/20201796",
  },

  // ——— Book chapters ———
  {
    type: "chapter", year: 2026,
    title: "Intelligent Cybersecurity for Smart Education",
    authors: [NAI, A, "Salma El Omari", "Chaimae Taoussi", RIFAI, SADIQ],
    venue: "AI-Driven Cybersecurity Techniques, Systems, and Resilience",
    details: "IGI Global Scientific Publishing, Chapter 9",
    doi: "10.4018/979-8-2600-3465-1.ch009",
  },
  {
    type: "chapter", year: 2026,
    title: "Generative AI for Fake News Detection in Data Architectures: From Literature to Challenges and Future Directions",
    authors: [A, "Tarik El Moudden", "Khalid Benabbes"],
    venue: "Generative AI-Powered Data Architectures: From Governance to Autonomous Analytics",
    details: "IGI Global Scientific Publishing, pp. 215–238",
    doi: "10.4018/979-8-3373-5616-7.ch009",
  },
  {
    type: "chapter", year: 2026,
    title: "A Comprehensive Review of Weight Initialization Strategies for CNNs in Remote Sensing",
    authors: ["Tarik El Moudden", NAI, A, AMNAI],
    venue: "Generative AI Applications and Intelligent Systems: From Chatbots to Cybersecurity",
    details: "IGI Global Scientific Publishing, pp. 185–210",
    doi: "10.4018/979-8-3373-8011-7.ch008",
  },
  {
    type: "chapter", year: 2025,
    title: "Benchmarking Time-Series Forecasting Models for Smart Meter Data",
    authors: ["Imane Moustati", GHERABI, A, AMNAI],
    venue: "Advances in Intelligent Systems and Digital Applications (ISDA 2025)",
    details: "Lecture Notes in Networks and Systems, vol. 1486, Springer",
    doi: "10.1007/978-3-031-95330-9_11",
  },
  {
    type: "chapter", year: 2025,
    title: "Embedding Security into DevOps: Achieving Continuous Protection and Harmonized Software Development Practices",
    authors: [A, "Rabha Allaoui"],
    venue: "Data Governance, DevSecOps, and Advancements in Modern Software",
    details: "IGI Global Scientific Publishing, pp. 155–168",
    doi: "10.4018/979-8-3373-0365-9.ch008",
  },
  {
    type: "chapter", year: 2025,
    title: "Integrating Security in DataOps: A Framework for Securing Data Pipelines in Real-time Analytics",
    authors: ["Khalil Soussane", A, AMNAI],
    venue: "Data Governance, DevSecOps, and Advancements in Modern Software",
    details: "IGI Global Scientific Publishing, pp. 197–214",
    doi: "10.4018/979-8-3373-0365-9.ch010",
  },
  {
    type: "chapter", year: 2022,
    title: "Influencer Profiling to Identify the Top Keywords Using LDA",
    authors: [A, AMNAI, FAKHRI],
    venue: "Computer Networks and Inventive Communication Technologies (ICCNCT 2022)",
    details: "Springer Nature Singapore, pp. 377–388",
    doi: "10.1007/978-981-19-3035-5_29",
  },
  {
    type: "chapter", year: 2022,
    title: "Voice Recognition and User Profiling",
    authors: [A, AMNAI, FAKHRI],
    venue: "International Conference on Cybersecurity, Cybercrimes, and Smart Emerging Technologies",
    details: "Springer, pp. 223–233",
    doi: "10.1007/978-3-031-21101-0_18",
  },
  {
    type: "chapter", year: 2022,
    title: "Optimized Influencers Profiling from Social Media Based on Machine Learning",
    authors: [A, AMNAI, FAKHRI],
    venue: "Advances in Information, Communication and Cybersecurity (ICI2C'21)",
    details: "Lecture Notes in Networks and Systems, Springer, pp. 43–56",
    doi: "10.1007/978-3-030-91738-8_5",
  },
  {
    type: "chapter", year: 2022,
    title: "User Profiling and Influence Maximization",
    authors: [A, AMNAI, FAKHRI],
    venue: "Mobile Computing and Sustainable Informatics (ICMCSI 2022)",
    details: "Springer Nature Singapore, pp. 221–232",
    doi: "10.1007/978-981-19-2069-1_16",
  },
  {
    type: "chapter", year: 2021,
    title: "Data Profiling over Big Data Area: A Survey of Big Data Profiling — State-of-the-Art, Use Cases and Challenges",
    authors: [A, AMNAI, SEMMOURI],
    venue: "Intelligent Systems in Big Data, Semantic Web and Machine Learning",
    details: "Advances in Intelligent Systems and Computing, Springer, pp. 111–123",
    doi: "10.1007/978-3-030-72588-4_8",
  },

  // ——— Conference papers ———
  {
    type: "conference", year: 2024,
    title: "Event Profiling in Social Media: A Survey with an Application",
    authors: [A, AMNAI, FAKHRI, CHOUKRI, GHERABI],
    venue: "IEEE 4th International Conference on Innovative Research in Applied Science, Engineering and Technology (IRASET 2024)",
    details: "IEEE",
    doi: "10.1109/IRASET60544.2024.10548943",
  },
  {
    type: "conference", year: 2023,
    title: "Profiling Language Sign Using Deep Learning",
    authors: [A, AMNAI, FAKHRI, CHOUKRI, GHERABI],
    venue: "10th International Conference on Wireless Networks and Mobile Communications (WINCOM 2023)",
    details: "IEEE",
    doi: "10.1109/WINCOM59760.2023.10323023",
  },
  {
    type: "conference", year: 2022,
    title: "Human profiling based on computer vision: A survey with application",
    authors: [A, AMNAI, FAKHRI, CHOUKRI, GHERABI],
    venue: "IEEE 3rd International Conference on Electronics, Control, Optimization and Computer Science (ICECOCS 2022)",
    details: "IEEE",
    doi: "10.1109/ICECOCS55148.2022.9983332",
  },

  // ——— Other contributions ———
  {
    type: "other", year: 2022,
    title: "Markov Decision Processes with Discounted Rewards: Improved Successive Over-Relaxation Method",
    authors: [SEMMOURI, JOURHMANE, A],
    venue: "Lecture Notes in Networks and Systems, vol. 357",
    details: "Springer, pp. 229–238",
    doi: "10.1007/978-3-030-91738-8_22",
  },
  {
    type: "other", year: 2022,
    title: "Markov Decision Processes with Discounted Costs: Improved Successive Over-Relaxation Method",
    authors: [SEMMOURI, JOURHMANE, A],
    venue: "Proceedings in Adaptation, Learning and Optimization",
    details: "Springer",
    doi: "10.1007/978-3-030-97196-0_32",
  },
  {
    type: "other", year: 2021,
    title: "Markov Decision Processes with Discounted Rewards: New Action Elimination Procedure",
    authors: [SEMMOURI, JOURHMANE, A],
    venue: "Lecture Notes in Business Information Processing, vol. 416",
    details: "Springer, pp. 223–238",
    doi: "10.1007/978-3-030-76508-8_16",
  },
];

export const pubTypeLabel: Record<PubType, string> = {
  journal: "Journal article",
  chapter: "Book chapter",
  conference: "Conference paper",
  other: "Other",
};

export const reviewing = {
  /** displayed as "50+" */
  total: 50,
  journals: [
    { name: "Applied Intelligence", count: 22 },
    { name: "Education and Information Technologies", count: 9 },
    { name: "Soft Computing", count: 6 },
    { name: "The Journal of Supercomputing", count: 3 },
    { name: "Int. Journal of Information Security and Privacy", count: 2 },
    { name: "Frontiers in Digital Health", count: 1 },
    { name: "IAES Int. Journal of Artificial Intelligence (IJ-AI)", count: 1 },
  ],
  conferences: "15+",
};

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
