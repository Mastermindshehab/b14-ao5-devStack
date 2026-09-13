import { useState } from "react";
import logo from "../../assets/logo-text.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">

      {/* Brand / Logo */}
      <div className="brand">
        <img
          src={logo}
          alt="Dev Stack"
          className="brand-logo"
        />
      </div>

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#technologies"
          onClick={() => setMenuOpen(false)}
        >
          Technologies
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>

      {/* Authentication Buttons */}
      <div className="nav-buttons">

        <button className="sign-in">
          Sign In
        </button>

        <button className="sign-up">
          Sign Up
        </button>

      </div>

    </nav>
  );
};

export default Navbar;