import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaHeart, FaPhone } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">SHAHID MIR</h3>
          <p className="footer-tagline">Academic Researcher & Scholar</p>
          <p className="footer-description">
            Dedicated to advancing knowledge through research, writing, and academic excellence in social sciences and development studies.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#timeline">Journey</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="footer-contact">
            <p><FaEnvelope /> shahidmir1302@icloud.com</p>
            <p><FaPhone /> 03403698788</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/18rt5j8PwW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/shahidmir_2?igsh=NnY1bDVpOTN6Y3g2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/nasrullah-mastoi-117a3840b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:shahidmir1302@icloud.com" className="social-icon" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Made with <FaHeart className="heart-icon" /> by Shahid Mir © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
