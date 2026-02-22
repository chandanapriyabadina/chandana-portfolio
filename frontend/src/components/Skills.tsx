import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillBars = [
  { name: "React.js / TypeScript", level: 90, color: "cyan" },
  { name: "Python / Flask / FastAPI", level: 85, color: "green" },
  { name: "Node.js / Express.js", level: 85, color: "cyan" },
  { name: "MongoDB / MySQL", level: 80, color: "pink" },
  { name: "Machine Learning / Deep Learning", level: 75, color: "purple" },
  { name: "Angular / Bootstrap", level: 78, color: "green" },
  { name: "HTML5 / CSS3 / UI Design", level: 92, color: "cyan" },
  { name: "Java / DSA", level: 70, color: "pink" },
];

const techGroups = [
  { label: "Frontend", color: "cyan", skills: ["React.js", "TypeScript", "Angular", "HTML5", "CSS3", "Bootstrap", "React Router", "UI/UX Design"] },
  { label: "Backend", color: "pink", skills: ["Node.js", "Express.js", "Python", "Flask", "FastAPI", "REST APIs"] },
  { label: "Databases", color: "green", skills: ["MongoDB", "MySQL", "Firebase", "Amazon S3"] },
  { label: "AI / ML", color: "purple", skills: ["TensorFlow", "CNN", "Deep Learning", "NLP", "Machine Learning", "Pandas"] },
  { label: "Languages", color: "cyan", skills: ["JavaScript", "Python", "Java", "SQL", "HTML/CSS"] },
  { label: "Tools", color: "pink", skills: ["GitHub", "Postman", "VS Code", "Google Colab", "Jupyter", "Agile"] },
];

const certs = [
  {
    name: "IBM Web Development Fundamentals",
    issuer: "IBM",
    color: "cyan",
    link: "https://www.credly.com/badges/ebaab4a3-1829-4af3-b40b-63decb4a171a",
  },
  {
    name: "IBM SkillsBuild: AI Fundamentals",
    issuer: "IBM",
    color: "cyan",
    link: "https://www.credly.com/badges/8c47803e-dbdc-48a0-be5d-a66310e5661c",
  },
  {
    name: "MERN Full Stack with AI",
    issuer: "Datavalley Inc",
    color: "pink",
    link: "https://github.com/chandanapriyabadina/MERN-FULL-STACK-WITH-AI-INTERNSHIP/blob/main/MERN%20FULL%20STACK%20WITH%20AI.png",
  },
  {
    name: "HackerRank Python Certificate",
    issuer: "HackerRank",
    color: "green",
    link: "https://www.hackerrank.com/certificates/iframe/b52e14a43e19",
  },
  {
    name: "MongoDB Certificate",
    issuer: "MongoDB",
    color: "green",
    link: "https://learn.mongodb.com/c/alfyRQGATZyJZYDXuqD00g",
  },
  {
    name: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    color: "purple",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=32A17849D3E6A9DBACFAF0BFAE1A66BC39BB513801CFD81C81311E7561FEBBD7",
  },
  {
    name: "NPTEL: Joy of Computing Using Python",
    issuer: "NPTEL",
    color: "cyan",
    link: "https://github.com/chandanapriyabadina/NPTEL/blob/main/The%20Joy%20Of%20Computing%20Using%20Python.pdf",
  },
  {
    name: "Responsive Web Development",
    issuer: "Infosys Springboard",
    color: "pink",
    link: "https://github.com/chandanapriyabadina/--Infosys-Springboard-Build-Responsive-Website-using-HTML5-CSS3-JS-Bootstrap-/blob/main/Screenshot%202026-01-19%20092448.png",
  },
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="section-header">
        <span className="section-tag">// 02. skill_stack</span>
        <h2 className="section-title">Skills & Tech</h2>
      </div>

      {/* Skill Bars */}
      <div className="skill-bars-section">
        <h3 className="sub-label">// proficiency_levels</h3>
        <div className="skill-bars">
          {skillBars.map((s, i) => (
            <div className="skill-bar-item" key={s.name}>
              <div className="skill-bar-header">
                <span className="skill-bar-name">{s.name}</span>
                <span className={`skill-bar-pct skill-pct-${s.color}`}>{s.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className={`skill-bar-fill fill-${s.color}`}
                  style={{
                    width: animated ? `${s.level}%` : "0%",
                    transitionDelay: `${i * 0.08}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags */}
      <div className="skills-grid">
        {techGroups.map((g) => (
          <div className={`skill-card card skill-${g.color}`} key={g.label}>
            <div className="skill-header">
              <span className={`skill-label ${g.color === "cyan" ? "neon-text" : g.color === "pink" ? "neon-pink" : g.color === "green" ? "neon-green" : "neon-purple"}`}>
                ⬡ {g.label}
              </span>
            </div>
            <div className="skill-tags">
              {g.skills.map((s) => (
                <span className={`tag tag-${g.color}`} key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="certs-section">
        <h3 className="sub-label">// certifications</h3>
        <div className="certs-grid">
          {certs.map((c) => (
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cert-card cert-${c.color}`}
              key={c.name}
            >
              <div className="cert-icon">🏅</div>
              <div className="cert-body">
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
              <span className={`tag tag-${c.color} cert-tag`}>View ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
