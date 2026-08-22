import { ProjectItem, ClientWorkItem, ExperienceItem, SkillCategory, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Kiran Rajvanshi",
  monogram: "KR",
  title: "Web Developer • WordPress Developer • App Developer • AI Automation",
  shortPositioning: "I build websites, applications, and AI-powered solutions that solve real-world problems.",
  heroLabel: "HELLO, I'M KIRAN",
  heroHeading: "Building Digital Experiences With Code & Creativity.",
  heroSubheading: "Websites, applications, WordPress solutions, and AI-powered automation — built with a focus on usability, performance, and real-world results.",
  aboutHeading: "A Developer Who Likes Building Things That Actually Work.",
  aboutParagraphs: [
    "I am a versatile developer working across web development, WordPress ecosystems, mobile applications, and modern AI-powered automation.",
    "My hands-on experience includes crafting and customizing high-performance WordPress sites, developing responsive user interfaces, building native Android and cross-platform Flutter apps, and integrating APIs with intelligent AI workflows.",
    "I focus on practical solutions: whether optimizing real-world client platforms, building custom post types and admin tools, or developing browser-automated developer agents. My current passion is pushing the boundaries of AI agents and developer tooling to automate repetitive tasks and build reliable digital products."
  ],
  status: "Available for Projects & Roles",
  location: "Open to Remote & Global Opportunities",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    email: "kiran.rajvanshi.dev@gmail.com"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Web Development",
    description: "Building responsive, modern, and accessible web experiences.",
    iconName: "Globe",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Web Design", "Landing Pages", "Modern UI/UX"]
  },
  {
    category: "WordPress",
    description: "End-to-end CMS customization, custom architecture, and e-commerce.",
    iconName: "LayoutTemplate",
    skills: ["WordPress Core", "Kadence", "Elementor", "Gutenberg", "WooCommerce", "Custom Plugins", "Custom Admin Panels", "Custom CSS", "Dynamic Content"]
  },
  {
    category: "App Development",
    description: "Native Android and cross-platform mobile application engineering.",
    iconName: "Smartphone",
    skills: ["Java", "Android Studio", "XML UI", "Flutter", "Dart", "Firebase Integration"]
  },
  {
    category: "AI & Automation",
    description: "Harnessing LLM APIs, developer agents, and browser automation.",
    iconName: "Cpu",
    skills: ["Python", "Gemini API", "Google GenAI SDK", "Google ADK", "AI Agents", "Playwright", "Chrome DevTools Protocol (CDP)", "Browser Automation"]
  }
];

export const TECH_NODES = [
  { name: "HTML", category: "web", color: "#e34f26" },
  { name: "CSS", category: "web", color: "#1572b6" },
  { name: "JavaScript", category: "web", color: "#f7df1e" },
  { name: "Java", category: "app", color: "#f89820" },
  { name: "Python", category: "ai", color: "#3776ab" },
  { name: "Dart", category: "app", color: "#0175c2" },
  { name: "Flutter", category: "app", color: "#02569b" },
  { name: "Android", category: "app", color: "#3ddc84" },
  { name: "Firebase", category: "app", color: "#ffca28" },
  { name: "WordPress", category: "cms", color: "#21759b" },
  { name: "WooCommerce", category: "cms", color: "#96588a" },
  { name: "PHP", category: "cms", color: "#777bb4" },
  { name: "MySQL", category: "cms", color: "#4479a1" },
  { name: "Gemini API", category: "ai", color: "#00f0ff" },
  { name: "Google ADK", category: "ai", color: "#a855f7" },
  { name: "Playwright", category: "ai", color: "#2e8b57" }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Java Development Internship",
    company: "Indolike",
    period: "Internship",
    description: "Hands-on Java development internship focusing on core object-oriented principles, software logic implementation, and practical application development workflows.",
    skills: ["Java", "OOP", "Software Architecture", "Debugging"],
    type: "Internship"
  },
  {
    id: "exp-2",
    role: "Java Developer",
    company: "CodeLeft",
    period: "Jan 4 – Feb 5",
    description: "Java development internship delivering feature implementations, structured code modules, and algorithmic problem solving in a team environment.",
    skills: ["Java", "Application Logic", "Data Structures", "Code Optimization"],
    type: "Internship"
  },
  {
    id: "exp-3",
    role: "App Deployment Internship",
    company: "Prodigy Infotech",
    period: "Internship",
    description: "Application deployment and mobile development internship involving build pipelines, release verification, and responsive application deployment testing.",
    skills: ["App Deployment", "Mobile Architecture", "Release Verification", "Android"],
    type: "Internship"
  }
];

