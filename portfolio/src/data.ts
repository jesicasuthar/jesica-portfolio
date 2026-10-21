export const GH = 'https://github.com/jesicasuthar';
export const LINKEDIN = 'https://www.linkedin.com/in/jesica-suthar';
export const MEDIUM = 'https://medium.com/@jesica.s.suthar';
export const RESEARCHGATE = 'https://www.researchgate.net/publication/403886515_A_System_and_Method_for_Concurrent_Multi-Disease_Prediction_via_Knowledge-Guided_Graph_Neural_Networks_and_Ensemble_Learning';
export const RESUME = '/JesicaSuthar%20Resume.pdf';
export const EMAIL = 'jesica.s.suthar@gmail.com';
export const PHONE = '+91 8433574004';
export const LOCATION = 'Mumbai, India';

export interface Project {
  id: string;
  title: string;
  badge: string;
  role: string;
  year: string;
  description: string;
  keyHighlights: string[];
  tags: string[];
  videoSrc?: string;
  researchLink?: string;
  liveLink?: string;
  metrics?: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'major-project',
    title: 'A System and Method for Concurrent Multi-Disease Prediction via Knowledge-Guided Graph Neural Networks and Ensemble Learning',
    badge: 'Major Project & Research Publication',
    role: 'Lead Researcher & Core ML Developer',
    year: '2026',
    description:
      'Engineered an advanced hybrid clinical intelligence framework combining temporal biomedical modelling, knowledge graphs, graph neural networks (GNNs), and ensemble classifiers to predict multiple concurrent chronic diseases with high prognostic reliability.',
    keyHighlights: [
      'Published research paper in IISTJ (Co-Author) indexed on ResearchGate.',
      'Constructed disease-symptom-biomarker knowledge graphs fused with Graph Convolutional / Attention Networks.',
      'Combined LSTM temporal sequence learning with weighted ensemble classifiers (XGBoost, Random Forest).',
      'Demonstrated experimental benchmarks of up to 0.931 ROC-AUC and 0.923 accuracy across Heart Disease, Parkinson’s, and Diabetes datasets.'
    ],
    tags: ['Python', 'PyTorch', 'Graph Neural Networks (GNN)', 'Knowledge Graphs', 'Ensemble Learning', 'LSTM', 'Clinical AI'],
    videoSrc: '/demo%20of%20major%20project.mp4',
    researchLink: RESEARCHGATE,
    metrics: [
      { label: 'ROC-AUC Score', value: '0.931' },
      { label: 'Classification Accuracy', value: '92.3%' },
      { label: 'Disease Coverage', value: 'Concurrent Multi-Domain' },
      { label: 'Peer Review', value: 'IISTJ Co-Author' }
    ]
  },
  {
    id: 'luminary',
    title: 'Luminary — Personal Gemini AI Journal',
    badge: 'Full-Stack GenAI Application',
    role: 'Full-Stack Developer',
    year: '2026',
    description:
      'An introspective, multi-turn AI journaling companion designed to guide users through structured emotional reflections and insight extraction using Gemini 1.5 Pro and Google Cloud infrastructure.',
    keyHighlights: [
      'Multi-turn conversational reflections with context preservation and dynamic reflection personas.',
      'Secure server-side Express microservice on Google Cloud Run shielding API keys from client bundles.',
      'Google Sign-In with fine-grained Firebase Authentication and user-isolated Cloud Firestore security rules.',
      'Interactive 3D constellation view visualizing conceptual relationships between past journal entries with time-adaptive ambient theming.'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Google Cloud Run', 'Gemini API', 'Firebase Auth', 'Firestore', 'Three.js'],
    metrics: [
      { label: 'Architecture', value: 'Serverless Cloud Run' },
      { label: 'Security', value: 'Zero Client Keys' },
      { label: 'Intelligence', value: 'Gemini Multi-Turn' }
    ]
  },
  {
    id: 'healthcare-chatbot',
    title: 'Health-Care Conversational Intelligence Bot',
    badge: 'Minor Project',
    role: 'NLP & Backend Researcher',
    year: '2025',
    description:
      'Researched and built a patient-facing clinical query resolution chatbot utilizing transformer-based Natural Language Processing to decode medical terminology and offer triaging suggestions.',
    keyHighlights: [
      'Benchmarked transformer architectures (BERT vs. RoBERTa vs. DistilBERT) for semantic intent recognition.',
      'Formulated clinical query sanitization, medical intent classification, and fallback safety boundaries.',
      'Led architectural documentation, conversational state management design, and system flow diagrams.'
    ],
    tags: ['Python', 'BERT', 'NLP', 'Transformers', 'FastAPI', 'System Architecture'],
    metrics: [
      { label: 'Model Core', value: 'Fine-tuned BERT' },
      { label: 'Domain', value: 'Healthcare Triaging' }
    ]
  }
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Generative AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Generative AI & LLMs', highlight: true },
      { name: 'Gemini API & AI Studio', highlight: true },
      { name: 'PyTorch', highlight: true },
      { name: 'Graph Neural Networks (GNN)', highlight: true },
      { name: 'Knowledge Graphs', highlight: true },
      { name: 'Agentic AI Workflows', highlight: true },
      { name: 'Prompt Engineering' },
      { name: 'NLP & Transformers (BERT)' },
      { name: 'Temporal Modelling (LSTM)' },
      { name: 'Ensemble Learning (XGBoost/RF)' }
    ]
  },
  {
    title: 'Cloud & DevOps Engineering',
    icon: 'Cloud',
    skills: [
      { name: 'Google Cloud Run', highlight: true },
      { name: 'Google Cloud Platform (GCP)' },
      { name: 'AWS Cloud Foundations (Certified)', highlight: true },
      { name: 'Firebase Authentication' },
      { name: 'Cloud Firestore' },
      { name: 'Serverless Architectures' },
      { name: 'Containerization Basics' },
      { name: 'RESTful Microservices' }
    ]
  },
  {
    title: 'Robotic Process Automation (UiPath)',
    icon: 'Bot',
    skills: [
      { name: 'UiPath Studio v2024.10', highlight: true },
      { name: 'UiPath Orchestrator', highlight: true },
      { name: 'Excel Modern Automation', highlight: true },
      { name: 'Email Automation' },
      { name: 'UI Descriptors & Selectors' },
      { name: 'Data Manipulation (DataTables, Lists)' },
      { name: 'Error & Exception Handling' },
      { name: 'RPA Scheduling & Monitoring' }
    ]
  },
  {
    title: 'Full-Stack Development & Core Languages',
    icon: 'Code',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)' },
      { name: 'React.js' },
      { name: 'Node.js & Express.js' },
      { name: 'MERN Stack' },
      { name: 'HTML5 & Modern CSS3' },
      { name: 'Vite & Build Tooling' },
      { name: 'Git & GitHub' },
      { name: 'Linux / Bash Scripting' }
    ]
  },
  {
    title: 'Data Science & Visual Analytics',
    icon: 'Database',
    skills: [
      { name: 'pandas & NumPy', highlight: true },
      { name: 'OpenPyXL & Advanced Excel' },
      { name: 'Tableau Visual Analytics' },
      { name: 'Data Cleaning & Wrangling' },
      { name: 'Exploratory Data Analysis (EDA)' },
      { name: 'Relational DBMS & SQL' }
    ]
  },
  {
    title: 'Security, Ethics & Methodologies',
    icon: 'Shield',
    skills: [
      { name: 'Vulnerability Assessment & VAPT' },
      { name: 'Phishing Simulation Analysis' },
      { name: 'Research Ethics (CITI MIT Certified)', highlight: true },
      { name: 'McKinsey Problem-Solving Framework', highlight: true },
      { name: 'Agile & Technical Documentation' },
      { name: 'Cross-Functional Team Leadership' }
    ]
  }
];

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud-ai' | 'uipath' | 'leadership-sec';
  date: string;
  badgeUrl?: string;
  pdfUrl?: string;
  verifyUrl?: string;
  credentialId?: string;
  description: string;
  keySkills: string[];
}

