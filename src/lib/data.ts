export const SITE = {
  name: "Ronit Dey",
  role: "CS&E Student & Software Engineer",
  email: "ronit.dey@rockets.utoledo.edu",
  phone: "(419) 508-6639",
  location: "Toledo, Ohio",
  address: "2515 W. Bancroft St., Toledo, Ohio",
  github: "https://github.com/RonitDx78",
  githubHandle: "RonitDx78",
  bio: "Computer Science & Engineering student at the University of Toledo with international experience from the University of New Brunswick in Canada. Passionate about building impactful software, real-world space science, and fostering inclusive communities.",
  typedPhrases: [
    "CS&E Student",
    "Python Developer",
    "Java Engineer",
    "NASA Finalist",
    "Asteroid Hunter",
    "Resident Assistant",
    "Problem Solver",
  ],
};

export const STATS = [
  { value: "2", suffix: "", label: "Universities" },
  { value: "3", suffix: "+", label: "Honours" },
  { value: "8", suffix: "+", label: "Technologies" },
  { value: "1", suffix: "yr+", label: "Leadership" },
];

export const SKILLS = {
  languages: [
    { name: "Python", level: 90, color: "#3b82f6" },
    { name: "Java", level: 80, color: "#8b5cf6" },
    { name: "C / C++", level: 75, color: "#06b6d4" },
    { name: "MATLAB", level: 70, color: "#10b981" },
  ],
  tools: [
    { name: "Git & GitHub", icon: "git-branch" },
    { name: "VS Code", icon: "code-2" },
    { name: "MS Excel", icon: "table" },
    { name: "MS Word", icon: "file-text" },
    { name: "MS PowerPoint", icon: "presentation" },
    { name: "Adobe Photoshop", icon: "palette" },
    { name: "Linux / macOS", icon: "terminal" },
    { name: "Jupyter Notebook", icon: "book-open" },
  ],
  soft: [
    "Community Building",
    "Conflict Resolution",
    "Crisis Management",
    "Event Planning",
    "Technical Writing",
    "Team Collaboration",
    "Active Listening",
    "Public Speaking",
  ],
};

export const EXPERIENCE = [
  {
    id: "ra",
    role: "Resident Assistant",
    company: "University of Toledo",
    department: "Presidents Hall",
    location: "Toledo, OH",
    period: "August 2025 – Present",
    current: true,
    description:
      "Serve as the primary point of contact for a residential community, balancing student welfare, policy enforcement, and community development.",
    bullets: [
      "Serve as primary point of contact for residents, addressing concerns related to housing, safety, and community standards across a large residential hall.",
      "Foster an inclusive, supportive environment by designing and executing diverse community-building programs and events in collaboration with Residence Life staff.",
      "Enforce university housing policies and respond professionally to incidents and emergencies, ensuring the well-being and safety of all residents.",
      "Provide academic and personal support referrals, conflict mediation, and resource navigation to residents facing challenges.",
      "Maintain accurate documentation and reports related to resident interactions and incident logs per university protocol.",
    ],
    tags: ["Leadership", "Crisis Management", "Event Planning", "Documentation", "Conflict Resolution"],
    icon: "🏛️",
  },
  {
    id: "cfa",
    role: "Food Service Worker",
    company: "Chick-fil-A",
    department: null,
    location: "Toledo, OH",
    period: "November 2024 – January 2025",
    current: false,
    description:
      "Delivered outstanding customer service in a high-volume fast-food environment, contributing to team efficiency and customer satisfaction.",
    bullets: [
      "Delivered high-quality customer service with a friendly and courteous demeanour, ensuring a positive dining experience for every guest.",
      "Responded promptly and professionally to customer inquiries regarding menu items and special dietary requests.",
      "Maintained strict cleanliness and hygiene standards in dining, kitchen, and storage areas in accordance with health and safety regulations.",
      "Collaborated with team members to ensure efficient service throughput during peak hours with minimal wait times.",
      "Assisted with inventory management, supply stocking, and restocking to maintain operational readiness.",
    ],
    tags: ["Customer Service", "Teamwork", "Inventory Management", "Food Safety"],
    icon: "🍗",
  },
];

export const EDUCATION = [
  {
    id: "utoledo",
    institution: "University of Toledo",
    location: "Toledo, Ohio, USA",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    status: "Current",
    highlights: [
      "Resident Assistant – Presidents Hall",
      "Engineering Career Expo Ambassador",
      "NASA Space Apps Challenge Team Member",
    ],
    description:
      "Pursuing a rigorous CS&E curriculum covering algorithms, data structures, systems programming, software engineering, and applied mathematics. Actively involved in campus leadership and STEM outreach.",
    icon: "🎓",
    flag: "🇺🇸",
  },
  {
    id: "unb",
    institution: "University of New Brunswick",
    location: "Fredericton, New Brunswick, Canada",
    degree: "Bachelor of Science",
    field: "Computer Science",
    status: "Completed",
    highlights: [
      "International Study Experience",
      "Canadian Academic Environment",
      "Cross-cultural Collaboration",
    ],
    description:
      "Gained international academic experience at one of Canada's oldest universities, studying core computer science fundamentals and broadening perspective through exposure to a diverse academic community.",
    icon: "🍁",
    flag: "🇨🇦",
  },
];

export const HONORS = [
  {
    id: "nasa",
    title: "NASA International Space Apps Challenge",
    award: "Divisional Runners Up",
    icon: "🚀",
    color: "from-blue-500 to-indigo-600",
    description:
      "Competed in the NASA International Space Apps Challenge — the world's largest annual global hackathon, spanning 150+ countries — and earned Divisional Runners Up recognition. The team developed an innovative solution addressing a real-world NASA challenge within a 48-hour sprint.",
    details: [
      "Global hackathon spanning 150+ countries and thousands of teams",
      "48-hour sprint solving real NASA-defined challenges",
      "Divisional recognition awarded by NASA-affiliated judges",
      "Demonstrated rapid prototyping and cross-functional teamwork",
    ],
    category: "Competition",
  },
  {
    id: "asteroid",
    title: "International Asteroid Search Collaboration",
    award: "Confirmed Asteroid Detection",
    icon: "🔭",
    color: "from-purple-500 to-violet-600",
    description:
      "Contributed to real scientific discovery as part of the International Asteroid Search Collaboration (IASC) — a citizen science program run under the auspices of NASA's Jet Propulsion Laboratory. Successfully detected and confirmed near-Earth objects from astronomical image data.",
    details: [
      "Citizen science program endorsed by NASA / JPL",
      "Analyzed real telescope imagery for near-Earth objects",
      "Detection confirmed and credited by IASC",
      "Contributed to global asteroid tracking and planetary defense efforts",
    ],
    category: "Research",
  },
  {
    id: "expo",
    title: "Engineering Career Expo",
    award: "Volunteer Ambassador",
    icon: "🤝",
    color: "from-emerald-500 to-teal-600",
    description:
      "Served as a volunteer Ambassador at the University of Toledo's Engineering Career Expo, playing a key role in connecting CS and engineering students with industry recruiters and professionals from leading companies.",
    details: [
      "Guided students through the expo floor and recruiter interactions",
      "Acted as liaison between students and hiring companies",
      "Facilitated career development conversations and networking",
      "Demonstrated commitment to STEM community building",
    ],
    category: "Volunteer",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/honors", label: "Honors" },
  { href: "/contact", label: "Contact" },
];
