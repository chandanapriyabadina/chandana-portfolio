import { useState } from "react";
import "./Experience.css";

const experiences = [
  {
    role: "MERN Full Stack + AI Intern",
    company: "Datavalley Pvt. Ltd.",
    type: "Remote Internship",
    period: "Apr 2025 – Sep 2025",
    color: "cyan",
    logo: "/datavalley_logo.png",
    cert: "/datavalley_cert.png",
    points: [
      "Built 4 responsive web applications (Weather, Portfolio, Food, Movie) using React, Node.js, and MongoDB, improving UI performance by 40%.",
      "Reduced deployment issues by 20% through debugging 10+ backend and API integration errors across multiple modules.",
      "Delivered 6 features in 3-month agile sprint cycle with 100% on-time completion rate.",
      "Designed and deployed Medibot — an AI-based health chatbot using NLP techniques.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Prodigy Infotech",
    type: "Virtual Internship",
    period: "May 2025",
    color: "pink",
    logo: "/prodigy_logo.png",
    cert: "/prodigy_cert.jpg",
    points: [
      "Built a Decision Tree Classifier using UCI Bank Marketing dataset to improve prediction accuracy.",
      "Conducted sentiment analysis on Twitter data using NLP techniques.",
      "Created dashboards and visualizations on global population data for data-driven reporting.",
    ],
  },
];

const activities = [
  { label: "Smart India Hackathon", desc: "Team Leader — designed and developed real-world solutions", icon: "🏆" },
  { label: "24-hr Hackathon Merit", desc: "Certificate of Merit at Narasaraopeta Engineering College", icon: "🥇" },
  { label: "Ideathon Team Leader", desc: "Led cross-functional teams in innovation challenge", icon: "💡" },
  { label: "NSS Volunteer", desc: "Active community service and campus initiatives", icon: "🌱" },
  { label: "Tech Fest Organizer", desc: "Organized cultural events and Git version control workshop", icon: "🎯" },
  { label: "LeetCode", desc: "Solved 65+ DSA problems to strengthen problem-solving", icon: "⚡" },
];

export default function Experience() {
  const [activeCert, setActiveCert] = useState<{ title: string; cert: string } | null>(null);

  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-tag">// 04. experience</span>
        <h2 className="section-title">Experience & Activities</h2>
      </div>

      <div className="exp-timeline">
        {experiences.map((e) => (
          <div className={`exp-item exp-${e.color}`} key={e.role}>
            <div className="exp-dot-line">
              <div className="exp-dot" />
              <div className="exp-line" />
            </div>
            <div className="exp-content card">
              <div className="exp-header">
                <img src={e.logo} alt={e.company} className="exp-logo" />
                <div className="exp-header-info">
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">
                    {e.company}
                    <span className="exp-type">{e.type}</span>
                  </div>
                </div>
                <div className="exp-header-right">
                  <span className={`tag tag-${e.color}`}>{e.period}</span>
                  <button
                    className={`cert-view-btn btn-cert-${e.color}`}
                    onClick={() => setActiveCert({ title: e.company, cert: e.cert })}
                  >
                    🏅 View Certificate
                  </button>
                </div>
              </div>
              <ul className="exp-points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="activities-section">
        <h3 className="activities-title">
          <span className="section-tag" style={{ display: "inline" }}>// extracurricular</span>
        </h3>
        <div className="activities-grid">
          {activities.map((a) => (
            <div className="activity-item card" key={a.label}>
              <span className="activity-icon">{a.icon}</span>
              <div>
                <div className="activity-label">{a.label}</div>
                <div className="activity-desc">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <span className="cert-modal-title">🏅 {activeCert.title} — Internship Certificate</span>
              <button className="cert-modal-close" onClick={() => setActiveCert(null)}>✕</button>
            </div>
            <div className="cert-modal-body">
              <img src={activeCert.cert} alt="Internship Certificate" className="cert-modal-img" />
            </div>
            <div className="cert-modal-footer">
              <a href={activeCert.cert} download className="btn btn-primary" style={{ fontSize: "0.75rem" }}>
                ⬇ Download Certificate
              </a>
              <button className="btn btn-outline" onClick={() => setActiveCert(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
