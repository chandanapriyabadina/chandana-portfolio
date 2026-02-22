import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="logo-bracket">[</span>
          <span className="logo-name">CPB</span>
          <span className="logo-bracket">]</span>
          <span className="logo-cursor">_</span>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <button
                className={`nav-link ${active === l ? "active" : ""}`}
                onClick={() => scrollTo(l)}
              >
                <span className="nav-num">0{links.indexOf(l) + 1}.</span> {l}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/chandanapriyabadina"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-github"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