export const CLIENT_WORK_ITEMS: ClientWorkItem[] = [
  {
    id: "client-1",
    client: "Global Grania",
    role: "WordPress & Business Website Development",
    category: "Corporate & Business Web",
    description: "Developed and customized a professional WordPress business website tailored for brand presence, structured service listings, and responsive mobile rendering.",
    deliverables: ["Custom Layouts", "Responsive Design", "Performance Optimization", "Content Architecture"],
    tags: ["WordPress", "Responsive UI", "Custom CSS", "Business Site"]
  },
  {
    id: "client-2",
    client: "HeadwearHouse",
    role: "WordPress Development & Customization",
    category: "E-Commerce & Catalog",
    description: "Customized WordPress platform with tailored product catalog presentation, brand consistency, and streamlined user navigation for merchandise showcase.",
    deliverables: ["Theme Customization", "Product Showcase", "Mobile-Friendly UI", "Speed Optimization"],
    tags: ["WordPress", "Customization", "UI/UX", "Kadence/Elementor"]
  },
  {
    id: "client-3",
    client: "Aroma Aegis",
    role: "WordPress Website Development",
    category: "Brand & Showcase",
    description: "Delivered responsive WordPress website implementation with clean visual aesthetics, structured product story presentation, and lead generation touchpoints.",
    deliverables: ["Visual Styling", "Landing Pages", "Contact Flow", "Cross-Browser Compatibility"],
    tags: ["WordPress", "Web Design", "Responsive Layout", "Gutenberg"]
  },
  {
    id: "client-4",
    client: "Hosting & Server Platforms",
    role: "Server Pages & Infrastructure Web Layouts",
    category: "Hosting & Cloud UI",
    description: "Engineered and enhanced dedicated server landing pages, VPS product structures, country-specific hosting portals, and conversion-oriented layouts.",
    deliverables: [
      "Dedicated Server & VPS Landing Pages",
      "Country-Specific Hosting Pages",
      "Responsive Banners & Product Specs",
      "SEO-Oriented Page Structures"
    ],
    tags: ["Landing Pages", "SEO Structure", "VPS & Dedicated", "Conversion UI"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-1",
    title: "Blood Donation App",
    category: "Mobile Application",
    technologies: ["Java", "Android Studio", "XML", "Firebase"],
    description: "An Android application designed to streamline blood donor discovery, registration, and communication with an intuitive UI and real-time backend sync.",
    highlights: [
      "Smooth splash screen and polished animated UI elements",
      "Firebase real-time database integration for donor records",
      "Dedicated donor registration and search filter system",
      "Optimized XML layouts for multiple device screen sizes"
    ],
    featured: true
  },
  {
    id: "project-2",
    title: "Food Ordering App",
    category: "Mobile Application",
    technologies: ["Java", "Android Studio", "XML"],
    description: "An Android food ordering application concept featuring rich menu presentation, item selection, cart management, and seamless order flow UI.",
    highlights: [
      "Categorized food menu browsing with image and price cards",
      "Dynamic cart state calculation and checkout user flow",
      "Custom Android XML views with smooth transitions",
      "Modular Java architecture for scalable view-binding"
    ],
    featured: true
  },
  {
    id: "project-3",
    title: "Certificate Verification System",
    category: "Full-Stack WordPress / Backend",
    technologies: ["WordPress", "PHP", "MySQL", "Custom Post Types"],
    description: "A secure certificate validation system built directly into WordPress architecture using custom post types, metadata schemas, admin panels, and frontend verification shortcodes.",
    highlights: [
      "Custom Post Type (CPT) for secure certificate record storage",
      "Custom admin panels and metadata fields for quick staff entries",
      "Instant frontend verification shortcode for credential lookups",
      "Direct MySQL query optimization ensuring tamper-proof record validation"
    ],
    featured: true
  },
  {
    id: "project-4",
    title: "MyAgent",
    category: "AI & Browser Automation",
    technologies: ["Python", "Gemini API", "Google GenAI SDK", "Playwright", "Chrome CDP"],
    description: "An experimental personal AI development agent engineered to autonomously execute coding tasks, manage local file systems, automate browser sessions, and streamline WordPress workflows.",
    highlights: [
      "AI-powered code generation and semantic file manipulation",
      "Playwright & Chrome DevTools Protocol (CDP) browser automation",
      "Gemini API & Google GenAI SDK multi-modal reasoning engine",
      "Automated testing and WordPress admin workflow execution"
    ],
    featured: true
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-1",
    title: "WordPress Development",
    description: "Custom WordPress solutions crafted for speed, reliability, and business impact.",
    features: [
      "Custom themes & Gutenberg blocks",
      "Kadence & Elementor customization",
      "WooCommerce setup & store architecture",
      "Custom plugins, CPTs & admin panels"
    ],
    iconName: "LayoutTemplate",
    highlight: "Core Specialty"
  },
  {
    id: "service-2",
    title: "Responsive Web Development",
    description: "Modern, pixel-perfect frontend websites with smooth animations and responsive layouts.",
    features: [
      "Clean HTML5 / CSS3 / JavaScript code",
      "High-converting landing page creation",
      "Mobile-first responsive architecture",
      "Cross-browser testing & performance audit"
    ],
    iconName: "Code",
    highlight: "High Performance"
  },
  {
    id: "service-3",
    title: "Website Redesign",
    description: "Revamp outdated websites into modern, aesthetic, and fast-loading experiences.",
    features: [
      "Modern UI/UX overhaul & typography",
      "Page speed optimization & asset compression",
      "Mobile layout responsiveness fix",
      "SEO-friendly structure preservation"
    ],
    iconName: "Palette"
  },
  {
    id: "service-4",
    title: "Mobile App Development",
    description: "Native Android and Flutter cross-platform applications built with clean code.",
    features: [
      "Native Java Android app development",
      "Flutter & Dart cross-platform apps",
      "Firebase authentication & database setup",
      "Polished UI animation & XML layout styling"
    ],
    iconName: "Smartphone"
  },
  {
    id: "service-5",
    title: "AI Automation & Agents",
    description: "Integrating intelligent LLMs, API automations, and browser workflows to save time.",
    features: [
      "Gemini API & Google GenAI SDK integration",
      "Playwright & Chrome CDP browser automation",
      "Automated file operations & developer tooling",
      "Custom AI workflow & assistant prototyping"
    ],
    iconName: "Bot",
    highlight: "Emerging Tech"
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Practical Problem Solving",
    description: "I focus on building software and websites that actually work in real-world scenarios, avoiding unnecessary complexity.",
    iconName: "CheckCircle2"
  },
  {
    title: "Cross-Technology Experience",
    description: "Comfortable navigating between web interfaces, WordPress architecture, mobile applications, and AI automations.",
    iconName: "Layers"
  },
  {
    title: "Client-Focused Development",
    description: "Experienced with real client requirements, existing systems, deadline respect, and delivering maintainable code.",
    iconName: "Users"
  },
  {
    title: "Continuous Learning",
    description: "Actively experimenting with modern AI agents, browser automation, modern frontend frameworks, and emerging tech.",
    iconName: "TrendingUp"
  }
];
