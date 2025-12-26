const jobExperience = [
  {
    company: "National Central University",
    position: "Researcher",
    duration: "Sep 2025 - Present",
    description: [
      "Developed an AI-based model to predict user-associated keywords from EEG brainwave data when viewing visual stimuli.",
      "Implemented and optimized data pipelines using Python for EEG signal classification.",
      "Enhanced the model to support bilingual brainwave data for cross-linguistic prediction and analysis.",
    ],
    employmentType: "Internship",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiZr78X8FXFt2rJ4THv6H2063G-YOrxH_pQ&s",
    location: "Taoyuan, Taiwan",
  },
  {
    company: "MYORDER INTELLIGENCE CO., LTD.",
    position: "Software Engineer",
    duration: "May 2025 - Aug 2025",
    description: [
      "Owned full lifecycle—gathered requirements, designed workflows with ADAPT blueprints, implemented APIs and schema, and applied TDD—following XP and Agile for iterative delivery.",
      "Architected and developed a full-stack HRMS using Angular, NestJS, and PostgreSQL, featuring management tools, JWT authentication, Google OAuth login, and email automation via SendGrid.",
      "Streamlined backend–frontend collaboration by documenting workflows, clarifying request/response contracts, and ensuring smooth integration across services.",
    ],
    employmentType: "Internship",
    picture:
      "https://cdn-1.webcatalog.io/catalog/myorder/myorder-icon-filled-256.png?v=1714780307722",
    location: "Bangkok, Thailand",
  },
  {
    company: "FUTURE SKILL CO., LTD.",
    position: "Software Engineer",
    duration: "Feb 2025 - May 2025",
    description: [
      "Developed a role-based access system for a B2B Learning Management System, reducing administrative overhead and improving onboarding speed.",
      "Developed multi-language support using i18n, enabling international users across 200+ companies to interact with the LMS in their preferred language.",
      "Contributed to CI/CD pipelines with GitHub Actions for automated testing and deployment, following an Agile development lifecycle to enable iterative delivery and continuous improvement.",
    ],
    employmentType: "Internship",
    picture:
      "https://media.licdn.com/dms/image/v2/D560BAQHIQdclkGuWwQ/company-logo_200_200/company-logo_200_200/0/1682226805577/futureskill_logo?e=2147483647&v=beta&t=Z8AI2mE3_cerbsqNlVJP3ZOzbISALhKZpQTr-zc2jOU",
    location: "Bangkok, Thailand",
  },
];

const education = {
  school: "Kasetsart University",
  degree: "Bachelor's Degree in Computer Science",
  duration: "2022 - 2026",
  gpax: "3.46 / 4.00",
  courses: [
    "Data Structures and Algorithms",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Development",
    "Agile and DevOps",
    "Artificial Intelligence",
    "Machine Learning",
    "Mobile Application Development",
    "Cloud Computing",
    "Computer Architecture",
  ],
  description: [
    "Active member of the Computer Science Lab, participating in research projects and academic activities related to computer science.",
    "Achieved semi-finalist status in the 2024 National Software Contest (NSC), organized by the Ministry of Higher Education, Science, Research and Innovation (MHESI) of Thailand.",
    "Recipient of a scholarship to attend an international cooperative program at National Central University in Taiwan for one semester.",
  ],
  picture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfJWYQ2CPlhNZaEk3SMAQluD0_fUwdTHWEw&s",
};

const certs = [
  {
    title: "Microservices Architecture",
    previewPath: "/data/certs/microservices.png",
    provider: "FutureSkill",
    year: "2025",
    skillTag: ["Microservices Design", "API Gateway", "System Design"],
    color: "blue",
  },
  {
    title: "Complete Guide to Kubernetes",
    previewPath: "/data/certs/kubernetes.png",
    provider: "FutureSkill",
    year: "2025",
    skillTag: ["Kubernetes Cluster", "Docker Orchestration", "Linux"],
    color: "cyan",
  },
  {
    title: "Hands-On DevOps",
    previewPath: "/data/certs/devops.png",
    provider: "FutureSkill",
    year: "2025",
    skillTag: ["CI/CD Pipelines", "Monitoring & Logging", "Docker Hub"],
    color: "purple",
  },
  {
    title: "Advance Topic Beyond DevOps",
    previewPath: "/data/certs/advdevops.png",
    provider: "FutureSkill",
    year: "2025",
    skillTag: ["Message Brokers", "IaC", "DevSecOps"],
    color: "magenta",
  },
  {
    title: "Docker for Real World Projects",
    previewPath: "/data/certs/docker.png",
    provider: "FutureSkill",
    year: "2025",
    skillTag: ["Containerization", "Docker Compose", "Optimization"],
    color: "blue",
  },
];

const projects = [
  {
    name: "Financial Literacy Platform",
    description:
      "AI-driven investment ecosystem providing real-time market analysis and automated news synthesis via Google Gemini.",
    repo: [
      {
        name: "Next.js",
        link: "https://github.com/itsaofpx/fp-financial-web",
      },
      {
        name: "NestJS",
        link: "https://github.com/itsaofpx/fp-financial-app",
      },
      {
        name: "Python",
        link: "https://github.com/itsaofpx/fp-financial-api",
      },
    ],
    features: ["Gemini AI", "News Scraping", "Google OAuth"],
    year: "2025",
    picturePath: "/data/projectpreview/FinancialLiteracy.png",
    primaryColor: "blue",
  },
  {
    name: "Booking Stadium App",
    description:
      "Mobile-first reservation system facilitating real-time booking, in-app transactions, and GPS-based venue navigation.",
    repo: [
      { name: "Flutter", link: "https://github.com/itsaofpx/Mobile-Project" },
    ],
    features: ["Firebase", "Maps API", "UI/UX Design"],
    year: "2025",
    picturePath: "/data/projectpreview/BookingStadium.png",
    primaryColor: "cyan",
  },
  {
    name: "Drink and Groove",
    description:
      "Scalable digital venue platform streamlining nightlife operations through automated booking, social integration, and async processing.",
    repo: [
      {
        name: "Next.js",
        link: "https://github.com/itsaofpx/se-project-frontend",
      },
      {
        name: "Go Fiber",
        link: "https://github.com/itsaofpx/se-project-backend",
      },
    ],
    features: ["RabbitMQ", "PostgreSQL", "Clean Arch"],
    year: "2024",
    picturePath: "/data/projectpreview/DrinkAndGroove.png",
    primaryColor: "purple",
  },
  {
    name: "Wholesale Marketplace",
    description:
      "Scalable wholesale solution with real-time inventory, built using Agile methodologies and CI/CD automation.",
    repo: [
      {
        name: "Next.js",
        link: "https://github.com/itsaofpx/472-S-Wholesale-BusinessFrontend-6510450691",
      },
      {
        name: "Go Fiber",
        link: "https://github.com/itsaofpx/472-S-Wholesale-BusinessBackend-6510450691",
      },
    ],
    features: ["E-Commerce", "CI/CD", "Agile Methodologies"],
    year: "2024",
    picturePath: "/data/projectpreview/Wholesale.png",
    primaryColor: "green",
  },
  {
    name: "Event Management System",
    description:
      "MVC-based event system featuring team chat and polymorphic role management, built for scalability using modular design patterns.",
    repo: [
      {
        name: "Java",
        link: "https://github.com/CS211-661/cs211-661-project-a-pang",
      },
    ],
    features: ["MVC Architecture", "Role-Based Access", "OOP Principles"],
    year: "2023",
    picturePath: "/data/projectpreview/JavaEvent.png",
    primaryColor: "magenta",
  },
];

export { certs, education, jobExperience, projects };
