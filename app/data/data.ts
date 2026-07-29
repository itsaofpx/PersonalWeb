const jobExperience = [
  {
    company: "Bluebik Group PCL.",
    position: "Software Engineer",
    duration: "Jan 2026 - May 2026",
    description: [
      "Designed normalized PostgreSQL schemas supporting insurance workflow systems used by internal stakeholders",
      "Translated stakeholder requirements into technical specifications, database models, and system workflows",
      "Collaborated with Thai Life Insurance stakeholders to refine requirements and ensure alignment",
    ],
    employmentType: "Internship",
    picture:
      "https://media.licdn.com/dms/image/v2/D560BAQEG_J85qNHm0g/company-logo_200_200/B56ZwoQaiyJoAI-/0/1770201918290/bluebikgroup_logo?e=2147483647&v=beta&t=A-RWynkLl_269F7j1P3VeCtvJg6Fd0NG2fj99lv1LSw",
    location: "Bangkok, Thailand",
  },
  {
    company: "National Central University",
    position: "Researcher",
    duration: "Sep 2025 - Jan 2026",
    description: [
      "Developed an AI-based model to predict user-associated keywords from EEG brainwave data when viewing visual stimuli.",
      "Implemented and optimized data pipelines using Python for EEG signal classification.",
      "Enhanced the model to support bilingual brainwave data for cross-linguistic prediction and analysis.",
    ],
    employmentType: "Exchange",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiZr78X8FXFt2rJ4THv6H2063G-YOrxH_pQ&s",
    location: "Taoyuan, Taiwan",
  },
  {
    company: "MyOrder Co., Ltd.",
    position: "Software Engineer",
    duration: "May 2025 - Aug 2025",
    description: [
      "Owned full lifecycle—gathered requirements, designed workflows with ADAPT blueprints, implemented APIs and schema, and applied TDD—following XP and Agile for iterative delivery.",
      "Architected and developed a full-stack HRMS using Angular, NestJS, and PostgreSQL, featuring management tools, JWT authentication, Google OAuth login, and email automation via SendGrid.",
      "Streamlined backend–frontend collaboration by documenting workflows, clarifying request/response contracts, and ensuring smooth integration across services.",
    ],
    employmentType: "Internship",
    picture:
      "https://play-lh.googleusercontent.com/_q3qzp-eau5rm879Uox1w7N0poIcfsTxzbdrkvJsZFE6DMrKGg_v3CEvasbgY3wOlQ=w240-h480-rw",
    location: "Bangkok, Thailand",
  },
  {
    company: "Future Skill Co., Ltd.",
    position: "Software Engineer",
    duration: "Feb 2025 - May 2025",
    description: [
      "Developed a role-based access system for a B2B Learning Management System, reducing administrative overhead and improving onboarding speed.",
      "Developed multi-language support using i18n, enabling international users across 200+ companies to interact with the LMS in their preferred language.",
      "Contributed to CI/CD pipelines with GitHub Actions for automated testing and deployment, following an Agile development lifecycle to enable iterative delivery and continuous improvement.",
    ],
    employmentType: "Internship",
    picture:
      "https://assets.futureskill.co/business%2Feb269202-7dcc-444f-a692-d1b6701e5960.webp",
    location: "Bangkok, Thailand",
  },
];

const education = {
  school: "Kasetsart University",
  degree: "Bachelor's Degree in Computer Science",
  duration: "2022 - 2026",
  gpax: "3.49 / 4.00",
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
    title: "Certificate of Internship",
    previewPath: "/data/certs/bbik.png",
    provider: "Bluebik Group PCL.",
    year: "2026",
    skillTag: ["Backend Engineer", "Sprint Boot", "Agile Development"],
    color: "Orange",
  },
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
    picturePath: "/data/projectpreview/DrinkandGroove.png",
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

const skillSections = [
  {
    title: "Programming",
    data: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Golang",
      "Dart",
      "C++",
      "C#",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    title: "Frameworks & Tools",
    data: [
      "React",
      "Next.js",
      "Node.js",
      "Angular",
      "NestJS",
      "Fiber",
      "Tailwind CSS",
      "Flutter",
      "AWS",
      "GCP",
      "Docker",
      "PostgreSQL",
      "Postman",
      "Bruno",
      "Figma",
      "Jira",
    ],
  },
  {
    title: "Soft Skills",
    data: [
      "Collaborative Team Player",
      "Agile Practitioner",
      "Excellent Communicator",
      "Analytical Problem Solver",
      "Resilient Performer",
      "Curious Learner",
      "Self-Motivated Improver",
      "Disciplined Professional",
    ],
  },
  {
    title: "Languages",
    data: ["Thai (Native)", "English B2 (Upper-Intermediate)"],
  },
];

const contactData = {
  email: "podjaninaof2@gmail.com",
  phone: "0957759081",
  resumeUrl: "/data/resume/resume.pdf",
};

