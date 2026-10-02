export const GH = 'https://github.com/jesicasuthar';
export const RESUME = '/resume.pdf';
export const EMAIL = 'jesica.s.suthar@gmail.com';
export const LINKEDIN = 'https://linkedin.com/in/jesicasuthar';
export const MEDIUM = 'https://medium.com/@jesica.s.suthar';
export const RESEARCHGATE = 'https://www.researchgate.net/publication/403886515_A_System_and_Method_for_Concurrent_Multi-Disease_Prediction_via_Knowledge-Guided_Graph_Neural_Networks_and_Ensemble_Learning';

export type Status = 'Completed' | 'Research Publication' | 'Production Prototype' | 'In progress';

export interface Project {
  name: string;
  kind: string;
  badge?: string;
  status: Status;
  blurb: string;
  problem: string;
  architecture?: string[];
  stack: string[];
  decisions: string[];
  repo?: string;
  links?: { label: string; href: string }[];
  domain: 'GenAI' | 'ML' | 'NLP' | 'Apps';
  metrics?: string;
}

export const projects: Project[] = [
  {
    name: 'Luminary — Personal Gemini Journal',
    kind: 'Full-Stack GenAI Application',
    badge: 'GenPAC AI Ideathon',
    status: 'Completed',
    domain: 'GenAI',
    blurb: 'A secure, chrono-adaptive AI journaling companion built with Gemini 1.5, Google Cloud Run, and Firebase.',
    problem: 'AI applications frequently expose client-side API keys or blend multi-user data. Luminary introduces complete tenant data isolation, server-side key proxying, and prompt sanitization.',
    architecture: ['React / TypeScript Client', 'Cloud Run Express Proxy', 'Gemini 1.5 Flash API', 'Firebase Auth & Firestore'],
    stack: ['React', 'TypeScript', 'Gemini API', 'Node.js', 'Express', 'Google Cloud Run', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
    decisions: [
      'Gemini LLM calls are strictly proxied via a containerized Express server on Cloud Run so secrets never leak to client bundles.',
      'Data isolation enforced under /users/{uid}/... paths with strict Firestore security rules.',
      'Chrono-adaptive prompt templates tailor reflective feedback to circadian time and emotional valence.'
    ],
    repo: GH + '/luminary-journal',
    links: [
      {
        label: 'Medium Case Study',
        href: 'https://medium.com/@jesica.s.suthar/building-luminary-an-isolated-authenticated-ai-journal-powered-by-gemini-and-cloud-run-b8a4b696cb04?sharedUserId=jesica.s.suthar'
      },
      {
        label: 'Source Code',
        href: GH + '/luminary-journal'
      }
    ],
    metrics: 'Zero Client Key Exposure'
  },
  {
    name: 'CymbalMart Party Planner Agent',
    kind: 'Autonomous Shopping & Event Agent',
    badge: 'Google AI Studio',
    status: 'Completed',
    domain: 'GenAI',
    blurb: 'An intelligent AI planning agent that helps users organize complex events, manage shopping constraints, and optimize ingredient budgets.',
    problem: 'Event planning requires balancing headcount, dietary requirements, and strict budget caps across diverse shopping categories.',
    architecture: ['Google AI Studio', 'Gemini Model Reasoning', 'Custom Structured Output Prompts', 'TypeScript Engine'],
    stack: ['TypeScript', 'Google AI Studio', 'Gemini API', 'Prompt Engineering', 'Structured JSON outputs'],
    decisions: [
      'Engineered structured system instructions for multi-turn conversational memory and budget adherence.',
      'Automated categorized shopping list itemization with substitute recommendations for common dietary restrictions.'
    ],
    repo: GH + '/CymbalMart-Shopping-Agent',
    links: [
      {
        label: 'Repository',
        href: GH + '/CymbalMart-Shopping-Agent'
      }
    ],
    metrics: 'Budget-Constrained Reasoning'
  },
  {
    name: 'Multi-Disease Prediction System',
    kind: 'Research Prototype & Paper',
    badge: 'Published Research',
    status: 'Research Publication',
    domain: 'ML',
    blurb: 'Concurrent multi-disease clinical risk prediction leveraging Knowledge-Guided Graph Neural Networks and ensemble architectures.',
    problem: 'Traditional diagnostic models evaluate diseases independently, disregarding interconnected physiological and phenotypic relationships.',
    architecture: ['Clinical Knowledge Graph', 'Graph Neural Network (GNN)', 'LSTM Temporal Sequence', 'Ensemble Decision Layer'],
    stack: ['Python', 'PyTorch', 'PyG (PyTorch Geometric)', 'GNN', 'Knowledge Graphs', 'Ensemble Learning', 'LSTM'],
    decisions: [
      'Modeled multi-disease dependencies through a structured medical ontology knowledge graph.',
      'Aggregated graph embeddings with recurrent temporal signals to model longitudinal patient trajectories.',
      'Ensemble voting layer improves predictive robustness and minimizes false-negative edge cases.'
    ],
    links: [
      {
        label: 'ResearchGate Paper',
        href: RESEARCHGATE
      }
    ],
    metrics: 'Graph-Guided Multi-Label Risk'
  },
  {
    name: 'Clinical Health NLP Assistant',
    kind: 'Medical Dialogue & Query Engine',
    badge: 'NLP Architecture',
    status: 'Production Prototype',
    domain: 'NLP',
    blurb: 'A transformer-based NLP chatbot for contextual medical query answering, symptom triage, and intent classification.',
    problem: 'Raw keyword searches fail to comprehend clinical semantics and patient colloquial descriptions of symptoms.',
    architecture: ['BERT Encoder', 'Intent Classification Head', 'Semantic Knowledge Base', 'FastAPI Microservice'],
    stack: ['Python', 'BERT', 'Hugging Face Transformers', 'PyTorch', 'FastAPI', 'scikit-learn'],
    decisions: [
      'Fine-tuned bidirectional representations for medical entity recognition and symptom extraction.',
      'Implemented defensive boundaries to prevent clinical hallucination with conservative disclaimers.'
    ],
    repo: GH + '/healthcare-chatbot',
    links: [
      {
        label: 'Explore GitHub',
        href: GH
      }
    ],
    metrics: 'Semantic Intent Extraction'
  }
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  points: string[];
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'intelliqon',
    role: 'RPA Analyst Intern',
    company: 'Intelliqon Technologies',
    location: 'Mumbai, India',
    period: 'Jan 2026 — Mar 2026',
    duration: '3 mos',
    points: [
      'Architected and implemented enterprise Robotic Process Automation (RPA) workflows utilizing UiPath to streamline catalog operations and seller lifecycle management.',
      'Developed high-throughput data processing scripts in Python utilizing pandas and OpenPyXL to ingest, sanitize, and validate voluminous multi-source operational spreadsheets.',
      'Designed self-healing exception handling and automated audit logging, minimizing process failure rates and reducing manual operational overhead by over 40%.'
    ],
    tags: ['UiPath', 'Python', 'pandas', 'OpenPyXL', 'Process Automation', 'ETL', 'Error Recovery']
  },
  {
    id: 'karapuragaur',
    role: 'Design & Frontend Intern',
    company: 'Karapuragaur.ai Technologies',
    location: 'Mumbai, India',
    period: 'Aug 2025 — Oct 2025',
    duration: '3 mos',
    points: [
      'Engineered responsive, accessible front-end interfaces using semantic HTML5, modern CSS3, and design tokens for clean web applications.',
      'Collaborated closely with design leads to translate wireframes and component libraries into pixel-perfect, cross-browser interactive prototypes.',
      'Managed agile feature branches and code reviews using Git and modern development workflows.'
    ],
    tags: ['UI/UX Design', 'HTML5', 'CSS3', 'Responsive Design', 'Git', 'Component Architecture']
  },
  {
    id: 'slrtce',
    role: 'Cybersecurity & VAPT Intern',
    company: 'SLRTCE Network Security Lab',
    location: 'Mumbai, India',
    period: 'Aug 2025 — Oct 2025',
    duration: '3 mos',
    points: [
      'Executed Vulnerability Assessment & Penetration Testing (VAPT) across simulated network segments to uncover attack surfaces and authorization flaws.',
      'Compiled formal vulnerability remediation reports adhering to industry security frameworks, detailing severity scores and mitigation roadmaps.',
      'Performed Linux server hardening, evaluated file permission matrices, and investigated firewall security policies.'
    ],
    tags: ['Linux', 'VAPT', 'Network Security', 'Vulnerability Scanning', 'Server Hardening', 'Security Audits']
  }
];

