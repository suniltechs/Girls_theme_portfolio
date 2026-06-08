import type { PortfolioData, NavLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

export const portfolioData: PortfolioData = {
  personal: {
    name: "Aria Sharma",
    role: [
      "Full Stack Developer",
      "React Enthusiast",
      "UI/UX Lover",
      "Problem Solver",
    ],
    bio: "A passionate Computer Science student building beautiful, functional web experiences. I love turning ideas into elegant code.",
    location: "India",
    email: "aria@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "/resume.pdf",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop",
    aboutImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop",
    availability: true,
  },
  stats: [
    { label: "Projects Completed", value: 12, suffix: "+" },
    { label: "Technologies", value: 15, suffix: "+" },
    { label: "Cups of Coffee", value: 500, suffix: "+" },
    { label: "GitHub Commits", value: 300, suffix: "+" },
  ],
  skills: {
    frontend: [
      { name: "React", icon: "SiReact", level: 90 },
      { name: "TypeScript", icon: "SiTypescript", level: 85 },
      { name: "Next.js", icon: "SiNextdotjs", level: 80 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 92 },
      { name: "HTML/CSS", icon: "SiHtml5", level: 95 },
      { name: "Framer Motion", icon: "SiFramer", level: 75 },
    ],
    backend: [
      { name: "Node.js", icon: "SiNodedotjs", level: 80 },
      { name: "Express", icon: "SiExpress", level: 78 },
      { name: "MongoDB", icon: "SiMongodb", level: 75 },
      { name: "PostgreSQL", icon: "SiPostgresql", level: 70 },
      { name: "Python", icon: "SiPython", level: 72 },
      { name: "REST APIs", icon: "SiPostman", level: 88 },
    ],
    tools: [
      { name: "Git", icon: "SiGit", level: 90 },
      { name: "Docker", icon: "SiDocker", level: 65 },
      { name: "Figma", icon: "SiFigma", level: 80 },
      { name: "VS Code", icon: "SiVisualstudiocode", level: 95 },
      { name: "GitHub", icon: "SiGithub", level: 90 },
    ],
  },
  projects: [
    {
      title: "ShopSphere",
      description:
        "Full-stack e-commerce platform with cart, auth, payments, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "TaskFlow",
      description:
        "Kanban-style task manager with drag-and-drop, teams, and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80&fit=crop",
      tags: ["React", "TypeScript", "Socket.io"],
      category: "fullstack",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "WeatherNow",
      description:
        "Beautiful weather dashboard with 7-day forecast, maps, and hourly data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80&fit=crop",
      tags: ["React", "OpenWeather API", "Recharts"],
      category: "frontend",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "ChatSpark",
      description:
        "Real-time chat application with rooms, direct messaging, and file sharing.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Genie",
      description:
        "REST API for recipes with search, filtering, ingredient matching, and auth.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80&fit=crop",
      tags: ["Node.js", "Express", "PostgreSQL"],
      category: "backend",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "DevBlog",
      description:
        "Personal developer blog with MDX, dark mode, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&fit=crop",
      tags: ["Next.js", "MDX", "Tailwind CSS"],
      category: "frontend",
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  experience: [
    {
      type: "experience",
      title: "Frontend Developer Intern",
      organization: "TechStartup Pvt Ltd",
      period: "Jun 2024 – Aug 2024",
      description:
        "Built React components, improved performance by 40%, contributed to design system.",
      current: true,
    },
    {
      type: "experience",
      title: "Web Development Freelancer",
      organization: "Self-Employed",
      period: "Jan 2024 – Present",
      description:
        "Built 5+ client websites using React and Next.js with custom CMS integrations.",
    },
    {
      type: "education",
      title: "B.Tech Computer Science",
      organization: "XYZ University",
      period: "2022 – 2026",
      description:
        "CGPA: 8.9 | Relevant: DSA, DBMS, OS, Web Dev, Cloud Computing",
      current: true,
    },
    {
      type: "education",
      title: "Higher Secondary (Class XII)",
      organization: "ABC School",
      period: "2020 – 2022",
      description:
        "Science stream with 94.2% — School topper in Computer Science.",
    },
  ],
  certifications: [
    { name: "Meta Frontend Developer", issuer: "Coursera" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon" },
    { name: "MongoDB Associate Dev", issuer: "MongoDB University" },
    { name: "Google UX Design", issuer: "Google" },
  ],
};
