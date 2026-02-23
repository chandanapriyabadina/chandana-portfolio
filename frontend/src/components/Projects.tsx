import "./Projects.css";

const projects = [
  {
    title: "Ultrasound Breast Cancer Detection",
    subtitle: "Deep Learning Framework",
    desc: "Segmentation-guided deep learning pipeline using U-Net++ and CNN. Achieved 99.07% accuracy with Grad-CAM visualizations for clinical interpretability.",
    tech: ["Python", "TensorFlow", "Flask", "CNN", "U-Net++"],
    highlights: ["99.07% accuracy", "15% less errors", "25% faster inference"],
    color: "pink",
    year: "2025",
    github: "https://github.com/NEC-CSE-Projects-2022/BG5",
    live: "https://youtube.com/watch?v=_l8t-qCE__Q&si=qsopd4iZdTAbUssg",

  },
  {
    title: "Community Pulse",
    subtitle: "Local Awareness Web App",
    desc: "Full-stack digital platform bridging community service gaps. 100+ survey responses, real-time data tracking, CRUD operations with 95% uptime.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    highlights: ["100+ responses", "30% faster queries", "95% uptime"],
    color: "cyan",
    year: "2025",
    github: "https://github.com/chandanapriyabadina/CommunityPulse-React",
  },
  {
    title: "Weather Application",
    subtitle: "Real-Time Forecast Web App",
    desc: "Responsive weather forecasting app with OpenWeatherMap API integration. Features day/night toggle and temperature unit conversion.",
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    highlights: ["Real-time data", "Day/night mode", "Mobile responsive"],
    color: "green",
    year: "2025",
    github: "https://github.com/chandanapriyabadina/Weather_App",
    live: "https://chandanapriyabadina.github.io/Weather_App/",
  },
  {
    title: "Medibot – AI Health Chatbot",
    subtitle: "NLP-Powered Assistant",
    desc: "AI-based health chatbot utilizing Natural Language Processing for smart health query assistance. Built during MERN Full Stack + AI internship.",
    tech: ["Python", "NLP", "Node.js", "React", "MongoDB"],
    highlights: ["NLP-powered", "Health domain", "Real-time chat"],
    color: "purple",
    year: "2025",
    github: "https://github.com/chandanapriyabadina",
  },
  {
    title: "Doctor Appointment App",
    subtitle: "Android Application",
    desc: "Mobile app for booking doctor appointments using Kotlin. Intuitive UI for appointment booking, navigation, and accessibility in healthcare.",
    tech: ["Kotlin", "Android", "Firebase", "UI/UX"],
    highlights: ["Mobile-first", "Healthcare UX", "Accessibility"],
    color: "pink",
    year: "2024",
    github: "https://github.com/chandanapriyabadina/Doctor_Appointment_ANDROID",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Showcase",
    desc: "Responsive personal portfolio with AI chat powered by OpenRouter. Features React + TypeScript frontend and Python FastAPI backend.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "OpenRouter"],
    highlights: ["AI Chat", "Cyberpunk UI", "Live on GitHub"],
    color: "cyan",
    year: "2025",
    github: "https://github.com/chandanapriyabadina/chandana-portfolio",
    live: "https://cozy-lokum-8b6600.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-tag">// 03. projects</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className={`project-card card proj-${p.color}`} key={p.title}>
            <div className="project-top">
              <div className="project-header">
                <span className={`project-icon proj-icon-${p.color}`}>⬡</span>
                <div className="project-header-right">
                  <span className="project-year tag tag-cyan">{p.year}</span>
                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link" title="GitHub">
                        ⌨️ Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-live" title="Live Demo">
                        🚀 Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <div className="project-subtitle">{p.subtitle}</div>
              <p className="project-desc">{p.desc}</p>
            </div>
            <div className="project-bottom">
              <div className="project-highlights">
                {p.highlights.map((h) => (
                  <span className={`highlight-badge badge-${p.color}`} key={h}>{h}</span>
                ))}
              </div>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