export const CERTIFICATIONS: CertificateItem[] = [
  // Google Cloud GenAI
  {
    id: 'gc-genai-c1',
    title: 'Google Cloud Gen AI Academy APAC — Cohort 1',
    issuer: 'Google Cloud & Hack2skill',
    category: 'cloud-ai',
    date: 'April 2026',
    pdfUrl: '/cohorot%201.pdf',
    credentialId: '2026H2S04GCGENAIAPACC1-P01111',
    description: 'Empowering developers to build, connect, and migrate AI-powered applications using modern cloud infrastructure and production-ready solutions.',
    keySkills: ['Google Cloud', 'GenAI', 'Cloud Infrastructure', 'Application Migration']
  },
  {
    id: 'gc-genai-c2',
    title: 'Google Cloud Gen AI Academy APAC — Cohort 2',
    issuer: 'Google Cloud & Hack2skill',
    category: 'cloud-ai',
    date: 'July 2026',
    pdfUrl: '/2026H2S07GCGENAIAPACC2-P01639%20(1).pdf',
    credentialId: '2026H2S07GCGENAIAPACC2-P01639',
    description: 'Hands-on learning focused on building real-world AI solutions powered by data, analytics, and intelligent systems on Google Cloud.',
    keySkills: ['Data Analytics', 'Intelligent Systems', 'Vertex AI', 'Google Cloud']
  },
  {
    id: 'gc-genai-c3',
    title: 'Google Cloud Gen AI Academy APAC — Cohort 3',
    issuer: 'Google Cloud & Hack2skill',
    category: 'cloud-ai',
    date: 'September 2026',
    pdfUrl: '/2026H2S09GCGENAIAPACC3-P01555.pdf',
    credentialId: '2026H2S09GCGENAIAPACC3-P01555',
    description: 'Accelerating AI with Cloud Run — building, deploying, and orchestrating intelligent multi-agent systems and serverless containerized AI on Google Cloud.',
    keySkills: ['Google Cloud Run', 'Intelligent Agents', 'Microservices', 'Agent Orchestration']
  },

  // IBM SkillsBuild
  {
    id: 'ibm-ai-agent',
    title: 'Build an AI Agent — Credly Verified Badge',
    issuer: 'IBM SkillsBuild',
    category: 'cloud-ai',
    date: 'August 2026',
    pdfUrl: '/BuildanAIAgent_Badge20261014-21-6zvofg.pdf',
    verifyUrl: 'https://www.credly.com/go/2oiPKIey',
    description: 'Practical certification validating the ability to architect, configure, and deploy interactive AI agents equipped with cognitive decision frameworks.',
    keySkills: ['AI Agents', 'Cognitive Systems', 'IBM SkillsBuild']
  },
  {
    id: 'ibm-ai-fundamentals',
    title: 'AI Fundamentals: Foundations for Understanding AI',
    issuer: 'IBM SkillsBuild',
    category: 'cloud-ai',
    date: 'August 2026',
    pdfUrl: '/AIFundamentalsFoundationsforUnderstandingAI_Badge20261014-21-4kse8q.pdf',
    verifyUrl: 'https://www.credly.com/go/YRTQgpJ8',
    description: 'Foundational mastery of Artificial Intelligence principles, neural network behaviors, ethics, and industry application vectors.',
    keySkills: ['AI Fundamentals', 'Machine Learning', 'Ethics in AI']
  },
  {
    id: 'ibm-rewrite-ai',
    title: 'Rewrite AI: Summer Challenge Completion',
    issuer: 'IBM SkillsBuild',
    category: 'cloud-ai',
    date: 'August 2026',
    pdfUrl: '/Completion%20Certificate%20_%20SkillsBuild.pdf',
    credentialId: 'PLAN-C9014C6C50C0',
    description: 'Specialized intensive summer track completing advanced generative learning tracks on IBM learning systems.',
    keySkills: ['GenAI Tools', 'Prompt Engineering', 'AI Problem-Solving']
  },

  // AWS Academy
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate — AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    category: 'cloud-ai',
    date: 'April 2025',
    pdfUrl: '/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260507-32-88dxiv.pdf',
    verifyUrl: 'https://www.credly.com/go/NYTMEyJX',
    description: 'Comprehensive 20-hour accredited coursework on AWS cloud architecture, security, compute (EC2/Lambda), storage (S3), and networking essentials.',
    keySkills: ['AWS Cloud', 'IAM Security', 'EC2', 'S3', 'Cloud Architecture']
  },

  // UiPath
  {
    id: 'uipath-associate',
    title: 'UiPath Academy Automation Developer Associate Training',
    issuer: 'UiPath Academy',
    category: 'uipath',
    date: 'February 2026',
    pdfUrl: '/uipath.pdf',
    description: 'Official diploma validating complete mastery of enterprise RPA development, debugging, orchestration, and workflow architecture in UiPath Studio.',
    keySkills: ['RPA Development', 'UiPath Studio', 'Workflow Orchestration', 'Enterprise Automation']
  },
  {
    id: 'uipath-orchestrator',
    title: 'Orchestrator Overview for Automation Developers (v2024.10)',
    issuer: 'UiPath Academy',
    category: 'uipath',
    date: 'February 2026',
    pdfUrl: '/Orchestrator%20overview%20for%20automation%20developers%20(v2024.10)_Jesica%20Suthar_en-US_diploma.pdf',
    description: 'Managing robot assets, queue triggers, credentials, and scheduling high-throughput unattended and attended automation pipelines.',
    keySkills: ['UiPath Orchestrator', 'Assets & Queues', 'Unattended Robots']
  },
  {
    id: 'uipath-excel',
    title: 'Excel Automation with the Modern Experience in Studio (v2024.10)',
    issuer: 'UiPath Academy',
    category: 'uipath',
    date: 'January 2026',
    pdfUrl: '/Excel%20Automation%20with%20the%20Modern%20Experience%20in%20Studio%20(v2024.10)_Jesica%20Suthar_en-US_diploma.pdf',
    description: 'Complex spreadsheet transformations, modern Excel activities, dynamic ranges, formulas, and high-volume data extraction.',
    keySkills: ['Excel Automation', 'Modern Experience', 'Data Extraction']
  },
  {
    id: 'uipath-selectors',
    title: 'Selectors in Studio Deep Dive (v2024.10)',
    issuer: 'UiPath Academy',
    category: 'uipath',
    date: 'February 2026',
    pdfUrl: '/Selectors%20in%20Studio%20deep%20dive%20(v2024.10)_Jesica%20Suthar_en-US_diploma.pdf',
    description: 'Dynamic UI selectors, fuzzy matching, regex targeting, and durable object recognition across dynamic web and desktop applications.',
    keySkills: ['Selectors', 'Fuzzy Matching', 'Dynamic UI Targeting']
  },
  {
    id: 'uipath-error',
    title: 'Error and Exception Handling in Studio (v2024.10)',
    issuer: 'UiPath Academy',
    category: 'uipath',
    date: 'February 2026',
    pdfUrl: '/Error%20and%20exception%20handling%20in%20Studio%20(v2024.10)_Jesica%20Suthar_en-US_diploma.pdf',
    description: 'Defensive automation engineering: TryCatch hierarchies, business vs. system exceptions, retry scopes, and auto-recovery mechanics.',
    keySkills: ['TryCatch', 'Business Rule Exceptions', 'Auto-Recovery']
  },
  {
    id: 'uipath-email',
    title: 'Email Automation in Studio (v2024.10)',
    issuer: 'UiPath Academy',
    category: 'uipath',
    date: 'February 2026',
    pdfUrl: '/Email%20automation%20in%20Studio%20(v2024.10)_Jesica%20Suthar_en-US_diploma.pdf',
    description: 'Integrating Outlook, IMAP, and SMTP with filtering rules, document attachments, and automated dispatch workflows.',
    keySkills: ['Email Automation', 'IMAP/SMTP', 'Attachment Processing']
  },

  // Leadership & Security
  {
    id: 'mckinsey-forward',
    title: 'McKinsey.org Forward Online Learning Program',
    issuer: 'McKinsey.org',
    category: 'leadership-sec',
    date: 'June 2026',
    pdfUrl: '/Forward20260623-31-2hlw55.pdf',
    description: 'Elite professional program by McKinsey & Company developing structured problem-solving, influential business communication, resilience, and digital toolkit mindsets.',
    keySkills: ['McKinsey Frameworks', 'Structured Problem-Solving', 'Strategic Communication', 'Digital Toolkit']
  },
  {
    id: 'citi-coi',
    title: 'CITI Program: Conflicts of Interest (Basic Course)',
    issuer: 'Collaborative Institutional Training Initiative & MIT Affiliates',
    category: 'leadership-sec',
    date: 'November 2025',
    pdfUrl: '/citiCompletionCertificate_15053968_73474654.pdf',
    credentialId: 'Record ID 73474654 (Score 100%)',
    description: 'Institutional certification in scientific research integrity, financial conflict disclosure regulations, and ethical governance standards.',
    keySkills: ['Research Integrity', 'Scientific Ethics', 'Regulatory Compliance']
  },
  {
    id: 'mastercard-cybersec',
    title: 'Mastercard Cybersecurity Job Simulation',
    issuer: 'Mastercard & Forage',
    category: 'leadership-sec',
    date: 'September 2024',
    pdfUrl: '/vcKAB5yYAgvemepGQ_Mastercard_oWmrbcqRiecsS5FkP_1727489292096_completion_certificate.pdf',
    credentialId: 'Code sQpFX8trXiQit7R2Y',
    description: 'Hands-on practical simulation assessing corporate security postures, designing employee phishing simulations, and analyzing threat telemetry.',
    keySkills: ['Cybersecurity', 'Phishing Simulation', 'Threat Telemetry', 'VAPT']
  }
];

