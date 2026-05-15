import type { Project, ExperienceItem, SkillCategory } from "@/types";

export const personalInfo = {
  name: "Kyaw Zin Tun",
  role: "Senior Software Engineer",
  location: "Bangkok, Thailand",
  email: "cukyawzintun@gmail.com",
  github: "https://github.com/kyawzintun",
  linkedin: "https://linkedin.com/in/kyawzintun",
  //   twitter: "https://twitter.com/kyawzintun_",
  available: true,
  bio: "I'm a Senior Software Engineer with 10+ years of experience building scalable web applications across fintech, banking, healthcare, and e-learning industries.",
  bioExtended:
    "Specialized in React, Vue, Angular, NodeJS, and TypeScript with strong experience in frontend architecture, performance optimization, and enterprise application development.",
};

export const stats = [
  { label: "Years of experience", value: "10+" },
  { label: "FinTech & banking", value: "Enterprise" },
  { label: "Lighthouse score", value: "95" },
  { label: "Frontend frameworks", value: "4+" },
];

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "Vue.js",
      "Nuxt.js",
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "jQuery",
    ],
  },
  {
    name: "UI & Styling",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Material UI",
      "Responsive Design",
      "Figma",
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Java",
      "Spring Boot",
      "Strapi CMS",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    name: "Tools & Infrastructure",
    skills: [
      "Git",
      "Docker",
      "DataDog",
      "Jira",
      "Confluence",
      "Agile",
      "Scrum",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "OPN",
    role: "Software Engineer",
    period: "2022 — 2023",
    description:
      "Built and maintained fintech and payment platform applications using React, Next.js, TypeScript, and Strapi CMS.",
    achievements: [
      "Built the OPN public website from scratch using Next.js and TypeScript",
      "Integrated Strapi CMS for content management and maintainability",
      "Optimized frontend performance and SEO for production applications",
      "Implemented Datadog monitoring for latency tracking and error monitoring",
    ],
  },
  {
    company: "Yoma Bank",
    role: "Senior Frontend Developer",
    period: "2018 — 2022",
    description:
      "Developed secure business banking web applications and internal operational systems for enterprise banking platforms.",
    achievements: [
      "Implemented authentication and authorization flows including 2FA",
      "Built core banking features such as fund transfers and account management",
      "Integrated frontend applications with backend APIs and banking services",
      "Designed frontend architecture and integrated Keycloak authentication",
    ],
  },
  {
    company: "Werkz Technologies",
    role: "Frontend Developer",
    period: "2016 — 2018",
    description:
      "Built and maintained e-learning platforms and responsive web applications using React, Angular, Node.js, and MongoDB.",
    achievements: [
      "Developed responsive applications optimized for desktop and mobile devices",
      "Collaborated with backend teams to integrate RESTful APIs",
      "Worked closely with designers to deliver consistent UI/UX experiences",
      "Provided technical support and troubleshooting for stakeholders and users",
    ],
  },
  {
    company: "Capital Knowledge Myanmar",
    role: "Web Developer",
    period: "2015 — 2016",
    description:
      "Developed healthcare and reservation platform applications using PHP, Symfony, Angular, jQuery, and MySQL.",
    achievements: [
      "Built an online medical case study platform for healthcare professionals",
      "Developed an online reservation system for business operations",
      "Maintained and enhanced legacy applications for better usability",
      "Collaborated with stakeholders on requirements gathering and project planning",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "opn-public-website",
    title: "OPN Public Website",
    description:
      "Built and optimized the public fintech platform using Next.js, TypeScript, and Strapi CMS with a strong focus on SEO, scalability, and frontend performance.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Strapi CMS",
      "Docker",
      "Datadog",
    ],
    live: "https://www.opn.ooo",
  },
  {
    id: "yoma-business-banking",
    title: "Yoma Bank Business Banking",
    description:
      "Developed secure business banking applications with authentication flows, fund transfers, account management, and enterprise frontend integrations.",
    tech: [
      "Angular",
      "TypeScript",
      "Bootstrap",
      "Backbase",
      "Docker",
      "REST APIs",
    ],
  },
  {
    id: "yoma-operation-dashboard",
    title: "Yoma Bank Operation Dashboard",
    description:
      "Designed frontend architecture and developed operational dashboard modules including authentication integration, invoice financing workflows, and internal banking tools.",
    tech: [
      "Angular",
      "TypeScript",
      "Bootstrap",
      "Keycloak",
      "Docker",
      "Jasmine",
    ],
  },
];
