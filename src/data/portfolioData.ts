import type {
  Project,
  ExperienceItem,
  SkillCategory,
  Certification,
  EducationInfo
} from '../types';

// =============================================================
// PERSONAL INFORMATION & CONTACT DETAILS
// =============================================================
export const PERSONAL_INFO = {
  name: 'LOKESH P',
  role: 'Software Developer',
  specialization: 'Full-Stack Development & AI/ML',
  titleHeadline: 'SOFTWARE DEVELOPER',
  subHeadline: 'BUILDING WITH CODE + AI',
  positioningStatement:
    'Full-Stack Developer focused on Python, AI/ML, NLP, and modern web applications.',
  aboutSummary:
    "I'm a B.E. Computer Science and Engineering graduate passionate about building practical software and AI-powered applications. My experience spans full-stack web development, Python programming, machine learning, NLP, computer vision, REST APIs, and databases.",
  aboutHighlights:
    'Through internships and academic projects, I have worked on real-world applications including AI-based comment moderation, banking FAQ automation, object detection and tracking, and employee onboarding systems.',
  email: 'lokesh2005lokesh15@gmail.com',
  phone: '+91 93420 30354',
  linkedinUrl: 'https://linkedin.com/in/lokesh-p-dev',
  githubUrl: 'https://github.com/Lokesh-ig?tab=repositories',
  
  // DIRECT DOWNLOAD RESUME PDF FILE:
  resumePdfUrl: '/Lokesh_P_Resume.pdf',
  
  // PROFILE HEADSHOT IMAGE:
  profileImageUrl: '/Lokesh_P_Profile.jpg',
  
  location: 'Chennai, Tamil Nadu, India'
};

export const QUICK_STATS = [
  { label: 'AI / Full-Stack Projects', value: '2+', subtext: 'Built & Deployed' },
  { label: 'Internship Experiences', value: '2+', subtext: 'Full Stack & AI' },
  { label: 'Primary Language', value: 'Python', subtext: 'Core Stack' },
  { label: 'Core Focus', value: 'AI + Web', subtext: 'Practical Apps' }
];

