import "./Footer.css";
import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =========================
          Footer Main
      ========================= */}

      <div className="footer-container">

        {/* Brand Section */}

        <div className="footer-brand">

          <img
            src={logo}
            alt="Dev Stack"
            className="footer-logo"
          />

          <p className="footer-description">
            Curated tools, technologies, and resources for
            developers building modern software.
          </p>

          <div className="footer-social">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* Product */}

        <div className="footer-column">

          <h3>PRODUCT</h3>

          <a href="#home">
            Home
          </a>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

        </div>


        {/* Company */}

        <div className="footer-column">

          <h3>COMPANY</h3>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* Legal */}

        <div className="footer-column">

          <h3>LEGAL</h3>

          <a href="#privacy">
            Privacy Policy
          </a>

          <a href="#terms">
            Terms of Service
          </a>

        </div>

      </div>


      {/* =========================
          Footer Bottom
      ========================= */}

      <div className="footer-bottom">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#privacy">
            Privacy
          </a>

          <a href="#terms">
            Terms
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;