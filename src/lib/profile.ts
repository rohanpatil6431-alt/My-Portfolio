export const profile = {
  name: "Rohan Patil",
  firstName: "Rohan",
  roles: [
    "Full-Stack Web Developer",
    "MERN Stack Developer",
    "React.js Engineer",
    "Computer Engineering Graduate",
  ],
  headline:
    "Full-Stack Web Developer (MERN) — React.js • Node.js • MongoDB • Express",
  location: "Pune, Maharashtra, India",
  status: "Open to internships & junior developer roles",
  email: "rohanpatil6431@gmail.com",
  linkedin: "https://www.linkedin.com/in/rohan-patil-7b2280256/",
  github: "https://github.com/rohanpatil6431-alt",
  about: [
    "Computer Engineering graduate (2026) and MERN stack developer who likes building products end to end — from database schema and REST APIs all the way to the last pixel of the interface.",
    "Most of my learning has come from shipping real, non-trivial systems: a WebRTC video conferencing platform with a Socket.io signaling layer, an Airbnb-style marketplace with role-based authorization, and an AI desktop assistant for deaf and mute users that led to a published research paper.",
  ],
  stats: [
    { value: 3, suffix: "+", label: "Full-stack projects shipped" },
    { value: 1, suffix: "", label: "Published research paper" },
    { value: 2026, suffix: "", label: "B.Tech graduation year", raw: true },
  ],
  education: {
    degree: "B.Tech, Computer Engineering",
    school:
      "Dr. Babasaheb Ambedkar Technological University, Lonere – Raigad",
    period: "2022 — 2026",
  },
  publication: {
    title: "AI-Based Hand Recognition for Deaf and Mute Communication",
    venue: "IRJMETS, Vol. 08, Issue 05 — May 2026",
    doi: "10.56726/IRJMETS97303",
    url: "https://doi.org/10.56726/IRJMETS97303",
  },
  skillGroups: [
    {
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Context API",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.io",
        "WebRTC",
        "Passport.js",
        "JWT & bcrypt",
      ],
    },
    {
      title: "Data & Storage",
      items: ["MongoDB", "Mongoose", "SQLite", "Cloudinary", "Multer"],
    },
    {
      title: "AI & Python",
      items: [
        "Python",
        "OpenCV",
        "TensorFlow.js",
        "SpeechRecognition",
        "Eel",
      ],
    },
    {
      title: "Tooling",
      items: ["Git & GitHub", "Postman", "MVC architecture", "Joi", "VS Code"],
    },
  ],
  marquee: [
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "WebRTC",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "OpenCV",
    "TypeScript",
    "Git",
  ],
  projects: [
    {
      title: "Zoom — Video Conferencing Platform",
      period: "Apr 2026 — May 2026",
      tagline:
        "Multi-participant video calls, live chat and screen sharing built on WebRTC mesh topology.",
      bullets: [
        "Socket.io signaling layer handling join-call events, SDP offer/answer exchange, chat broadcast and disconnect cleanup.",
        "WebRTC peer-to-peer media streams with full ICE candidate exchange between participants.",
        "Express REST API on MongoDB storing user profiles and meeting history, with crypto-based tokens and bcrypt hashing.",
        "React frontend with AuthContext for global auth state and a withAuth HOC guarding protected routes.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC"],
      repo: "https://github.com/rohanpatil6431-alt/Zoom-Clone",
      accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    },
    {
      title: "AI Desktop Assistant for Deaf & Mute Users",
      period: "Aug 2025 — May 2026",
      tagline:
        "Final-year mega project: control a computer through face recognition, voice commands and real-time ASL gestures.",
      bullets: [
        "Python + Eel bridge between the backend engine and an HTML/CSS/JS desktop UI, with SQLite for user data.",
        "OpenCV Haarcascade pipeline for passwordless face login — sample collection, training and live inference.",
        "TensorFlow.js Handpose + Fingerpose for client-side ASL hand-sign detection, no server round trip.",
        "Voice layer using SpeechRecognition and pyttsx3, plus system control via pyautogui, pywhatkit and keyboard.",
      ],
      stack: ["Python", "OpenCV", "TensorFlow.js", "Eel", "SQLite"],
      repo:
        "https://github.com/rohanpatil6431-alt/Ai-desktop-assistant-for-deaf-and-mute",
      accent: "from-cyan-500/25 via-sky-500/10 to-transparent",
      badge: "Published research",
    },
    {
      title: "Airbnb-Inspired Marketplace",
      period: "Mar 2026 — Apr 2026",
      tagline:
        "A full listings-and-reviews platform with real-world architecture, auth and authorization.",
      bullets: [
        "Clean MVC separation across models, controllers, routes and views.",
        "Passport.js authentication with role-based authorization — only owners edit listings, only authors delete reviews.",
        "Mongoose references with populate() and cascade deletion of reviews when a listing is removed.",
        "Image uploads via Multer + Cloudinary, Joi validation, centralized error handling and flash messaging.",
      ],
      stack: ["Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary"],
      repo: "https://github.com/rohanpatil6431-alt/Wanderlust",
      accent: "from-emerald-500/25 via-teal-500/10 to-transparent",
    },
  ],
  navItems: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
} as const;
