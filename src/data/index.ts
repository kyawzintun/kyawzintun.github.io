import type { Project, ExperienceItem, SkillCategory } from "@/types";

export const personalInfo = {
  name: "Kyaw Zin Tun",
  role: "Full Stack Developer",
  location: "Bangkok, Thailand",
  email: "cukyawzintun@gmail.com",
  github: "https://github.com/kyawzintun",
  linkedin: "https://linkedin.com/in/kyawzintun",
  //   twitter: "https://twitter.com/kyawzintun_",
  available: true,
  bio: "I'm a Full Stack Developer with 10+ years of experience designing and building scalable web applications across fintech, banking, and enterprise platforms.",
  bioExtended:
    "Experienced across React, Vue, Angular, and Next.js on the frontend, with Node.js and Spring Boot on the backend. I focus on secure, maintainable, and high-performance applications.",
};

export const stats = [
  { label: "Years of experience", value: "10+" },
  { label: "Frontend & backend", value: "Full stack" },
  { label: "Lighthouse score", value: "95" },
  { label: "Cloud platform", value: "AWS" },
];

export const skills: SkillCategory[] = [
  {
    name: "Languages & Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    name: "Backend & Architecture",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Responsive Design",
      "Strapi CMS",
      "Keycloak",
    ],
  },
  {
    name: "Cloud, DevOps & Data",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Apache Kafka",
    ],
  },
  {
    name: "Libraries & Tools",
    skills: [
      "Redux Toolkit",
      "XState",
      "Backbase",
      "Bootstrap",
      "Figma",
      "Jira",
      "Jasmine",
      "Karma",
      "Agile",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Far East Helpdesk Co., Ltd.",
    role: "Senior Software Engineer",
    period: "Jul 2023 — Jun 2026",
    description:
      "Developed high-traffic transactional web applications across frontend and backend within a microservices architecture.",
    achievements: [
      "Built applications using Vue.js, Nuxt.js, TypeScript, Node.js, Express.js, Redis, RabbitMQ, and MySQL",
      "Led the migration from Nuxt.js 2 to Nuxt.js 3, improving maintainability, scalability, and developer experience",
      "Developed authentication, account management, payment, and transaction APIs",
      "Built reusable UI components and integrated authentication, account, payment, and CMS services",
      "Improved Lighthouse performance scores from approximately 50 to 95",
    ],
  },
  {
    company: "OPN Holdings Co., Ltd.",
    role: "Software Engineer",
    period: "May 2022 — Jun 2023",
    description:
      "Developed production applications across OPN's public website and Toyota Wallet ecosystem.",
    achievements: [
      "Built responsive, multilingual, CMS-driven experiences with Next.js, React, TypeScript, Material UI, and Strapi",
      "Implemented OAuth with PKCE, JWT token, OTP/MFA, registration, recovery, and security update flows",
      "Integrated identity, payment, logging, verification, Mailchimp, Help Scout, and Greenhouse APIs",
      "Developed role- and permission-based back-office interfaces for administration, reporting, and audit workflows",
    ],
  },
  {
    company: "Yoma Bank",
    role: "Senior Developer",
    period: "Nov 2018 — Apr 2022",
    description:
      "Built secure digital business banking and back-office operational systems across frontend and backend services.",
    achievements: [
      "Built the Operations Dashboard from scratch using Angular and TypeScript with a modular frontend architecture",
      "Delivered workflows for lending, invoice financing, payroll, onboarding, client management, audit, transfers, and reporting",
      "Contributed to Java and Spring Boot services using MySQL, Kafka, and Keycloak",
      "Developed business banking experiences with Angular, TypeScript, and Backbase",
    ],
  },
  {
    company: "Amdon Consulting Pte Ltd",
    role: "Frontend Developer",
    period: "Sep 2016 — Oct 2018",
    description:
      "Developed the PageWerkz e-learning and digital publishing platform across administration, authoring, analytics, and distribution.",
    achievements: [
      "Built platform features using Angular, TypeScript, Bootstrap, Node.js, Express.js, and MongoDB",
      "Developed multi-tenant organization, license, administrator, and access-control workflows",
      "Built education administration and interactive digital book authoring and publishing features",
      "Implemented analytics and reporting dashboards for student, content, device, and book activity",
    ],
  },
  {
    company: "Capital Knowledge Myanmar Company Ltd.",
    role: "Web Developer",
    period: "Jun 2015 — Aug 2016",
    description:
      "Developed and maintained a healthcare web platform serving medical professionals.",
    achievements: [
      "Built application features using PHP, Symfony, AngularJS, jQuery, JavaScript, and MySQL",
      "Implemented backend functionality, database operations, and AWS S3 file uploads",
      "Troubleshot issues, fixed bugs, tested functionality, and delivered application enhancements",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "yoma-operation-dashboard",
    title: "Yoma Bank Operations Dashboard",
    description:
      "Built the frontend architecture for a unified banking operations platform and contributed to backend services supporting lending, invoice financing, approvals, transactions, and reporting.",
    tech: [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "Kafka",
      "Kubernetes",
      "Docker",
      "Keycloak",
    ],
  },
  {
    id: "opn-public-website",
    title: "OPN Public Website",
    description:
      "Led major frontend development of OPN's public website, delivering responsive, multilingual, CMS-driven experiences across product, pricing, careers, news, and corporate content.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Strapi",
      "PostgreSQL",
      "AWS S3",
    ],
    live: "https://www.opn.ooo",
  },
  {
    id: "pagewerkz-platform",
    title: "PageWerkz E-learning & Digital Publishing Platform",
    description:
      "Developed a multi-tenant education and digital publishing platform covering organization administration, learning management, interactive book authoring, publishing, analytics, and reporting.",
    tech: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "opn-toyota-wallet",
    title: "OPN / Toyota Wallet",
    description:
      "Developed secure wallet and back-office experiences covering authentication, administration, payment verification, transactions, permissions, reporting, and audit workflows.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "Redux Toolkit",
      "XState",
    ],
  },
  {
    id: "yoma-business-banking",
    title: "Yoma Bank Business Banking",
    description:
      "Developed secure digital business banking experiences across corporate accounts, payments, transactions, lending, authentication, and other business banking services.",
    tech: ["Angular", "TypeScript", "Backbase"],
  },
];
