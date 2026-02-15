import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from '@primer/octicons-react'
import { LuGithub, LuPencil, LuLinkedin, LuRss } from "react-icons/lu";
import { FaXTwitter,FaGamepad } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";
import { SiPhp, SiDart, SiLatex, SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, SiLangchain, SiFlutter, SiPandas, SiNumpy, SiJupyter, } from 'react-icons/si';
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiFastapi, SiKubernetes } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import {
  TbBrandCpp, TbBrandTypescript,
  TbBrandGolang, TbBrandNextjs,
  TbBrandDjango, TbBrandDocker, TbBrandMysql,
  TbMarkdown, TbBrandAstro, TbBrandTerraform,
  TbPhotoSquareRounded
} from "react-icons/tb";

const config: Config = {
  avatar: '/ayushi-profile.jpeg',
  title: "Ayushi Kundu | Computer Science Student | Full-Stack Developer & AI/ML Enthusiast",
  description: "Computer Science undergraduate from Kolkata with expertise in full-stack development, backend systems, and AI/ML applications. Two-time national hackathon finalist.",
  author: "Ayushi Kundu",
  keywords: ["Ayushi Kundu", "Full-Stack Developer", "Backend Developer", "AI/ML Engineer", "Computer Science", "Kolkata"],
  status: "CS Undergraduate | Full-Stack & AI/ML Developer ⚡️",
  siteURL: "https://ayushikundu.com/",
  openGraph: {
    url: "https://ayushikundu.com/",
    type: "website",
    siteName: "Ayushi Kundu | Computer Science Student | Full-Stack Developer & AI/ML Enthusiast",
    title: "Ayushi Kundu | Computer Science Student | Full-Stack Developer & AI/ML Enthusiast",
    description:"Computer Science undergraduate from Kolkata with expertise in full-stack development, backend systems, and AI/ML applications. Passionate about building scalable solutions and winning hackathons. Two-time national hackathon finalist with hands-on experience in React.js, Node.js, Python, and GenAI technologies.",

  },
  navItems: [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    {path: '/contact', label: 'Contact'},
  ],
  socialLinks: [
    { url: `https://github.com/ayushikundu5`, icon: LuGithub, name: 'GitHub' },
    { url: `https://www.linkedin.com/in/ayushikundu`, icon: LuLinkedin, name: 'LinkedIn' },
    { url: `mailto:ayushikundu5@gmail.com`, icon: MdEmail, name: 'Email' },
    { url: `/cv.pdf`, icon: MdAttachment, name: 'Resume' },
  ],
  about: {
    "firstName": 'Ayushi',
    "lastName": 'Kundu',
    "middleName": "",
    "preferredName": "",
    "additionalName": "",
    "pronouns": 'She/Her',
    "githubUsername": "ayushikundu5",
    "introduction": `
Hi, I'm Ayushi Kundu, a Computer Science undergraduate with proven expertise in full-stack development, backend systems, and AI/ML applications 🚀.

I have a demonstrated track record of delivering scalable solutions across web applications, admin dashboards, and intelligent systems in high-pressure hackathon environments. As a **two-time national hackathon finalist**, I've built innovative projects ranging from solar-powered de-watering systems to AI-powered legal assistants 🏆.

With hands-on experience in React.js, Node.js, Python, and GenAI/Agentic AI technologies, I'm passionate about driving innovation and delivering impactful solutions. I'm seeking opportunities in software engineering, backend development, or AI/ML engineering to continue pushing boundaries 💡.

**Team Leader • Problem Solver • Innovation Driven 👩🏻‍💻**
    `,
  "lifestyles": [
    {
      "icon": LuGithub,
      "title": "Open Source Enthusiast",
      "text": "Committed to building innovative solutions and contributing to the developer community through meaningful projects."
    },
    {
      "icon": LuPencil,
      "title": "Continuous Learner",
      "text": "Always exploring new technologies and staying updated with the latest trends in full-stack development and AI/ML."
    },
    {
      "icon": GoalIcon,
      "title": "Hackathon Competitor",
      "text": "Two-time national finalist with a passion for competitive programming and building solutions under pressure."
    },
    {
      "icon": TbPhotoSquareRounded,
      "title": "Creative Developer",
      "text": "Blending technical expertise with creative problem-solving to build user-centric applications."
    }
  ],

  "techStacks": {
    programmingLanguages: [
      { name: 'Python', icon: AiOutlinePython },
      { name: 'Java', icon: RiJavaLine },
      { name: 'C', icon: TbBrandCpp },
      { name: 'JavaScript', icon: RiJavascriptLine },
      { name: 'SQL', icon: TbBrandMysql },
    ],
    frameworks: [
      { name: 'React.js', icon: FaReact },
      { name: 'Node.js', icon: TbBrandNextjs },
      { name: 'HTML/CSS', icon: TbMarkdown },
      { name: 'Machine Learning', icon: SiTensorflow },
      { name: 'GenAI', icon: SiPytorch },
      { name: 'Git', icon: LuGithub },
    ]
  }

  },
  resume: {
    "educations": {
      "icon": IoSchoolOutline,
      "title": "Education",
      "items": [
        {
          company: "Techno International Newtown",
          location: "Kolkata, India",
          role: "Bachelor of Technology – Computer Science and Engineering",
          duration: "Expected Graduation: 2027",
          tasksMarkdown: `
- Currently pursuing B.Tech in Computer Science and Engineering
- Focus areas: Full-Stack Development, Backend Systems, AI/ML Technologies
- Active participant in hackathons and coding competitions
- Strong academic performance with hands-on project experience
`,
        },
        {
          company: "Barasat Indira Gandhi Memorial High School",
          location: "West Bengal, India",
          role: "Higher Secondary Education (XII)",
          duration: "Completed",
          tasksMarkdown: `
- Successfully completed higher secondary education
- Strong foundation in Mathematics and Computer Science
`,
        },
      ],
    },
    "awardLeaderships": {
      "icon": PiTrophy,
      "title": "Hackathon Achievements",
      "items": [
        {
          company: "Smart India Hackathon 2025 🏆",
          location: "National - India",
          role: "Team Leader - NATIONAL FINALIST (Hardware Category)",
          duration: "2025",
          tasksMarkdown: `
**Project:** Suryadut – Solar De-watering System for Mining Operations

**🏆 ACHIEVEMENT: NATIONAL FINALIST** - Secured finalist position among thousands of competing teams across India

**My Role & Contributions:**
- Led cross-functional team in designing innovative solar-powered water removal system for mining operations
- Reduced dependency on diesel-based systems by 80% through renewable energy integration
- Managed complete project lifecycle: planning, technical execution, stakeholder coordination, and final presentation
- Coordinated with team members to deliver a working prototype with real-world impact

**Live Demo:** [https://fancy-gumption-ec4362.netlify.app/](https://fancy-gumption-ec4362.netlify.app/)

**Technologies:** Solar Power Systems, IoT Sensors, Real-time Monitoring, Hardware Integration
        `,
        },
        {
          company: "VibeState National Hackathon 2025 🏆",
          location: "National - India",
          role: "ML & Backend Developer - NATIONAL FINALIST (Software Category)",
          duration: "2025",
          tasksMarkdown: `
**Project:** Digital Justice – AI-Powered Legal Assistant

**🏆 ACHIEVEMENT: NATIONAL FINALIST** - Recognized among top teams nationally for innovation in AI-powered legal tech

**My Role & Contributions:**
- Developed advanced machine learning models processing case statements, evidence, and legal arguments from multiple parties
- Generated data-driven verdict recommendations using state-of-the-art NLP techniques
- Implemented robust backend logic and AI pipelines for real-time natural language processing of complex legal documents
- Integrated ML models seamlessly with application infrastructure for instant analysis and insights
- Built scalable API architecture to handle concurrent legal document processing

**Technologies:** Python, Machine Learning, NLP, Deep Learning, Backend APIs, AI Pipelines

**Note:** *This revolutionary AI system assists in legal decision-making by analyzing case evidence and providing data-driven recommendations to support the judicial process.*
        `,
        },
        {
          company: "Tutedude Hackathon 2025",
          location: "India",
          role: "Frontend & Database Developer",
          duration: "2025",
          tasksMarkdown: `
**Project:** Rawmart – Gamified Commerce Platform for Wholesale Trading

**My Role & Contributions:**
- Designed and implemented comprehensive data structures for a dynamic wholesale-vendor bidding platform
- Enabled real-time price negotiations and automated deal management system
- Developed responsive frontend components supporting complex vendor bidding mechanisms based on pricing preferences
- Created conditional deal parameters with smart database management for optimal performance
- Built comprehensive dataset preparation pipeline and implemented efficient database indexing

**Live Platform:** [https://rawmart.onrender.com](https://rawmart.onrender.com)

**Technologies:** React.js, Node.js, Database Design, Real-time Bidding System, Frontend Development

**Impact:** Platform enables vendors to compete transparently, reducing procurement costs by up to 30% for businesses
        `,
        },
      ],
    },
    "teachingExperiences": {
      "icon": PiBooks,
      "title": "Technical Skills & Competencies",
      "items": [
        {
          "company": "Programming Languages",
          "location": "",
          "role": "Core Technical Skills",
          "duration": "",
          "tasksMarkdown": `
**Languages:**
- Python, Java, C, JavaScript, SQL

**Frontend Technologies:**
- React.js, HTML, CSS, Responsive Web Design

**Backend Technologies:**
- Node.js, RESTful API Development, Database Design, Admin Panel Development

**AI/ML Technologies:**
- Machine Learning, Generative AI (GenAI), Agentic AI, PyCharm, NLP

**Development Tools:**
- Git, Version Control, Database Management Systems
        `,
        },
        {
          "company": "Core Competencies",
          "location": "",
          "role": "Professional Skills",
          "duration": "",
          "tasksMarkdown": `
- Full-Stack Development
- Project Analysis & Research
- Team Leadership & Collaboration
- Agile Methodologies
- Technical Communication
- Analytical Problem Solving
- Adaptability in Fast-Paced Environments
        `,
        },
        {
          "company": "Professional Interests",
          "location": "",
          "role": "Areas of Focus",
          "duration": "",
          "tasksMarkdown": `
- Emerging AI Technologies
- Full-Stack Web Development
- Building Scalable Digital Products
- Competitive Hackathons
- Open-Source Contributions
- Innovation in Software Engineering
        `,
        },
      ],
    },
    "professionalExperiences": {
      "icon": MdOutlineDevices,
      "title": "Professional Experience & Projects",
      "items": [
        {
          "company": "Tathagata Sengupta Ventures",
          "location": "Project-Based Engagement",
          "role": "Backend & Admin Developer",
          "duration": "Recent Projects",
          "tasksMarkdown": `
**Muscle Mania Gym - Full-Stack Platform Development**

**Live Site:** [https://musclemanias.in/](https://musclemanias.in/)

- Developed comprehensive full-stack web platform for gym management and member engagement
- Built robust backend infrastructure with admin control panels for complete system oversight
- Implemented member management system, class scheduling, and payment processing
- Created responsive frontend with seamless user experience across all devices
- Optimized database architecture for high-performance queries and data integrity
- Enhanced platform scalability to support growing user base and feature expansion

**Technologies:** Full-Stack Development, Backend APIs, Database Management, Admin Dashboards

---

**Benzomeals - Admin Dashboard Development**

- Architected and implemented comprehensive admin-side functionalities for food delivery platform
- Developed centralized order management system supporting real-time vendor oversight
- Built real-time status tracking with operational monitoring dashboards
- Enhanced platform efficiency by 40% through streamlined administrative workflows
- Implemented intuitive dashboard design for improved user experience

**Technologies:** React.js, Node.js, Real-time Systems, Dashboard Development
          `,
        },
      ],
    },
  },
  "giscusConfig": {
    id: "comments",
    repo: "ayushikundu5/ayushikundu5",
    repoId: "R_kgDOLBatdw",
    category: "General",
    categoryId: "DIC_kwDOLBatd84CjpPs",
    mapping: "pathname",
    term: "Welcome to my portfolio!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  "googleAnalyticId": process.env.NEXT_PUBLIC_GA_ID || '',
  "googleTagManagerId": process.env.NEXT_PUBLIC_GTM_ID || '',
};

export default config;