export interface SkillCategory {
  num: string;
  title: string;
  italicWord: string;
  description: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    num: '01',
    title: 'Artificial Intelligence &',
    italicWord: 'Machine Learning',
    description: 'Specializing in LLM agent architectures, graph neural networks, and semantic retrieval systems.',
    items: ['Python', 'PyTorch', 'Gemini 1.5 API', 'Generative AI & LLMs', 'Prompt Engineering', 'Graph Neural Networks (GNN)', 'BERT & NLP', 'Knowledge Graphs', 'Ensemble Learning', 'LSTM']
  },
  {
    num: '02',
    title: 'Full-Stack & Cloud',
    italicWord: 'Architecture',
    description: 'Constructing robust client interfaces with secure, containerized serverless backends.',
    items: ['React 18', 'TypeScript', 'JavaScript (ESNext)', 'Node.js & Express', 'Tailwind CSS', 'Google Cloud Run', 'Firebase Auth', 'Cloud Firestore', 'REST APIs', 'Vite']
  },
  {
    num: '03',
    title: 'Intelligent Automation &',
    italicWord: 'Data Engineering',
    description: 'Transforming repetitive manual workflows into reliable, audited background systems.',
    items: ['UiPath RPA', 'pandas', 'OpenPyXL', 'Workflow Orchestration', 'Data Pipelines', 'ETL Automation', 'Data Validation']
  },
  {
    num: '04',
    title: 'Defensive Security &',
    italicWord: 'Infrastructure',
    description: 'Enforcing strict boundaries, defense-in-depth API isolation, and system auditability.',
    items: ['AI Key Isolation Proxies', 'VAPT Reporting', 'Linux Administration', 'OWASP Top 10', 'Vulnerability Assessment', 'Git & CI/CD']
  }
];

