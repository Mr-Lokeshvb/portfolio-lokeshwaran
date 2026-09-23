/**
 * Portfolio data for Lokeshwaran V
 */

const portfolioData = {
  personalInfo: {
    name: "Lokeshwaran V",
    firstName: "Lokeshwaran",
    brandName: "Lokeshwaran V",
    title: "Software Engineer",
    location: "Bengaluru, India",
    emails: {
      primary: "lokeshvb30000@gmail.com",
    },
    phone: "9942467795",
    summary:
      "Software Engineer and Full Stack Developer specializing in MERN stack development, cloud deployment, AI integration, REST APIs, automation, and scalable web applications.",
  },

  socialLinks: {
    github: "https://github.com/Mr-Lokeshvb",
    linkedin: "https://www.linkedin.com/in/lokeshwaran-v-53777b253/",
    instagram: "",
  },

  heroContent: {
    greeting: "Hi, I’m Lokeshwaran",
    titleHighlight: "Software Engineer",
    subtitle:
      "Full Stack Developer building scalable web applications with cloud technologies, AI integration, and practical automation.",
    ctaPrimary: {
      text: "View Projects",
      href: "#projects",
    },
    ctaSecondary: {
      text: "Contact Me",
      href: "#contact",
    },
    ctaResume: {
      text: "Resume",
      href: `${import.meta.env.BASE_URL}Lokeshwaran_V_CV.pdf`,
    },
  },

  aboutContent: {
    heading: "About Me",
    bio:
      "I am a <strong>Software Engineer</strong> focused on building scalable and practical full-stack applications. My experience includes MERN stack development, RESTful APIs, MongoDB Atlas, authentication systems, cloud deployment, AI integrations, dashboards, and automation.<br/><br/>I enjoy working across the complete product lifecycle — from responsive UI and backend architecture to database integration, API development, AI-powered functionality, deployment, debugging, and performance optimization.",
  },

  technicalSkills: {
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "JavaScript", level: 85 },
          { name: "React.js", level: 85 },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 82 },
          { name: "Express.js", level: 82 },
          { name: "REST APIs", level: 88 },
          { name: "JWT", level: 80 },
          { name: "PHP", level: 60 },
        ],
      },
      {
        title: "Database",
        skills: [
          { name: "MongoDB", level: 85 },
          { name: "MongoDB Atlas", level: 85 },
          { name: "NoSQL", level: 85 },
          { name: "MySQL", level: 85 },
        ],
      },
      
      {
        title: "Cloud & Deployment",
        skills: [
          { name: "AWS", level: 68 },
          { name: "Vercel", level: 82 },
          { name: "Render", level: 80 },
          { name: "Cloud Deployment", level: 75 },
        ],
      },
      {
        title: "Tools & Automation",
        skills: [
          { name: "Git & Github", level: 88 },
          { name: "VS Code", level: 88 },
          { name: "Codex", level: 85 },
          { name: "n8n", level: 85 },
          { name: "Antigravity", level: 85 },
          { name: "Prompt Engineering", level: 82 },
          { name: "API Integration", level: 85 },
        ],
      },
      {
        title: "Python & AI",
        skills: [
          { name: "Python", level: 80 },
          { name: "OpenCV", level: 75 },
          { name: "Machine Learning", level: 72 },
          { name: "AI API Integration", level: 80 },
        ],
      },
    ],
  },

  skillsContent: {
    badge: "How I Work",
    heading: "From Idea to Production",
    description:
      "I approach software development by understanding the requirement, designing the architecture, building the solution, integrating required services, testing the workflow, and deploying the final product.",
    cards: [
      {
        number: "01",
        title: "Understand",
        text: "Understand requirements, users, workflows, constraints, and the expected outcome.",
      },
      {
        number: "02",
        title: "Design",
        text: "Plan the UI, application architecture, APIs, database structure, and technical workflow.",
      },
      {
        number: "03",
        title: "Build",
        text: "Develop responsive interfaces, backend services, APIs, database integrations, and features.",
      },
      {
        number: "04",
        title: "Deploy",
        text: "Test, debug, optimize, and deploy the application using suitable cloud and hosting platforms.",
      },
    ],
    endText: "Build. Test. Improve. Ship.",
  },

  internshipsList: [
    {
      organization: "Adrasti Global Venture Builder",
      role: "Software Development Intern",
      duration: "2025",
      skills: [
        "Full-stack web application development",
        "REST API development and integration",
        "Database and cloud-connected application development",
        "AI-powered feature integration",
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Git"],
    },
  ],

    // ==========================================
  // WORK & REAL-WORLD EXPERIENCE
  // ==========================================

  workExperience: [
    {
      id: "software-development-intern",
      type: "INTERNSHIP",
      title: "Software Development Intern",
      organization: "Adrasti Global Venture Builder",
      duration: "Dec 2024 – Sep 2025 | Dec 2025 – Present",

      description:
        "Contributed to full-stack web application development using the MERN stack, working across frontend interfaces, backend APIs, database integration, authentication, AI features, testing, debugging, and deployment workflows.",

      skills: [
        "Built and enhanced responsive React-based application interfaces",
        "Developed and integrated REST APIs using Node.js and Express.js",
        "Worked with MongoDB and MongoDB Atlas for application data and queries",
        "Implemented authentication, role-based workflows, and protected application features",
        "Integrated AI-powered functionality and external APIs into web applications",
        "Worked with Git/GitHub, debugging, testing, deployment, and production configuration",
      ],

      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MongoDB Atlas",
        "REST API",
        "JWT",
        "Git",
      ],
    },

    {
      id: "automated-invoice-generator",
      type: "REAL-WORLD PROJECT",
      title: "Automated Invoice Generator",
      organization: "Real-World Automation Project",
      duration: "2026",

      description:
        "Built a browser-based invoice automation solution for a real business workflow, reducing repetitive manual billing work through dynamic invoice creation, automatic calculations, PDF generation, payment QR integration, and local invoice management.",

      highlights: [
        "Dynamic customer and item entry with quantity and pricing",
        "Automatic invoice numbering and invoice record management",
        "Automated GST calculation with CGST and SGST breakdown",
        "Professional A4 PDF invoice generation using jsPDF",
        "Digital payment QR code integration for customer payments",
        "LocalStorage-based invoice saving and retrieval",
      ],

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "jsPDF",
        "QRCode",
        "LocalStorage",
      ],
    },

    {
      id: "digital-business-card",
      type: "LIVE PROJECT",
      title: "Digital Business E-Card",
      organization: "Live Real-World Project",
      duration: "2026",

      description:
        "Designed and developed a live mobile-first digital business card that gives customers quick access to contact details, communication channels, social media, location, website, and sharing functionality from a single web experience.",

      highlights: [
        "Mobile-first responsive interface optimized for customer access",
        "One-tap phone calling and WhatsApp communication",
        "Integrated social media and website access",
        "Google Maps location and navigation access",
        "Native Web Share API with browser sharing support",
        "Live customer-facing digital experience for real-world use",
      ],

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Web Share API",
        "Google Maps",
      ],
    },
  ],

  // Leadership & Initiative Data

  leadershipList:[
  {
    title: "Final-Year Project Team Coordination",
    description:
      "Coordinated a 5-member project team in developing an eye-tracking and machine-learning system to analyze student attention and engagement.",
    role: "Project Team Coordinator",
    badge: "Leadership"
  },

  {
    title: "IEEE Research & Publication",
    description:
      "Contributed to research on predicting student attention and engagement through eye-tracking using machine learning, working collaboratively on implementation, experimentation, and evaluation.",
    role: "Research Contributor",
    badge: "Research",
    link: "https://ieeexplore.ieee.org/abstract/document/11012637",
  },

  {
    title: "Technical Project Ownership",
    description:
      "Took ownership of technical implementation across academic and real-world projects, working across development, integration, debugging, testing, and deployment.",
    role: "Technical Contributor",
    badge: "Ownership"
  },

  {
    title: "Real-World Automation Initiative",
    description:
      "Identified repetitive business workflows and developed practical software solutions focused on automation, usability, and reducing manual effort.",
    role: "Solution Developer",
    badge: "Innovation"
  },

  {
    title: "Collaborative Software Development",
    description:
      "Worked collaboratively on software projects using Git and GitHub, coordinating code changes, integration, debugging, and feature development across different application modules.",
    role: "Software Contributor",
    badge: "Collaboration"
  }
],

  softSkillsList: [
    {
      name: "Problem Solving",
      icon: "🧩",
      desc: "Breaking complex technical problems into practical and maintainable solutions.",
    },
    {
      name: "Communication",
      icon: "💬",
      desc: "Explaining technical ideas clearly and working effectively with others.",
    },
    {
      name: "Adaptability",
      icon: "🔄",
      desc: "Quickly learning new tools, technologies, and workflows when requirements change.",
    },
    {
      name: "Team Collaboration",
      icon: "🤝",
      desc: "Collaborating through shared development workflows, version control, and feedback.",
    },
    {
      name: "Quick Learning",
      icon: "⚡",
      desc: "Continuously exploring modern software, cloud, AI, and development technologies.",
    },
    {
      name: "Logical Thinking",
      icon: "🧠",
      desc: "Using structured reasoning to design workflows and troubleshoot application issues.",
    },
    {
      name: "Time Management",
      icon: "⏱️",
      desc: "Prioritizing tasks and maintaining progress across development requirements.",
    },
    {
      name: "Technical Research",
      icon: "🔎",
      desc: "Researching documentation and technical approaches to solve unfamiliar problems.",
    },
  ],


  projects: [
    {
      id: "ai-ecommerce",
      number: "01",
      badge: "MERN",
      title: "AI-Powered E-Commerce Platform",
      description:
        "A production-ready AI-powered e-commerce platform built using the MERN stack with scalable architecture, secure authentication, cloud database integration, intelligent chatbot functionality, and responsive dashboards.",
      techTags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "JWT",
        "REST API",
        "AI Integration",
        "Git",
        "Prompt Engineering",
      ],
      links: {
        github: null,
        
      },
      isFlagship: true,
    },
    {
      id: "eye-tracking",
      number: "02",
      badge: "AI / ML",
      title: "Learning Behavior Prediction Using Eye Tracking",
      description:
        "An AI-powered learning behavior analysis system using real-time eye tracking to study student attention and engagement while interacting with digital learning content.",
      techTags: [
        "Python",
        "OpenCV",
        "Machine Learning",
        "Computer Vision",
        "WebGazer.js",
        "Flask",
        "CSV",
      ],
      links: {
        github: null,
  
      },
      isFlagship: false,
    },
    {
      id: "bus-management",
      number: "03",
      badge: null,
      title: "College Bus Management System",
      description:
        "A web-based bus booking and management system designed to simplify student transportation booking, route management, seat availability, and administrative operations.",
      techTags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      links: {
        github: null,
      },
      isFlagship: false,
    },
  ],

  realWorldSection: {
    title: "Real-World Solutions",
    subtitle:
      "Practical software built around real-world requirements, automation, and customer-facing digital experiences.",
    description:
      "These projects go beyond academic demonstrations and focus on solving practical requirements through usable software.",
  },

  realWorldProjects: [
    {
      id: "invoice-generator",
      number: "01",
      badge: "AUTOMATION",
      title: "Automated Invoice Generator & Management System",
      type: "Real-World Automation Project",
      description:
        "A browser-based invoice automation system that generates professional PDF invoices with customer information, itemized billing, GST calculations, payment QR integration, and locally stored invoice records.",
      techTags: [
        "HTML",
        "CSS",
        "JavaScript",
        "jsPDF",
        "QRCode",
        "LocalStorage",
        "PDF Generation",
        "GST Calculation",
        "UPI Integration",
      ],
      highlights: [
        "Automated professional invoice generation",
        "Dynamic product and billing item management",
        "Automatic GST calculations",
        "A4 PDF generation",
        "Digital payment QR integration",
        "Local invoice storage and retrieval",
        "Automatic invoice numbering",
      ],
      links: {
        github: null,
        demo: null,
      },
      isLive: false,
    },
    {
      id: "digital-business-card",
      number: "02",
      badge: "LIVE",
      title: "Digital Business E-Card",
      type: "Live Real-World Project",
      description:
        "A mobile-first digital business card developed for real-world usage, providing instant access to contact information, WhatsApp, social media, location, website, and one-tap sharing functionality.",
      techTags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "WhatsApp Integration",
        "Social Media Integration",
        "Web Share API",
        "Google Maps",
      ],
      highlights: [
        "Mobile-first responsive digital card",
        "One-tap calling and WhatsApp access",
        "Social media and website integration",
        "Location and map access",
        "Native Web Share API support",
        "Customer-facing live digital experience",
      ],
      links: {
        github: null,
        demo: null,
      },
      isLive: true,
    },
  ],

  certificates: {
    featured: [
      {
        name: "IBM Full Stack Software Developer",
        issuer: "IBM",
        icon: "🏆",
      },
      {
        name: "AWS Academy Graduate",
        issuer: "AWS Academy",
        icon: "☁️",
      },
      {
        name: "Eye Tracking Fundamentals",
        issuer: "Eye Tracking / Academic Project",
        icon: "👁️",
      },
      {
        name: "Merit Scholarship",
        issuer: "Academic Achievement",
        icon: "🎓",
      },
    ],
    viewAllUrl: "#contact",
  },

  footerContent: {
    taglines: [
      "Building scalable software.",
      "Engineering with cloud, AI, and automation.",
    ],
    credential: "Software Engineer · Full Stack Developer",
    copyright: "© 2026 Lokeshwaran V. All rights reserved.",
  },

  contentCreation: {
    badge: "Beyond Code",
    heading: "Technology & Creativity",
    description:
      "I enjoy exploring technology, building digital experiences, and continuously learning modern development tools.",
    categories: [
      {
        icon: "💻",
        stats: "BUILD",
        title: "Software Projects",
        description:
          "Practical software projects across full-stack development, AI, cloud, and automation.",
      },
      {
        icon: "🚀",
        stats: "LEARN",
        title: "Technology Exploration",
        description:
          "Exploring modern developer tools, AI workflows, cloud technologies, and engineering practices.",
      },
    ],
  },

  emailjsConfig: {
    publicKey: "rwsYWuMA3s-UPUdDO",
    serviceId: "service_l1ero7a",
    templateId: "template_asc094v",
  },

  education: [
    {
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      institution: "Kumaraguru College of Technology",
      duration: "2022 - 2025",
      location: "Coimbatore, Tamil Nadu",
      performance: "80% Academic Performance",
    },
    {
      degree: "Diploma - Computer Science and Engineering",
      institution: "Nanjiah Lingammal Polytechnic College",
      duration: "2019 - 2022",
      location: "Tamil Nadu",
      performance: "96% Academic Performance",
    },
  ],

  research: [
    {
      title:
        "Predicting Student Attention and Engagement Through Eye-Tracking Using Machine Learning",
      publication: "IEEE ICAECA 2025",
      year: "2025",
      type: "IEEE Conference Publication",
      authors: "5 Authors",
      description:
        "Research work focused on predicting student attention and engagement using eye-tracking data, computer vision, preprocessing techniques, and machine learning models.",
      technologies: [
        "WebGazer.js",
        "Computer Vision",
        "Machine Learning",
        "Data Preprocessing",
        "Behavior Analysis",
      ],
      link: "https://ieeexplore.ieee.org/abstract/document/11012637",
    },
  ],

  achievements: [
    {
      title: "IEEE Research Publication",
      description:
        "Published research work on student attention and engagement prediction using eye tracking and machine learning.",
    },
    {
      title: "Continuous Merit Scholarship",
      description:
        "Recognized with merit scholarship for continuous academic performance.",
    },
  ],

  careerGoal: {
    title: "Cloud-Native Software Engineer",
    description:
      "My long-term goal is to work on scalable cloud-native systems by combining software engineering, cloud infrastructure, automation, and AI technologies.",
  },

  contact: {
    email: "lokeshvb30000@gmail.com",
    linkedin: "https://www.linkedin.com/in/lokeshwaran-v-53777b253/",
    github: "https://github.com/Mr-Lokeshvb",
  },

  footer: {
    tagline:
      "Building scalable software with engineering, cloud, AI, and automation.",
  },

  emailJS: {
    publicKey: "rwsYWuMA3s-UPUdDO",
    serviceId: "service_cotyj78",
    templateId: "template_asc094v",
  },
};

/*
 * Compatibility exports for the existing React components.
 * The components in this project use named imports.
 */

export const personalInfo = portfolioData.personalInfo;
export const socialLinks = portfolioData.socialLinks;
export const heroContent = portfolioData.heroContent;
export const aboutContent = portfolioData.aboutContent;
export const technicalSkills = portfolioData.technicalSkills;
export const skillsContent = portfolioData.skillsContent;
export const internshipsList = portfolioData.internshipsList;
export const softSkillsList = portfolioData.softSkillsList;
export const leadershipList = portfolioData.leadershipList;
export const projects = portfolioData.projects;
export const realWorldSection = portfolioData.realWorldSection;
export const realWorldProjects = portfolioData.realWorldProjects;
export const certificates = portfolioData.certificates;

// export const workExperience = portfolioData.workExperience;

export const footerContent = portfolioData.footerContent;
export const contentCreation = portfolioData.contentCreation;
export const emailjsConfig = portfolioData.emailjsConfig;

export default portfolioData;