export interface ExtracurricularItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge: string;
  highlights: string[];
}

export const EXTRACURRICULARS: ExtracurricularItem[] = [
  {
    id: 'csi-head',
    role: 'Documentation Head',
    organization: 'Computer Society of India (CSI-SLRTCE)',
    period: '2023 – 2024',
    badge: 'Technical Leadership',
    highlights: [
      'Led the editorial and technical documentation team across the student chapter.',
      'Played an instrumental role in conceptualizing and organizing premier technical events and seminars.',
      'Key organizer for "Hackhaven" — a flagship 24-hour national hackathon, handling event flows, participant coordination, and post-event reporting.'
    ]
  },
  {
    id: 'spotlight-pr',
    role: 'External PR & Judges/Celebrity Management',
    organization: 'Spotlight SLRTCE (Cultural Team)',
    period: '2024 – 2025',
    badge: 'Event & PR Management',
    highlights: [
      'Core member of the collegiate cultural committee organizing the institute’s flagship annual festivals.',
      'Directly spearheaded external public relations, media engagement, and sponsorship communications.',
      'Managed VIP hospitality, schedule coordination, and logistics for celebrity guests and competition judging panels.'
    ]
  },
  {
    id: 'nss-volunteer',
    role: 'Community Volunteer',
    organization: 'National Service Scheme (NSS)',
    period: '2023–25',
    badge: 'Social Impact',
    highlights: [
      'Dedicated volunteering hours to community welfare drives, cleanliness initiatives, and public awareness campaigns.',
      'Collaborated on campus blood donation camps, environmental sustainability drives, and underprivileged outreach.'
    ]
  },
  {
    id: 'rtc-member',
    role: 'Active Member',
    organization: 'RTC (Re-Write The Code)',
    period: 'Active Contributor',
    badge: 'Engineering Community',
    highlights: [
      'Engaged in collaborative software sprints, code reviews, and peer-to-peer programming workshops.',
      'Promoted hands-on problem solving, algorithmic challenges, and open-source contributions within the developer network.'
    ]
  }
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'RPA Analyst Intern',
    company: 'Intelliqon Technologies',
    period: 'Jan 2026 – Mar 2026',
    location: 'Mumbai, India',
    bullets: [
      'Developed and deployed resilient UiPath automations streamlining Amazon and Flipkart merchant operations (inventory synchronization, listing updates, pricing, and automated daily sales reporting).',
      'Architected custom Python data pipelines leveraging pandas and OpenPyXL to ingest, validate, and cleanse large e-commerce data feeds.',
      'Implemented robust exception handling frameworks, auto-retry logic, and scheduling on UiPath Orchestrator for 99%+ unattended run reliability.'
    ],
    skills: ['UiPath Studio', 'Python', 'pandas', 'OpenPyXL', 'Excel Automation', 'RPA Scheduling']
  },
  {
    role: 'Designing Intern',
    company: 'Karapuargaur.ai Technologies',
    period: 'Aug 2025 – Oct 2025',
    location: 'Remote',
    bullets: [
      'Engineered modern, responsive web user interfaces utilizing semantic HTML5 and clean CSS3 architectures.',
      'Participated in daily Agile standups, UI/UX critique sessions, and collaborative GitHub version control workflows.'
    ],
    skills: ['HTML5', 'CSS3', 'UI/UX Design', 'Git & GitHub', 'Agile Sprints']
  },
  {
    role: 'Cybersecurity Intern',
    company: 'SLRTCE Security Cell',
    period: 'Aug 2025 – Oct 2025',
    location: 'Mumbai, India',
    bullets: [
      'Conducted vulnerability reconnaissance and drafted structured VAPT (Vulnerability Assessment & Penetration Testing) reports under senior faculty supervision.',
      'Executed network probing, port scans, and security hygiene evaluations in controlled Linux lab environments.'
    ],
    skills: ['VAPT Reporting', 'Linux', 'Network Security', 'Vulnerability Assessment']
  }
];