export const engineeringPrinciples = [
  {
    num: '01',
    title: 'Deconstruct & Isolate',
    desc: 'Break complex problems into core functional constraints and clearly defined security boundaries.'
  },
  {
    num: '02',
    title: 'Evidence-Based Architecture',
    desc: 'Evaluate model trade-offs, inference latency, and data integrity before writing code.'
  },
  {
    num: '03',
    title: 'Production Resilience',
    desc: 'Design systems with server-side secrets, defense-in-depth sanitization, and graceful fallbacks.'
  },
  {
    num: '04',
    title: 'Iterate with Rigor',
    desc: 'Benchmark against baseline heuristics, measure regression, and validate under edge conditions.'
  }
];

export const paper = {
  title: 'A System and Method for Concurrent Multi-Disease Prediction via Knowledge-Guided Graph Neural Networks and Ensemble Learning',
  url: RESEARCHGATE,
  badge: 'IEEE / ResearchGate Publication',
  field: 'Computational Health Informatics · Graph ML',
  abstract: 'A novel predictive methodology addressing complex co-morbidities by projecting clinical features onto medical knowledge graphs. Combines Graph Neural Networks with temporal LSTM dynamics and ensemble classifiers to predict concurrent multi-disease risks with unprecedented multi-label correlation fidelity.',
  themes: ['Multi-Disease Prediction', 'Graph Neural Networks', 'Knowledge-Guided Learning', 'Ensemble Decision Trees', 'Clinical Ontologies']
};

export const education = {
  degree: 'Bachelor of Engineering in Computer Science',
  institution: 'Mumbai University',
  period: 'Class of 2026',
  location: 'Mumbai, India',
  focus: ['Artificial Intelligence', 'Machine Learning & Deep Learning', 'Graph Theory & Algorithms', 'Network Security', 'Distributed Systems']
};