export const DEVELOPER_PROFILE = {
  role: 'Software Developer',
  focus: 'AI/ML + Full Stack',
  languages: ['Python', 'SQL', 'JavaScript'],
  webFrameworks: ['React', 'Django', 'Flask', 'REST APIs'],
  aiMlStack: ['BERT', 'Scikit-learn', 'NLP', 'YOLO', 'OpenCV', 'Deep SORT'],
  databases: ['PostgreSQL', 'SQL', 'DBMS']
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    iconName: 'Code2',
    skills: [
      { name: 'Python', tag: 'Primary' },
      { name: 'SQL', tag: 'Database' },
      { name: 'JavaScript', tag: 'Frontend & API' }
    ]
  },
  {
    category: 'Web Development',
    iconName: 'Globe',
    skills: [
      { name: 'React', tag: 'UI Library' },
      { name: 'Django', tag: 'Backend Framework' },
      { name: 'Flask', tag: 'Microservices' },
      { name: 'REST APIs', tag: 'Integration' },
      { name: 'HTML5', tag: 'Markup' },
      { name: 'CSS3', tag: 'Styling' }
    ]
  },
  {
    category: 'AI / Machine Learning',
    iconName: 'Brain',
    skills: [
      { name: 'BERT', tag: 'NLP Transformer' },
      { name: 'Scikit-learn', tag: 'ML Library' },
      { name: 'NLP', tag: 'Text Processing' },
      { name: 'Text Classification', tag: 'Multi-label' },
      { name: 'Machine Learning', tag: 'Algorithms' },
      { name: 'Model Training', tag: 'Evaluation' }
    ]
  },
  {
    category: 'Computer Vision',
    iconName: 'Eye',
    skills: [
      { name: 'YOLO', tag: 'Object Detection' },
      { name: 'OpenCV', tag: 'Image Processing' },
      { name: 'Deep SORT', tag: 'Multi-Object Tracking' },
      { name: 'Object Detection', tag: 'Real-Time' },
      { name: 'Object Tracking', tag: 'Kalman Filter' }
    ]
  },
  {
    category: 'Databases',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational DB' },
      { name: 'SQL', tag: 'Queries' },
      { name: 'DBMS', tag: 'Data Architecture' }
    ]
  },
  {
    category: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: [
      { name: 'VS Code', tag: 'Primary IDE' },
      { name: 'Google Colab', tag: 'Model Training' },
      { name: 'Python IDLE', tag: 'Scripting' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-codealpha',
    role: 'Artificial Intelligence Intern',
    company: 'CodeAlpha',
    period: 'Aug 2026 – Sep 2026',
    location: 'Remote',
    type: 'AI & ML Internship',
    details: [
      'Developed AI-based applications using Python and machine learning frameworks.',
      'Built a Banking FAQ Chatbot using NLP, TF-IDF vectorization, Cosine Similarity, and Flask API.',
      'Developed a real-time Object Detection & Tracking System utilizing YOLO, OpenCV, and Deep SORT.',
      'Gained practical experience in NLP, computer vision, API development, and real-world AI application integration.'
    ],
    skillsUsed: ['Python', 'BERT', 'YOLO', 'OpenCV', 'Deep SORT', 'NLP', 'Flask', 'TF-IDF']
  },
  {
    id: 'exp-novaspark',
    role: 'Full Stack Development Intern',
    company: 'Nova Spark Hub',
    period: 'Jul 2025 – Aug 2025',
    location: 'Remote',
    type: 'Full-Stack Internship',
    details: [
      'Contributed to full-stack web development tasks using modern web technologies.',
      'Worked on seamless frontend component design and backend API integration.',
      'Built and tested responsive UI components across multiple screen sizes.',
      'Collaborated effectively within an agile development team to deliver modular features.'
    ],
    skillsUsed: ['React', 'JavaScript', 'Django', 'HTML5', 'CSS3', 'REST APIs', 'SQL']
  }
];

// =============================================================
// PROJECTS DATA & REPOSITORY URLS
// =============================================================
export const PROJECTS: Project[] = [
  {
    id: 'toxiguard',
    title: 'ToxiGuard',
    subtitle: 'AI-Based Comment Moderation System',
    category: 'AI/ML',
    featured: true,
    description:
      'Built a real-time comment moderation system using React for the interactive frontend and Django/Flask for the robust backend microservices.',
    problem:
      'Online platforms suffer from spam, abusive comments, and toxicity. Manual moderation is slow, subjective, and difficult to scale across thousands of daily user submissions.',
    solution:
      'Engineered an automated moderation pipeline connecting a React user interface to Django API microservices and a Flask AI inference backend powered by a fine-tuned BERT multi-label classifier. Automatically evaluates comments and executes threshold-based ALLOW, FLAG, or DELETE actions.',
    technologies: ['React', 'Django', 'Flask', 'Python', 'BERT', 'Scikit-learn', 'REST APIs', 'MySQL'],
    features: [
      'BERT-based multi-label toxicity classification',
      'Toxic comment detection across multiple categories',
      'Real-time automated content moderation',
      'Admin dashboard for reviewing flagged comments',
      'Threshold-based automated decision logic (ALLOW / FLAG / DELETE)',
      'Decoupled Flask microservice for scalable model inference'
    ],
    githubUrl: 'https://github.com/Lokesh-ig/Comment-Moderation_System',
    liveDemoUrl: 'https://comment-moderationsystem.vercel.app/',
    caseStudy: {
      problem:
        'Online communities face continuous risks from toxic, aggressive, or hateful comments. Moderating content manually creates severe human resource bottlenecks and exposes human moderators to high volumes of abusive text.',
      approach:
        'Designed a decoupled full-stack AI architecture: React handles instant user interactions and administrative UI; Django manages user sessions, database logs, and business rules; Flask hosts the BERT multi-label model for high-throughput NLP classification.',
      architectureDescription:
        'The workflow passes user text through Django validation, dispatches an API request to the Flask BERT inference service, receives multi-label probability vectors, evaluates threshold rules, and stores the flagged status in MySQL.',
      architectureSteps: [
        {
          step: 1,
          title: 'User Comment Submission',
          description: 'User submits text via React frontend comment box.',
          type: 'input'
        },
        {
          step: 2,
          title: 'Django Backend API',
          description: 'Validates request payload, authenticates user, and routes text to AI layer.',
          type: 'service'
        },
        {
          step: 3,
          title: 'Flask AI Service',
          description: 'Lightweight microservice optimized for high-throughput model inference.',
          type: 'service'
        },
        {
          step: 4,
          title: 'BERT Model Inference',
          description: 'Fine-tuned Transformer classifies multi-label toxicity probabilities.',
          type: 'model'
        },
        {
          step: 5,
          title: 'Toxicity Score Evaluation',
          description: 'Scores evaluated against confidence thresholds.',
          type: 'decision'
        },
        {
          step: 6,
          title: 'Moderation Decision Engine',
          description: 'Triggers automated ALLOW, FLAG for review, or instant DELETE actions.',
          type: 'output'
        }
      ],
      technologiesUsed: [
        { category: 'Frontend', stack: ['React', 'Tailwind CSS', 'Axios'] },
        { category: 'Backend Framework', stack: ['Django', 'Django REST Framework'] },
        { category: 'AI Inference Microservice', stack: ['Flask', 'PyTorch / Hugging Face'] },
        { category: 'Machine Learning Model', stack: ['BERT (Bidirectional Encoder Representations from Transformers)', 'Scikit-learn'] },
        { category: 'Database & Storage', stack: ['MySQL', 'SQL'] }
      ],
      keyFeatures: [
        'Multi-label toxicity classification identifying toxic, severe toxic, obscene, threat, insult, and identity hate categories.',
        'Real-time automated decision workflow minimizing human moderator workload.',
        'Admin moderation dashboard featuring flagged comment queues, audit logs, and manual override controls.',
        'Customizable confidence threshold configurations for strict or moderate filtering rules.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'High latency when loading heavy BERT model weights inside a standard synchronous Django web server.',
          solution: 'Isolated model inference into a dedicated Flask microservice that keeps model weights warm in memory, allowing asynchronous API calls.'
        },
        {
          challenge: 'Handling edge-case false positives in nuanced context or non-toxic keyword occurrences.',
          solution: 'Implemented a middle-tier "FLAGged for Review" state with admin dashboard queue for continuous supervised refinement.'
        }
      ],
      outcome:
        'Successfully produced a functional, modular AI comment moderation engine capable of classifying multi-label toxicity and automating content decisions with minimal latency.'
    }
  },
  {
    id: 'employee-onboarding',
    title: 'Employee Onboarding & Document Checklist Automation',
    subtitle: 'Full-Stack Enterprise Workflow System',
    category: 'Full-Stack',
    featured: true,
    description:
      'Developed an employee onboarding and document checklist automation platform using Django, React, and PostgreSQL.',
    problem:
      'HR teams waste substantial time manually requesting, verifying, and tracking paper or email document submissions for new hires, leading to onboarding friction.',
    solution:
      'Engineered an enterprise onboarding web application featuring automated verification checklists, real-time status tracking progress bars, secure document upload channels, and RESTful API synchronization.',
    technologies: ['React', 'Django', 'PostgreSQL', 'REST APIs', 'JavaScript', 'CSS3', 'Python'],
    features: [
      'Interactive employee onboarding portal',
      'Digital document submission interface',
      'Dynamic HR verification checklist management',
      'Real-time status tracking dashboard',
      'REST API integration between React and Django',
      'Automated step-by-step onboarding progress tracking'
    ],
    githubUrl: 'https://github.com/Lokesh-ig/employee-onboarding-automation',
    liveDemoUrl: 'https://onboarding-system-demo.vercel.app',
    caseStudy: {
      problem:
        'New employee onboarding processes in organizations are often fragmented across email threads and paper forms, causing lost documents and delayed compliance verification.',
      approach:
        'Built a centralized web portal with role-based user interfaces for both incoming employees and HR administrators to streamline document submission and verification.',
      architectureDescription:
        'Employees log in, complete step-by-step checklists, upload required documents via React forms, and trigger Django REST API endpoints that update PostgreSQL database records.',
      architectureSteps: [
        {
          step: 1,
          title: 'Employee Profile Setup',
          description: 'Employee registers and receives dynamic onboarding checklist.',
          type: 'input'
        },
        {
          step: 2,
          title: 'Document Submission',
          description: 'Employee uploads required verification files (ID, certificates, tax forms).',
          type: 'service'
        },
        {
          step: 3,
          title: 'Django REST API Sync',
          description: 'Endpoints receive payload, validate file constraints, and persist records.',
          type: 'service'
        },
        {
          step: 4,
          title: 'PostgreSQL Relational DB',
          description: 'Stores user credentials, document metadata, and verification timestamps.',
          type: 'model'
        },
        {
          step: 5,
          title: 'HR Verification Portal',
          description: 'HR admins review submitted items against checklist rules.',
          type: 'decision'
        },
        {
          step: 6,
          title: 'Automated Status Tracking',
          description: 'Real-time onboarding completion score and clearance certificate.',
          type: 'output'
        }
      ],
      technologiesUsed: [
        { category: 'Frontend', stack: ['React.js', 'Tailwind CSS', 'Axios'] },
        { category: 'Backend Engine', stack: ['Python', 'Django', 'Django REST Framework'] },
        { category: 'Database', stack: ['PostgreSQL', 'SQL'] },
        { category: 'Authentication & APIs', stack: ['JWT Tokens', 'REST APIs'] }
      ],
      keyFeatures: [
        'Automated document checklists tailored to employee roles and departments.',
        'Real-time percentage-based onboarding progress tracking bar.',
        'Secure file upload processing with format validation.',
        'HR management portal for bulk review, approval, or rejection of pending documents.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Maintaining real-time synchronization between HR approval actions and employee dashboard status.',
          solution: 'Structured Django REST API state endpoints with standard HTTP status polling and clean frontend state management.'
        }
      ],
      outcome:
        'Delivered a streamlined full-stack onboarding workflow automation solution that simplifies document submissions and reduces verification overhead.'
    }
  },
  {
    id: 'banking-faq-chatbot',
    title: 'Banking FAQ Chatbot',
    subtitle: 'NLP-Based Question Matching & Assistant',
    category: 'NLP',
    featured: false,
    description:
      'Built an NLP-based Banking FAQ Chatbot capable of matching user questions with relevant banking answers using TF-IDF and Cosine Similarity.',
    problem:
      'Bank customers frequently ask repetitive inquiries regarding account types, interest rates, transfers, and policies, clogging customer support channels.',
    solution:
      'Implemented an NLP question-answering pipeline using Python, NLTK, TF-IDF vectorization, and Cosine Similarity wrapped inside a Flask REST API to instantly match queries to verified answers.',
    technologies: ['Python', 'NLTK', 'TF-IDF', 'Cosine Similarity', 'Flask', 'JSON', 'REST APIs'],
    features: [
      'Comprehensive JSON banking FAQ knowledge base',
      'NLTK text preprocessing (tokenization, stop-word removal, stemming)',
      'TF-IDF vector space model representation',
      'Cosine similarity score calculation for query matching',
      'Automated response generation with fallback handling',
      'Flask REST API for UI or mobile integration'
    ],
    githubUrl: 'https://github.com/Lokesh-ig/CodeAlpha_FAQ_Chatbot',
    liveDemoUrl: 'https://codealpha-faq-chatbot-xf7i.onrender.com',
    caseStudy: {
      problem:
        'Traditional keyword-matching chatbots fail when users phrase questions using different synonyms or structural patterns.',
      approach:
        'Applied NLP techniques to pre-process natural language text, convert questions into TF-IDF numerical vectors, and compute mathematical similarity against pre-indexed FAQ pairs.',
      architectureDescription:
        'User query is sanitized via NLTK, transformed into TF-IDF vector, matched against stored vectors using Cosine Similarity, and returned via Flask JSON API.',
      architectureSteps: [
        { step: 1, title: 'User Natural Query', description: 'Customer inputs inquiry e.g., "How do I reset my mobile banking PIN?"', type: 'input' },
        { step: 2, title: 'NLTK Text Preprocessing', description: 'Lowercasing, tokenization, stop-word filtering, and stemming.', type: 'service' },
        { step: 3, title: 'TF-IDF Vectorization', description: 'Transforms text into term-frequency inverse-document-frequency vectors.', type: 'model' },
        { step: 4, title: 'Cosine Similarity Engine', description: 'Calculates dot product similarity against knowledge base vectors.', type: 'decision' },
        { step: 5, title: 'Flask Response API', description: 'Returns high-confidence matching answer JSON payload.', type: 'output' }
      ],
      technologiesUsed: [
        { category: 'Language & Frameworks', stack: ['Python 3.x', 'Flask'] },
        { category: 'NLP Tools', stack: ['NLTK', 'Scikit-learn (TfidfVectorizer)'] },
        { category: 'Data Structures', stack: ['JSON Knowledge Base', 'NumPy Matrix Operations'] }
      ],
      keyFeatures: [
        'Efficient text retrieval without requiring heavy GPU infrastructure.',
        'Confidence score thresholding to prevent inaccurate answer matches.',
        'Extensible JSON schema allowing easy addition of new banking FAQs.'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Handling queries with vocabulary outside the initial training corpus.',
          solution: 'Configured sub-word n-grams and implemented a polite fallback trigger urging user clarification when similarity drops below threshold.'
        }
      ],
      outcome:
        'Created a fast, efficient NLP FAQ assistant capable of resolving routine banking inquiries accurately in sub-100ms response times.'
    }
  },
  {
    id: 'object-detection-tracking',
    title: 'Real-Time Object Detection & Tracking System',
    subtitle: 'YOLO + Deep SORT Computer Vision Pipeline',
    category: 'Computer Vision',
    featured: false,
    description:
      'Developed a real-time computer vision application for high-precision object detection and persistent multi-object tracking.',
    problem:
      'Standard object detectors recognize objects frame-by-frame but lack persistent visual memory, losing track of individual objects as they move across frames.',
    solution:
      'Integrated YOLO object detection with Deep SORT (Simple Online and Realtime Tracking) and OpenCV to assign persistent visual tracking IDs to moving entities in real-time video streams.',
    technologies: ['Python', 'YOLO', 'OpenCV', 'Deep SORT', 'PyTorch', 'NumPy'],
    features: [
      'Real-time multi-class object detection using YOLO',
      'Persistent multi-object tracking via Deep SORT algorithm',
      'Bounding box rendering with distinct tracking IDs',
      'OpenCV frame capture and video stream processing',
      'Kalman filter motion estimation and feature embedding'
    ],
    githubUrl: 'https://github.com/Lokesh-ig/CodeAlpha_Object_Detection_Tracking',
    liveDemoUrl: 'https://codealpha-object-detection-tracking-1urc.onrender.com',
    caseStudy: {
      problem:
        'Tracking moving targets in crowded video streams requires both rapid object detection and spatial temporal identity association.',
      approach:
        'Leveraged YOLO for fast single-shot bounding box proposal and Deep SORT for appearance feature extraction and Kalman filter state estimation.',
      architectureDescription:
        'Video frame is processed by YOLO detector -> bounding box candidates sent to Deep SORT -> feature association & Kalman tracking -> OpenCV visualization overlay.',
      architectureSteps: [
        { step: 1, title: 'Video Stream Input', description: 'Live web camera feed or MP4 video frames ingested via OpenCV.', type: 'input' },
        { step: 2, title: 'YOLO Detection', description: 'Single-stage detector identifies target bounding boxes and class labels.', type: 'model' },
        { step: 3, title: 'Deep SORT Association', description: 'Extracts deep appearance descriptors and updates Kalman filters.', type: 'decision' },
        { step: 4, title: 'ID Assignment & Tracking', description: 'Maintains persistent tracking ID across frame occlusion.', type: 'output' }
      ],
      technologiesUsed: [
        { category: 'Computer Vision Core', stack: ['OpenCV (cv2)', 'Python'] },
        { category: 'Detection & Deep Learning', stack: ['YOLO (You Only Look Once)', 'PyTorch'] },
        { category: 'Tracking Algorithm', stack: ['Deep SORT', 'Kalman Filter', 'Hungarian Algorithm'] }
      ],
      keyFeatures: [
        'High frame-rate real-time detection and tracking.',
        'Persistent ID retention even during temporary object occlusions.',
        'Customizable target classes (vehicles, pedestrians, items).'
      ],
      challengesAndSolutions: [
        {
          challenge: 'ID switching when objects overlap or pass behind obstacles.',
          solution: 'Tuned Deep SORT deep association metrics and appearance feature distance thresholds to improve identity retention.'
        }
      ],
      outcome:
        'Engineered an end-to-end real-time vision pipeline demonstrating advanced proficiency in computer vision algorithms, PyTorch, and OpenCV.'
    }
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-codealpha',
    title: 'Artificial Intelligence Internship Certificate',
    organization: 'CodeAlpha',
    period: 'Sep 2026',
    issuerLogoText: 'CodeAlpha',
    credentialUrl: 'https://linkedin.com/in/lokesh-p-dev',
    description:
      'Successfully completed AI internship developing NLP Banking FAQ Chatbot and YOLO Real-Time Object Detection & Tracking System using Python.',
    image: '/CodeAlpha_Certificate.png',
    pdf: '/CodeAlpha_Certificate.pdf'
  },
  {
    id: 'cert-datacom',
    title: 'Software Development Job Simulation',
    organization: 'Datacom (Issued by Forage)',
    period: 'Aug 2026',
    issuerLogoText: 'Datacom',
    credentialUrl: 'https://linkedin.com/in/lokesh-p-dev',
    description:
      'Completed practical software engineering simulation covering backend application architecture, code refactoring, and software system design.',
    image: '/Datacom_Certificate.png',
    pdf: '/Datacom_Certificate.pdf'
  },
  {
    id: 'cert-novaspark',
    title: 'Full Stack Development Internship Certificate',
    organization: 'Nova Spark Hub',
    period: 'Aug 2025',
    issuerLogoText: 'NovaSpark',
    credentialUrl: 'https://linkedin.com/in/lokesh-p-dev',
    description:
      'Completed full-stack engineering internship working on responsive frontend web components, Django backend integration, and REST APIs.',
    image: '/NovaSpark_Certificate.jpg'
  }
];

