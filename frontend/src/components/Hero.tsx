import { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React + TypeScript Dev",
  "Python Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section className={`hero ${visible ? "hero-visible" : ""}`} id="hero">
      <div className="hero-content">
        <div className="hero-greeting">
          <span className="hero-line" />
          <span className="hero-hi">Hello, World! — I am</span>
        </div>
        <h1 className="hero-name">
          Chandana<br />
          <span className="hero-name-accent">Priya Badina</span>
        </h1>
        <div className="hero-role">
          <span className="role-prefix">&gt; </span>
          <span className="role-text">{displayed}</span>
          <span className="role-cursor">|</span>
        </div>
        <p className="hero-bio">
          Final-year B.Tech CSE student with <span className="neon-text">90% CGPA</span> from
          Narasaraopeta Engineering College. Building scalable full-stack applications with
          Python, MERN, and AI. Passionate about turning ideas into elegant solutions.
        </p>
     <div className="hero-actions">
  <a href="#projects" className="btn btn-primary">View Projects →</a>
  <div className="resume-group">
    <span className="resume-label">Resume</span>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-icon-btn" title="View">👁</a>
    <a href="/resume.pdf" download="Chandana_Priya_Resume.pdf" className="resume-icon-btn" title="Download">⬇</a>
  </div>
  <a href="https://github.com/chandanapriyabadina" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub ↗</a>
  <a href="https://www.linkedin.com/in/chandana-priya-badina-827b97276/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn ↗</a>
  <a href="#contact" className="btn btn-outline">📩 Contact Me</a>
</div>
        <div className="hero-stats">
          {[
            { label: "CGPA", value: "9.0" },
            { label: "Projects", value: "6+" },
            { label: "Certifications", value: "7+" },
            { label: "Hackathons", value: "3+" },
          ].map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-value neon-text">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hex-grid">
          {[...Array(19)].map((_, i) => (
            <div key={i} className={`hex hex-${i}`} />
          ))}
        </div>
        <div className="hero-avatar-wrap">
          <div className="avatar-ring ring-1" />
          <div className="avatar-ring ring-2" />
          <div className="avatar-ring ring-3" />
          <div className="avatar-initials">
            <img src="/chandana.png" alt="Chandana Priya" className="avatar-photo" />
          </div>
        </div>
        <div className="hero-badge badge-1"><span>⚡</span> React + TS</div>
        <div className="hero-badge badge-2"><span>🐍</span> Python</div>
        <div className="hero-badge badge-3"><span>🤖</span> AI / ML</div>
      </div>
    </section>
  );
}