const aboutData = {
  name: "Podjanin Wachirawittayakul",
  nickname: "Aof",
  role: "Software Engineer",
  photo: "/data/picture/bear.png",
  location: "Bangkok, Thailand",
  availability: "Open to full-time opportunities",
  tagline:
    "A Computer Science graduate who enjoys turning real-world problems into reliable, well-crafted software.",
  summary: [
    "I'm a Computer Science graduate from Kasetsart University with hands-on experience across four professional roles, spanning full-stack engineering, backend systems, and applied AI research. I care deeply about writing clean, maintainable code and delivering features that genuinely make people's work easier.",
    "Throughout my internships I've owned features end-to-end—gathering requirements, designing database schemas, building APIs, and collaborating closely with stakeholders to ship on time. I approach every project with curiosity, a strong sense of ownership, and a commitment to continuous improvement.",
  ],
  highlights: [
    { value: "3.49", label: "GPAX / 4.00" },
    { value: "4", label: "Professional Roles" },
    { value: "5", label: "Featured Projects" },
    { value: "1", label: "Intl. Exchange" },
  ],
  values: [
    {
      icon: "rocket",
      title: "End-to-End Ownership",
      text: "From requirements to deployment, I take full responsibility for the features I build and see them through with care.",
    },
    {
      icon: "team",
      title: "Collaborative & Communicative",
      text: "I document clearly, align early with stakeholders, and thrive in Agile teams where communication keeps everyone moving together.",
    },
    {
      icon: "bulb",
      title: "Curious & Always Learning",
      text: "New frameworks, new domains, new challenges—I lean in. Growth compounds, and I keep investing in it every day.",
    },
    {
      icon: "safety",
      title: "Reliable & Detail-Oriented",
      text: "I value tested, well-structured code and dependable delivery. People can count on the work being done right.",
    },
  ],
  workingStyle: [
    "Comfortable across the stack—React, Next.js, NestJS, Go, and PostgreSQL—with a backend and systems lean.",
    "Practiced in Agile, XP, and TDD, having delivered iteratively within cross-functional teams.",
    "Bilingual and internationally experienced, having studied and researched abroad in Taiwan.",
    "Motivated by meaningful problems and teams that value quality, honesty, and continuous improvement.",
  ],
  seeking:
    "I'm currently seeking a full-time Software Engineer role—ideally backend or full-stack—where I can contribute to a collaborative team, keep growing as an engineer, and help build products that matter. I'm based in Bangkok and open to new opportunities.",
};

const journey = {
  intro:
    "Every role, every move, and every late night has shaped how I build and how I work. Here's the path so far—and where I'm headed next.",
  milestones: [
    {
      period: "2022",
      title: "Started B.S. in Computer Science",
      org: "Kasetsart University",
      location: "Bangkok, Thailand",
      type: "education",
      blurb:
        "Began my Computer Science journey, building strong foundations in algorithms, systems, and software engineering—and finding a genuine love for turning ideas into working software.",
    },
    {
      period: "2024",
      title: "National Software Contest — Semi-Finalist",
      org: "MHESI, Thailand",
      location: "Thailand",
      type: "achievement",
      blurb:
        "Reached semi-finalist status in Thailand's National Software Contest (NSC), an early sign that I could take an idea from concept to a polished, competitive product.",
    },
    {
      period: "Feb – May 2025",
      title: "Software Engineer Intern",
      org: "Future Skill Co., Ltd.",
      location: "Bangkok, Thailand",
      type: "work",
      blurb:
        "Built a role-based access system and multi-language support for a B2B LMS serving 200+ companies, and contributed to CI/CD pipelines within an Agile team.",
    },
    {
      period: "May – Aug 2025",
      title: "Software Engineer Intern",
      org: "MyOrder Co., Ltd.",
      location: "Bangkok, Thailand",
      type: "work",
      blurb:
        "Owned a full-stack HRMS end-to-end using Angular, NestJS, and PostgreSQL—gathering requirements, designing workflows, and applying TDD from the first line of code.",
    },
    {
      period: "Sep 2025 – Jan 2026",
      title: "Research Exchange",
      org: "National Central University",
      location: "Taoyuan, Taiwan",
      type: "exchange",
      blurb:
        "Won a scholarship to study and research abroad, developing an AI model that predicts keywords from EEG brainwave data—my first real step into applied AI and cross-cultural teamwork.",
    },
    {
      period: "Jan – May 2026",
      title: "Software Engineer Intern",
      org: "Bluebik Group PCL.",
      location: "Bangkok, Thailand",
      type: "work",
      blurb:
        "Designed normalized PostgreSQL schemas for insurance workflow systems and translated stakeholder needs into technical specs, collaborating directly with Thai Life Insurance.",
    },
    {
      period: "2026",
      title: "Graduated & Ready for What's Next",
      org: "Open to full-time opportunities",
      location: "Bangkok, Thailand",
      type: "now",
      blurb:
        "Graduated with a 3.49 GPAX and four professional experiences behind me. Now seeking a full-time Software Engineer role where I can keep growing and build things that matter.",
    },
  ],
};

export {
  certs,
  education,
  jobExperience,
  skillSections,
  projects,
  contactData,
  aboutData,
  journey,
};
