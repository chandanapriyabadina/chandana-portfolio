import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-tag">// 05. contact</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>
      <div className="contact-wrap">
        <div className="contact-left">
          <p className="contact-intro">
            I'm actively looking for <span className="neon-text">Full Stack Developer internships</span>. 
            Whether you have an opportunity, a project, or just want to say hi — my inbox is open!
          </p>
          <div className="contact-links">
            <a href="mailto:chandanapriyabadina@gmail.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">chandanapriyabadina@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919440190432" className="contact-card">
              <span className="contact-icon">📱</span>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 9440190432</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/chandana-priya-badina-827b97276/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">💼</span>
              <div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">chandana-priya-badina</div>
              </div>
            </a>
            <a href="https://github.com/chandanapriyabadina" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">⌨️</span>
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">chandanapriyabadina</div>
              </div>
            </a>
            <div className="contact-card no-link">
              <span className="contact-icon">📍</span>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Jangareddygudem, Andhra Pradesh, India</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="availability-card card">
            <div className="avail-header">
              <span className="avail-dot" />
              <span className="avail-title">Currently Available</span>
            </div>
            <p className="avail-desc">
              Open to internship opportunities in Full Stack Development.
              Available for both remote and on-site roles across India.
            </p>
            <div className="avail-tags">
              <span className="tag tag-cyan">Full Stack Dev</span>
              <span className="tag tag-pink">React / MERN</span>
              <span className="tag tag-green">Python Backend</span>
              <span className="tag tag-purple">Open to Remote</span>
              <span className="tag tag-cyan">Graduating May 2026</span>
            </div>
            <a href="mailto:chandanapriyabadina@gmail.com" className="btn btn-primary" style={{marginTop: '1.5rem', display: 'inline-flex'}}>
              Say Hello →
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed & Built by <span className="neon-text">Chandana Priya Badina</span></p>
        <p className="footer-stack">React + TypeScript · Python FastAPI · OpenRouter AI · SQLite</p>
      </div>
    </section>
  );
}
