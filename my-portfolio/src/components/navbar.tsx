
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">N</span>
          <span>YourName</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`navbar-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="navbar-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
