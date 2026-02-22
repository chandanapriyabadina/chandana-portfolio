import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("section:not(#hero)").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app ${mounted ? "mounted" : ""}`}>
      <div className="grid-bg" />
      <div className="scanline" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <button className="chat-fab" onClick={() => setChatOpen(!chatOpen)} aria-label="Open AI Chat">
        <span className="chat-fab-icon">{chatOpen ? "✕" : "⬡"}</span>
        <span className="chat-fab-label">{chatOpen ? "Close" : "Ask AI"}</span>
        <span className="chat-fab-pulse" />
      </button>
      {chatOpen && <ChatBot onClose={() => setChatOpen(false)} />}
    </div>
  );
}

export default App;