export const EDUCATION_INFO: EducationInfo = {
  institution: 'Alpha College of Engineering',
  degree: 'B.E. Computer Science and Engineering',
  period: '2022 – 2026',
  location: 'Chennai, Tamil Nadu',
  cgpa: '8.0 / 10',
  coursework: []
};

export const CURRENT_LEARNING = [
  { title: 'AI-Powered Applications', desc: 'Integrating Transformer models into production microservices.', tag: 'AI/ML' },
  { title: 'Full-Stack Systems', desc: 'Building scalable decoupled architectures with React and Django.', tag: 'Web' },
  { title: 'Machine Learning & NLP', desc: 'Advanced text classification, tokenization, and vector embeddings.', tag: 'Data Science' },
  { title: 'REST APIs Architecture', desc: 'Designing secure, stateless, clean API contracts between services.', tag: 'Backend' },
  { title: 'Modern React Applications', desc: 'Building performant component trees with state optimization.', tag: 'Frontend' }
];

export const HOW_I_BUILD_STEPS = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the problem and requirements. Analyze constraints, data schemas, and target objectives before writing code.',
    iconName: 'Search'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Plan architecture, data flow, and user experience. Structure API endpoints, database schemas, and modular component trees.',
    iconName: 'Layout'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the frontend, backend, APIs, and AI components with clean, maintainable, and type-safe code.',
    iconName: 'Terminal'
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Test, debug, optimize, and refine the application. Ensure high performance, accessibility, and clean code hygiene.',
    iconName: 'CheckCircle2'
  }
];
