import pic2 from "../images/3.png";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section scroll-effect">
      
      {/* TOP - TITLE AND DESCRIPTION (CENTER) */}
      <div className="contact-top scroll-effect">
        <h1 className="contact-title scroll-effect">Let's Achieve Success Together</h1>

        {/* Description Card */}
        <div className="contact-description-card scroll-effect">
          <p className="contact-description">
            Whether you are preparing for <span className="highlight">CSS</span>,
            <span className="highlight"> PMS</span>,
            <span className="highlight"> PCS</span>, or other
            <span className="highlight"> competitive examinations</span>, I am here to help you strengthen your
            <span className="highlight"> writing skills</span>,
            <span className="highlight"> analytical thinking</span>, and
            <span className="highlight"> subject knowledge</span> to achieve outstanding results.
          </p>
        </div>
      </div>

      {/* BOTTOM - IMAGE (LEFT) AND CONTACT INFO (RIGHT) */}
      <div className="contact-bottom scroll-effect">
        
        {/* LEFT SIDE - IMAGE */}
        <div className="contact-left scroll-effect">
          <div className="contact-image-card scroll-effect">
            <img src={pic2} alt="profile" className="contact-image" />
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className="contact-right scroll-effect">
          <div className="contact-info-card scroll-effect">
            <div className="contact-items">
              <div className="contact-item scroll-effect">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:shahidmir1302@icloud.com">shahidmir1302@icloud.com</a>
              </div>

              <div className="contact-item scroll-effect">
                <FaPhone className="contact-icon" />
                <a href="tel:03403698788">0340-3698788</a>
              </div>

              <div className="contact-item scroll-effect">
                <FaFacebook className="contact-icon" />
                <a
                  href="https://www.facebook.com/share/18rt5j8PwW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Profile
                </a>
              </div>

              <div className="contact-item scroll-effect">
                <FaInstagram className="contact-icon" />
                <a
                  href="https://www.instagram.com/shahidmir_2?igsh=NnY1bDVpOTN6Y3g2&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Profile
                </a>
              </div>

              <div className="contact-item scroll-effect">
                <FaLinkedin className="contact-icon" />
                <a
                  href="https://www.linkedin.com/in/nasrullah-mastoi-117a3840b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
