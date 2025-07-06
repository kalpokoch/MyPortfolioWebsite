
import { ContactInfo, JobExperience, Skill, Project, Education, Certification } from '../types/portfolio';

export const contactInfo: ContactInfo = {
  name: "Kalpojyoti Koch",
  title: "AI/ML & IoT Systems | Web Developer",
  phone: "+91 8474843928",
  email: "kalpokoch@gmail.com",
  location: "Kokrajhar, Assam 783370",
  github: "https://github.com/kalpokoch",
  linkedin: "https://www.linkedin.com/in/kalpo07/"
};

export const professionalSummary = `AI/ML and IoT Systems professional with 3 years of experience in project coordination, expert in Python and AI-based chatbot development. Key achievements include developing a facial recognition-based attendance system using a custom dataset of 75,000+ facial images, and creating responsive web applications using modern technologies. Experienced in full-stack development, machine learning implementations, and IoT system integration with a strong track record of delivering scalable solutions across various domains.`;

export const experiences: JobExperience[] = [
  {
    id: "suzoco-intern",
    company: "SUZOCO",
    position: "Intern",
    duration: "March 2025 – Present",
    location: "Kokrajhar, Assam",
    description: "Web Development and SaaS products",
    responsibilities: [
      "Developed responsive, high-performance landing page using React, TypeScript, and Vite",
      "Collaborated with design and backend teams for dynamic content integration",
      "Focused on code modularity, reusability, and optimal load time"
    ]
  },
  {
    id: "neepco-intern",
    company: "NEEPCO",
    position: "Intern",
    duration: "July 2024 – August 2024",
    location: "Shillong, Meghalaya",
    description: "Power Generation Company",
    responsibilities: [
      "Created chatbot for Delegation of Power (DOP) regulations",
      "Gained experience in NLP and AI-based chatbot development",
      "Developed efficient response system using Python and ML techniques"
    ]
  }
];

export const skills: Skill[] = [
  // Programming
  { name: "Python", level: 90, category: "programming" },
  { name: "JavaScript", level: 85, category: "programming" },
  { name: "PHP", level: 75, category: "programming" },
  { name: "HTML", level: 95, category: "programming" },
  { name: "CSS", level: 90, category: "programming" },
  
  // Frameworks/Libraries
  { name: "React", level: 85, category: "frameworks" },
  { name: "Laravel", level: 80, category: "frameworks" },
  { name: "Node.js", level: 75, category: "frameworks" },
  { name: "PyTorch", level: 85, category: "frameworks" },
  { name: "Tkinter", level: 70, category: "frameworks" },
  
  // AI/ML
  { name: "Deep Learning", level: 85, category: "ai-ml" },
  { name: "CNN", level: 90, category: "ai-ml" },
  { name: "NLP", level: 80, category: "ai-ml" },
  
  // Tools & Technologies
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Arduino", level: 80, category: "tools" },
  { name: "IoT", level: 85, category: "tools" },
  { name: "Microsoft Office", level: 90, category: "tools" },
  { name: "Adobe Photoshop", level: 75, category: "tools" },
  
  // Methodologies
  { name: "Agile", level: 80, category: "methodologies" }
];

export const projects: Project[] = [
  {
    id: "attendance-system",
    title: "Automated Attendance System using Deep Learning",
    duration: "March 2024 – April 2025",
    organization: "Central Institute of Technology Kokrajhar",
    description: "Facial recognition-based attendance system using Python and PyTorch",
    technologies: ["Python", "PyTorch", "CNN", "MySQL", "Deep Learning"],
    highlights: [
      "Leveraged Convolutional Neural Networks (CNN) for high-accuracy detection",
      "Teachers upload classroom images; system automatically identifies students",
      "Created custom dataset of 75,000+ labeled facial images",
      "Integrated with MySQL database and deployed on server for real-time management",
      "Scalable solution tailored for academic environments"
    ],
    category: "ai-ml"
  },
  {
    id: "home-automation",
    title: "Home Automation System with Gas Detection",
    duration: "October 2024 – May 2025",
    organization: "Central Institute of Technology Kokrajhar",
    description: "Smart home automation prototype using Arduino, GSM module, and sensors",
    technologies: ["Arduino", "GSM Module", "IoT", "Sensors", "C++"],
    highlights: [
      "Remote control of lights and fans via mobile devices",
      "Automatic gas leakage detection triggering ventilation fan",
      "IoT hardware integration with real-time decision logic for safety"
    ],
    category: "iot"
  },
  {
    id: "suzoco-landing",
    title: "Landing Page for SUZOCO Pvt. Ltd",
    duration: "March 2025 – Present",
    organization: "Corporate Client Project",
    description: "Built using React + TypeScript + Vite for performance and scalability",
    technologies: ["React", "TypeScript", "Vite", "CSS3", "Git"],
    highlights: [
      "Visually appealing and responsive UI, SEO and mobile optimized",
      "Team collaboration with Git and GitHub version control"
    ],
    category: "web",
    link: "https://suzocoservices.in/"
  },
  {
    id: "note-taking-app",
    title: "Note-Taking Application",
    duration: "January 2024 – March 2024",
    organization: "Web Application",
    description: "Developed using Laravel and MySQL",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "PHP"],
    highlights: [
      "Implemented user authentication",
      "Clean, responsive UI using Bootstrap and JavaScript"
    ],
    category: "web"
  }
];

export const education: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Central Institute of Technology Kokrajhar (CIT)",
    duration: "2021 – 2025",
    grade: "CGPA: 7.33",
    type: "bachelor"
  },
  {
    id: "higher-secondary",
    degree: "12th Pass in Science Stream",
    institution: "Kokrajhar Government College",
    duration: "2019 – 2021",
    grade: "Percentage: 78%",
    type: "higher-secondary"
  }
];

export const certifications: Certification[] = [
  {
    id: "ai-ml-python",
    title: "AI & Machine Learning using Python",
    issuer: "National Institute of Electronics & Information",
    date: "June-July 2023"
  },
  {
    id: "cca",
    title: "Certificate in Computer Applications (CCA)",
    issuer: "Assam Electronics Development Corporation LTD",
    date: "May-July 2019",
    grade: "Grade 'A'"
  }
];
