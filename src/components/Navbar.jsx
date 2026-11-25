
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          bidur<span>.</span>
        </a>

        <button
          type="button"
          className="navbar-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-links"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          id="navbar-links"
          className={`navbar-links ${isMenuOpen ? "active" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
