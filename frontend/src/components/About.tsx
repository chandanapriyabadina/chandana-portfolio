import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="section-tag">// 01. about_me</span>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-text card">
          <p>
            I'm <span className="neon-text">Chandana Priya Badina</span>, a final-year Computer Science Engineering 
            student at Narasaraopeta Engineering College with a <span className="neon-text">90% CGPA</span>. 
            I build full-stack web applications that are fast, scalable, and beautifully designed.
          </p>
          <p>
            My core stack is <span className="neon-pink">MERN (MongoDB, Express, React, Node.js)</span> paired with 
            <span className="neon-green"> Python</span> for backend and data science work. I've shipped real-world 
            projects ranging from AI-powered health chatbots to deep learning frameworks for medical image analysis.
          </p>
          <p>
            Beyond code, I've led teams at the <span className="neon-text">Smart India Hackathon</span>, 
            organized technical workshops, and volunteer actively with NSS. I thrive in collaborative 
            environments where creativity meets engineering discipline.
          </p>
          <div className="about-links">
            <a href="mailto:chandanapriyabadina@gmail.com" className="about-link">
              📧 chandanapriyabadina@gmail.com
            </a>
            <a href="tel:+919440190432" className="about-link">
              📱 +91 9440190432
            </a>
            <span className="about-link">📍 Jangareddygudem, Andhra Pradesh</span>
          </div>
        </div>
        <div className="about-education">
          <h3 className="about-sub-title">Education</h3>
          {[
            {
              degree: "B.Tech — Computer Science & Engineering",
              institution: "Narasaraopeta Engineering College",
              year: "2022 – 2026",
              score: "CGPA: 9.0",
              color: "cyan",
            },
            {
              degree: "Senior Secondary (XII) — MPC",
              institution: "Surya Junior College",
              year: "2022",
              score: "83.40%",
              color: "pink",
            },
            {
              degree: "Secondary (X) — SSC",
              institution: "Surya EM High School",
              year: "2020",
              score: "CGPA: 10.0",
              color: "green",
            },
          ].map((e) => (
            <div className={`edu-item edu-${e.color}`} key={e.degree}>
              <div className="edu-dot" />
              <div className="edu-body">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-inst">{e.institution}</div>
                <div className="edu-meta">
                  <span className="edu-year">{e.year}</span>
                  <span className={`tag tag-${e.color}`}>{e.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
