import { Project, Skill, Experience, Education, Certification } from './types';

export const NAME = "Sudhanshu Dwivedi";
export const ROLE = "Software Engineer";
export const LOCATION = "Mumbai, India";
export const EMAIL = "dwivedisudhanshu0@gmail.com"; 
export const PHONE = "+91 7977947715"; 
export const GITHUB_LINK = "https://github.com/Sudhanshu0007";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/sudhanshu-dwivedi07/";
export const TWITTER_LINK = "#"; // Not provided in resume
export const RESUME_LINK = "https://drive.google.com/file/d/1QPmIeYY6n0P2Oxp5OYcRV13gZFzBLbis/view?usp=sharing";

export const BIO_POINTS = [
  "Software Engineer with practical experience in full-stack development using Java, Python, Django, React, and SQL databases.",
  "Proficient in developing REST APIs, authentication mechanisms, and responsive user interfaces.",
  "Solid background in backend development and web tech stacks prioritizing scalable and maintainable code.",
  "Served as the leader of the Competitive Coding Club during the 2022-2023 academic year, fostering a collaborative coding community."
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Intern - Full stack Developer',
    company: 'Unovative (Lattee & Logs LLP)',
    period: 'July – August', // Year not specified in snippet, assuming recent based on graduation
    description: [
      'Enhanced storage architecture by shifting from local storage to Firebase Storage for document and image handling.',
      'Fixed backend API defects, improving system stability and reducing runtime errors.',
      'Developed responsive UI components using React/Next.js for production-facing pages.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Resume Analyzer',
    description: 'A modern web application that analyzes resumes using AI to provide ATS (Applicant Tracking System) compatibility scores, actionable insights, and detailed feedback for job seekers.',
    techStack: ['Next.js', 'React', 'Gemini API', 'Tailwind CSS'],
    link: 'https://ai-resume-analyzer-3t7u.vercel.app/',
    githubLink: 'https://github.com/Sudhanshu0007/ai-resume-analyzer'
  },
  {
    id: '2',
    title: 'Apple Vision Pro Clone',
    description: 'Developed a visually immersive clone of the Apple Vision Pro landing page. Features include smooth scroll animations, video backgrounds, and a high-fidelity responsive design replicating the premium user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    link: 'https://sudhanshu0007.github.io/Vision_pro_clone/',
    githubLink: 'https://github.com/Sudhanshu0007/Vision_pro_clone'
  },
  {
    id: '3',
    title: 'CRM using Django',
    description: 'Designed and developed a Customer Relationship Management application with user authentication and role-based access. Implemented CRUD operations for customer data and activity tracking.',
    techStack: ['Python', 'Django', 'SQLite', 'Bootstrap'],
    githubLink: 'https://github.com/Sudhanshu0007/CRM-using-django'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', iconClass: 'devicon-java-plain', category: 'language' },
  { name: 'Python', iconClass: 'devicon-python-plain', category: 'language' },
  { name: 'C', iconClass: 'devicon-c-plain', category: 'language' },
  { name: 'C++', iconClass: 'devicon-cplusplus-plain', category: 'language' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain', category: 'language' },
  { name: 'Django', iconClass: 'devicon-django-plain', category: 'framework' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain', category: 'framework' },
  { name: 'React', iconClass: 'devicon-react-original', category: 'framework' },
  { name: 'HTML/CSS', iconClass: 'devicon-html5-plain', category: 'language' },
  { name: 'SQL', iconClass: 'devicon-mysql-plain', category: 'language' },
  { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain', category: 'language' },
  { name: 'Git', iconClass: 'devicon-git-plain', category: 'tool' },
  { name: 'Figma', iconClass: 'devicon-figma-plain', category: 'tool' },
  { name: 'FastAPI', iconClass: 'devicon-fastapi-plain', category: 'framework' },
  { name: 'Canva', iconClass: 'devicon-canva-original', category: 'tool' },
  {
    name: 'Gemini',
    svg: 'M11.04 1.72a1.36 1.36 0 0 1 1.92 0l2.67 3.03a11.36 11.36 0 0 0 6.64 3.73l3.77.73a1.36 1.36 0 0 1 0 2.68l-3.77.73a11.36 11.36 0 0 0-6.64 3.73l-2.67 3.03a1.36 1.36 0 0 1-1.92 0l-2.67-3.03a11.36 11.36 0 0 0-6.64-3.73l-3.77-.73a1.36 1.36 0 0 1 0-2.68l3.77-.73A11.36 11.36 0 0 0 8.37 4.75l2.67-3.03Z',
    viewBox: '0 0 24 24',
    category: 'tool'
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Sudhanshu Dwivedi's portfolio website. 
Sudhanshu is a Software Engineer based in Mumbai.
His skills include: Java, Python, C, C++, JavaScript, Django, Node.js, React, SQL, PostgreSQL, FastAPI, Git, Canva, and Gemini.
He has internship experience at Unovative (Lattee & Logs LLP) as a Full Stack Developer.
He has worked on projects like an AI Resume Analyzer (Next.js/AI), an Apple Vision Pro Clone (Frontend/GSAP), and a CRM Application (Django).
He led the Competitive Coding Club in 2022-2023.
He holds a Bachelor of Engineering in Computer Engineering (CGPA 8.2/10).
Your goal is to answer questions about Sudhanshu's professional background, skills, and availability in a professional, concise, and friendly manner.
If asked about contact info, provide his email: ${EMAIL}.
Keep answers short (under 50 words) unless asked for details.
`;

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Engineering',
    institution: 'St. John College of Engineering and Management',
    field: 'Computer Engineering',
    year: '2023',
    gpa: '8.2/10'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'Programming with Java',
    issuer: 'Coursera',
    date: '2025',
    credentialUrl: 'https://coursera.org/verify/C7VEDJXBFOK7'
  },
  {
    id: '2',
    title: 'React JS Development',
    issuer: 'GeeksforGeeks',
    date: '2025',
    credentialUrl: 'https://www.geeksforgeeks.org/certificate/860243e9fa65a2f4b4e67d29f13c7660?utm_source=socials&utm_medium=cc_link'
  },

];