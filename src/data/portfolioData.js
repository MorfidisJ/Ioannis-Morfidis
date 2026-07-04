// Portfolio Website v2 — "Terminal Glass" Data Source
// High-quality mock data based on the design guide requirements

export const Developer = {
  name: "IOANNIS MORFIDIS",
  role: "CSE Student // Systems Developer // Co-founder",
  status: "CSE Student",
  stack: ["React", "Next.js", "Java", "Tailwind", "Python", "Node.js"],
  currentFocus: "Architecting the unexpected.",
  location: "Ioannina/Thessaloniki // Remote",
  bio: "Computer Science & Engineering student building distributed systems, algorithmic solutions, and liquid-glass interfaces that feel alive.",
  socials: {
    github: "https://github.com/MorfidisJ",
    linkedin: "https://www.linkedin.com/in/ioannis-morfidis-175062342/",
    twitter: "https://x.com/MorfidisJ",
    email: "morfidisioannis@gmail.com"
  }
};

export const ArchiveProjects = [
  {
    id: "01",
    title: "UniMates",
    role: "Co-founder / Lead Developer / CPO",
    subtitle: "Roommate-matching algorithm for university students",
    description: "An intelligent compatibility engine connecting university students with compatible roommates using multi-variable lifestyle and academic algorithms. Scaled to thousands of active students and featured in national media outlets.",
    stack: ["React", "Node.js", "Tailwind", "PostgreSQL"],
    metrics: "→ Featured in National Media",
    year: "2024 – Present",
    link: "https://github.com/UniMatesLabs/unimates-mvp",
    liveUrl: "https://www.unimates.net",
    theme: "from-emerald-500/20 to-teal-900/40",
    accent: "#39FF88"
  },
  {
    id: "02",
    title: "PANTELEOS.NRG",
    role: "Web Developer / Fullstack Engineer",
    subtitle: "Structural engineering & energy systems grid",
    description: "A precision analytics platform designed for civil and structural engineers to calculate energy efficiency and load distribution across large-scale infrastructure projects. Features real-time grid modeling and interactive data telemetry.",
    stack: ["HTML","CSS","JavaScript"],
    metrics: "→ 40% Faster Load Calculations",
    year: "2026",
    link: "https://github.com/MorfidisJ/PANTELEOS.NRG",
    liveUrl: "https://panteleos-nrg.vercel.app",
    theme: "from-amber-500/20 to-orange-900/40",
    accent: "#F6E642"
  },
  {
    id: "03",
    title: "TEDx Mavili Square",
    role: "Web Developer & Designer / Volunteer",
    subtitle: "High-impact event platform & interactive ticketing",
    description: "Architected the digital experience for the annual TEDx Mavili Square conference. Built a high-contrast red-and-black aesthetic with sub-second page loads, real-time speaker schedules, and seamless digital ticket verification for 10,000+ attendees.",
    stack: ["Wordpress", "HTML", "CSS", "JavaScript"],
    metrics: "→ 10k+ Concurrent Visitors",
    year: "2025 – 2026",
    liveUrl: "https://tedxmavilisquare.com/",
    theme: "from-rose-600/20 to-red-950/40",
    accent: "#FF3366"
  }
];

export const TechnicalArsenal = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: "Advanced", context: "Java → 2 years, TA for OOP course at CSE" },
      { name: "JavaScript / TS", level: "Advanced", context: "JS/TS → 2+ years architecting full-stack web apps" },
      { name: "Python", level: "Intermediate", context: "Python → Data structures, algorithms & scientific modeling" },
      { name: "C / C++", level: "Intermediate", context: "C++ → Low-level system programming & memory management" },
      { name: "SQL", level: "Intermediate", context: "SQL → Relational schemas, query optimization & PostgreSQL" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: "Advanced", context: "React → Core frontend engine for reactive user interfaces" },
      { name: "Next.js", level: "Intermediate", context: "Next.js → Server-side rendering, routing & API endpoints" },
      { name: "Tailwind CSS", level: "Advanced", context: "Tailwind → Token-based design systems & custom animations" },
      { name: "Node.js / Express", level: "Intermediate", context: "Node.js → Scalable REST APIs & backend microservices" },
      { name: "Spring Boot", level: "Intermediate", context: "Spring Boot → Enterprise Java architectures & RESTful services" }
    ]
  },
  {
    category: "Tools & Systems",
    skills: [
      { name: "Git / GitHub", level: "Advanced", context: "Git → Version control, CI/CD pipelines & open source collaboration" },
      { name: "Linux / Bash", level: "Advanced", context: "Linux → Terminal automation, bash scripting & server administration" },
      { name: "Docker", level: "Intermediate", context: "Docker → Containerized environments & reproducible deployments" },
      { name: "Figma", level: "Intermediate", context: "Figma → Prototyping, wireframing & design token management" },
      { name: "Postman", level: "Intermediate", context: "Postman → API testing, automated validation & documentation" }
    ]
  }
];

export const AcademiaDetails = {
  institution: "Department of Computer Science & Engineering University of Ioannina",
  degree: "Integrated M.Sc. in Computer Engineering & Informatics",
  status: "Undergraduate / Honors Student",
  focus: "Distributed Systems & Advanced Algorithmic Design",
  highlights: [
    "Teaching Assistant for Object-Oriented Programming (Java)",
    "Co-founder & CPO of UniMates",
    "Active participant in ACM ICPC algorithm programming competitions",
    "Focus areas: Systems Architecture, Computer Networks, Database Systems"
  ]
};

export const TerminalSystemInfo = {
  version: "v2.0.4-build.2026",
  os: "VOID_OS // KERNEL 6.8.0-RT",
  uptime: "99.99% // ALL SYSTEMS OPTIMAL",
  prompt: "guest@morfidis-terminal:~$ "
};

export const ResumeData = {
  filename: "Ioannis-Morfidis-Resume.pdf",
  filesize: "127 KB",
  filetype: "PDF/A (Portable Document Format)",
  lastUpdated: "2026 // LATEST RELEASE",
  summary: "Comprehensive academic, professional, and technical curriculum vitae detailing systems engineering, fullstack architectures, and competitive programming achievements.",
  highlights: [
    { label: "EDUCATION", value: "Integrated M.Sc. Computer Engineering & Informatics (University of Ioannina)" },
    { label: "LEADERSHIP", value: "Co-Founder & CPO @ UniMates (National Media Feature)" },
    { label: "EXPERIENCE", value: "2+ Years Architecting Scalable Full-Stack Systems & Microservices" },
    { label: "ACADEMIA", value: "Teaching Assistant for Java Object-Oriented Programming" }
  ]
};

