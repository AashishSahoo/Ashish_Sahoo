// ---------------------------------------------------------------------------
// All content lives here. Edit this file to update the site — nothing else
// needs to change. Replace the placeholder URLs (marked below) with your
// real GitHub / LinkedIn / live-demo links.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ashish Sahoo",
  role: "MERN Stack Developer",
  location: "India",
  phone: "+91-8999081573",
  email: "ashishsahoo0013@gmail.com",
  // TODO: replace with your real profile URLs
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  status: "Open to backend & full-stack opportunities",
  tagline:
    "I build production-grade web apps across the MERN stack — from REST APIs and auth systems to AI-assisted features people actually use.",
  resumeLink:
    "https://drive.google.com/file/d/16huaX0ZjUQ1lfAqdRY6xWI6H0ihVpPqM/view?usp=sharing",
};

export const stats = [
  { value: "1+", label: "years of experience" },
  { value: "2", label: "freelance projects delivered" },
  { value: "50+", label: "LeetCode problems solved" },
  { value: "4", label: "production codebases" },
];
export const skillGroups = [
  {
    id: "frontend",
    title: "frontend",
    importLine: 'import { React, NextJS, Redux } from "frontend"',
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Material UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    title: "backend",
    importLine: 'import { Node, Express, JWT } from "backend"',
    skills: [
      "Node.js",
      "Express.js",
      "Mongoose",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    id: "database",
    title: "database",
    importLine: 'import { Mongo, MySQL } from "database"',
    skills: ["MongoDB", "MySQL"],
  },
  {
    id: "tools",
    title: "tools",
    importLine: 'import { Git, Postman, Vercel } from "tools"',
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
];

export const experience = [
  {
    id: "wbt",
    company: "Waybeyond.tech",
    role: "MERN Stack Developer",
    start: "Jan 2026",
    website: "https://waybeyond.tech",

    end: "Present",
    current: true,
    points: [
      "Contributed to multiple client-facing production projects on the MERN stack, working across React/Redux Toolkit frontend modules and Node.js/Express backend services.",
      "Optimized React components and Node.js APIs for performance and scale; refactored queries and backend logic to cut response times and improve data handling.",
      "Collaborated in an agile workflow — code reviews, debugging production issues, and iterating on features from stakeholder feedback.",
    ],
  },
  {
    id: "tropic",
    company: "Tropic Innovation Pvt. Ltd.",
    role: "Freelance Frontend Developer",
    start: "Oct 2025",
    website: "https://tropicinnovation.com",

    end: "Dec 2025",
    current: false,
    points: [
      "Delivered 2 production-ready React applications for healthcare and retail clients within 8 weeks.",
      "Implemented responsive UI with Material UI and integrated RESTful APIs end-to-end.",
    ],
  },
  {
    id: "bluebricks",
    company: "Blue Bricks",
    role: "Frontend Developer Intern",
    start: "Sep 2024",
    website: "https://blue-bricks.com",

    end: "Apr 2025",
    current: false,
    points: [
      "Built 15+ reusable JS/TS components used across multiple product features.",
      "Centralized Axios interceptors, eliminating 100+ lines of duplicate code across 12+ API integrations.",
      "Manually tested 15+ components, resolving 20+ UI and functional defects via browser DevTools.",
    ],
  },
];

export const projects = [
  {
    id: "food-ordering",
    file: "food-ordering-app.tsx",
    title: "Online Food Ordering Application",
    type: "Full-Stack MERN",
    description:
      "A food delivery platform with role-based access for Admins, Restaurant Owners, and Users, built end-to-end on the MERN stack.",
    points: [
      "Architected role-based auth (Admin / Restaurant Owner / User) with OTP-based email verification.",
      "Integrated Razorpay for payments, processing 50+ test transactions.",
      "Integrated the DeepSeek R1 model via OpenRouter with prompt engineering to automate FAQ responses, cutting reply time to near-instant.",
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "OpenRouter / DeepSeek R1",
    ],
    liveUrl: "https://mm-frontend-amber-zeta.vercel.app/",
    codeUrl: "https://github.com/AashishSahoo/MealMate-backend-Public-",
  },
  {
    id: "finance-tracker",
    file: "finance-tracker.pwa.tsx",
    title: "Personal Finance Tracking Application",
    type: "Full-Stack MERN · PWA",
    description:
      "A mobile-first, installable Progressive Web App for personal finance management with an AI assistant for spending insights.",
    points: [
      "Built an installable, offline-capable PWA with a native-app feel on small screens.",
      "Designed a theme system with dynamic light/dark mode and custom color schemes.",
      "Integrated an LLM-powered assistant for spending insights, goal recommendations, and natural-language queries over financial data.",
      "Shipped bulk CSV transaction upload with validation, automated weekly/monthly reports, and period-over-period analytics.",
    ],
    tags: ["React", "PWA", "Node.js", "MongoDB", "LLM API", "CSV Ingestion"],
    liveUrl: "https://finoapp-frontend-red.vercel.app/",
    codeUrl: "#",
  },
];

export const education = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    school: "Savitribai Phule Pune University, Pune",
    start: "2022",
    end: "2024",
    score: "CGPA 8.18 / 10",
  },
  {
    id: "bcs",
    degree: "Bachelor of Computer Science (BCS)",
    school: "Savitribai Phule Pune University, Nashik",
    start: "2019",
    end: "2022",
    score: "CGPA 7.82 / 10",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (Science)",
    school: "Maharashtra State Board",
    start: "2018",
    end: "2019",
    score: "70%",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    school: "Maharashtra State Board",
    start: "2016",
    end: "2017",
    score: "83%",
  },
];

export const certifications = [
  {
    id: "leetcode",
    label: "LeetCode 100 Days Badge",
    meta: "2025 · 50+ Problems Solved",
    issuer: "LeetCode",
    url: "https://drive.google.com/file/d/1CLQcbdJZTnBmxXCNrpIwD2euRKtOKv7G/view?usp=drive_link",
  },
  {
    id: "sql",
    label: "SQL Basic",
    meta: "Database Fundamentals",
    issuer: "HackerRank",
    url: "https://drive.google.com/file/d/1EKWs2FDzoTzgCua1MJ4QL5_pVuxUpIGP/view?usp=sharing",
  },
  {
    id: "servicenow",
    label: "ServiceNow Micro-Certification",
    meta: "Workflow Automation",
    issuer: "ServiceNow",
    url: "https://drive.google.com/file/d/1b6dn8iMAeyQtXcczhGY19Q5yaKGFmXSE/view?usp=sharing",
  },
  {
    id: "cybersecurity",
    label: "Introduction to Cybersecurity",
    meta: "Cybersecurity Fundamentals",
    issuer: "Cisco",
    url: "https://drive.google.com/file/d/1wVtOye4-gZ9dbshCPJz1PsyYiEXHxjfj/view?usp=sharing",
  },
];
export const nav = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];
