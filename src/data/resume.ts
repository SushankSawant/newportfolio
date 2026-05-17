export const personal = {
  name: "Sushank Sawant",
  title: "Front-End Web Developer",
  tagline: "I build fast, scalable, and beautiful web experiences.",
  location: "Mumbai, Maharashtra",
  email: "sushanksawant24@gmail.com",
  phone: "9702602182",
};

export const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "TypeScript", "SCSS"],
  "Frameworks & Libraries": [
    "React.js", "Next.js", "Redux", "Zustand",
    "TanStack Query", "React Legend-State", "Bootstrap",
    "Chart.js", "Axios", "Floating UI", "Framer Motion",
  ],
  "APIs & Integration": [
    "REST APIs", "WebSocket", "Google Maps API", "Leaflet Maps",
  ],
  "Tools & Platforms": ["VS Code", "Chrome DevTools", "Figma", "Git", "GitHub"],
  "Core Competencies": [
    "Responsive Design", "Component Architecture", "State Management",
    "Performance Optimization", "Real-time Data Visualization",
    "Code Analysis & Refactoring", "Lazy Loading", "Local Storage & Encryption",
  ],
};

export const experience = [
  {
    company: "Ease My AI",
    role: "Front-End Web Developer",
    period: "November 2024 – Present",
    location: "Mumbai, India",
    bullets: [
      "Developed responsive web interfaces using React.js, TypeScript, HTML, and SCSS for multiple enterprise applications.",
      "Built reusable, dynamic components and scalable frontend architecture following DRY principles.",
      "Integrated REST APIs and WebSocket connections with Axios for seamless real-time data fetching.",
      "Implemented data visualizations with Chart.js and interactive maps using Google Maps API and Leaflet.",
      "Optimized application performance through lazy loading, code refactoring, and tree shaking.",
      "Analyzed and enhanced existing codebases while collaborating with senior developers on architecture.",
    ],
  },
];

export const projects = [
  {
    title: "Video Management System",
    company: "Ease My AI",
    tech: ["React.js", "WebSocket", "Chart.js", "Google Maps API", "Leaflet", "React Legend-State"],
    description:
      "Enterprise-grade video surveillance management platform with real-time dashboards and interactive map-based device management.",
    bullets: [
      "Created a live-updating chart dashboard displaying real-time data from WebSocket, visualizing system metrics and video device details.",
      "Integrated Google Maps and Leaflet with a hierarchical location system (location → premise → floor) and polygon mapping.",
      "Developed interactive camera placement with custom icons (PTZ, fisheye, bullet) and live view popups on marker click.",
      "Engineered ROI and LOI drawing functionality on camera feeds for AI-based computer vision applications.",
    ],
  },
  {
    title: "Logistics Dashboard",
    company: "Ease My AI",
    tech: ["React.js", "TypeScript", "Performance Optimization", "Lazy Loading"],
    description:
      "Complex enterprise logistics dashboard with interdependent calculation tables and full frontend performance overhaul.",
    bullets: [
      "Designed calculation-based table dashboards with interdependent manual input fields and automated totals.",
      "Led frontend revamp and optimization efforts, refactoring code to follow DRY principles.",
      "Implemented lazy loading for production optimization with deep understanding of tree shaking and bundle optimization.",
    ],
  },
  {
    title: "Marketplace Platform",
    company: "Ease My AI",
    tech: ["React.js", "Context API", "Local Storage", "Encryption", "React Legend-State"],
    description:
      "Full-featured marketplace platform with secure authentication, global state management, and reusable component architecture.",
    bullets: [
      "Developed core reusable components with emphasis on dynamic functionality and maximum reusability.",
      "Implemented global Context API for centralized state management preserving user login details.",
      "Integrated secure local storage with encryption for persistent user authentication and data privacy.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Commerce",
    institution: "Mumbai University",
    period: "2021 – 2024",
  },
  {
    degree: "Higher Secondary Certificate (H.S.C.)",
    institution: "Maharashtra State Board",
    period: "2019 – 2021",
  },
  {
    degree: "Secondary School Certificate (S.S.C.)",
    institution: "Maharashtra State Board",
    period: "2019",
  },
];
