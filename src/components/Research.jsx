import { useState, useEffect } from "react";
import { FaBook, FaFileAlt, FaExternalLinkAlt, FaCrown, FaFilePdf, FaShoppingCart } from "react-icons/fa";
import "./Research.css";

export const Research = () => {
  const [mobile, setMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      variant: "vip",
      badge: "FEATURED",
      icon: <FaBook className="research-icon" />,
      title: "Authored Book",
      topic: "FPSC Lecturer Biology MCQs Bank",
      description:
        "A comprehensive collection of advanced multiple-choice questions designed to help candidates prepare for federal lecturer screenings.",
      year: "2026",
      status: "PUBLISHED",
      linkHref: "/book.pdf",
      linkText: "View Publication",
      linkIcon: <FaExternalLinkAlt />,
      linkClass: "research-link vip-link",
      buyLink: "#",
      buyText: "Buy Book",
      buyIcon: <FaShoppingCart />
    },
    {
      icon: <FaFileAlt className="research-icon" />,
      title: "All competitive Exam ",
      topic: "Pakistan Affairs Notes",
      description:
        "Analytical study material covering major political, economic, and foreign policy developments from 1947 to the present day.",
      year: "2026",
      status: "PREMIUM",
      linkHref: "/Pak Affairs Notes - Shahid Mir.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link"
    },
    {
      icon: <FaFileAlt className="research-icon" />,
      title: "CSS Exam Resources",
      topic: "Criminology Notes",
      description:
        "Focused academic notes exploring criminal behavior, legal frameworks, and correctional structures in Pakistan.",
      year: "2026",
      status: "PREMIUM",
      linkHref: "/Criminology Final Notes- Shahid Mir.pdf",
      linkText: "View Full PDF",
      linkIcon: <FaFilePdf />,
      linkClass: "research-link"
    }
  ];

  const displayedCards = mobile && !showAll ? cards.slice(0, 2) : cards;

  return (
    <section id="research" className="research scroll-effect">
      <h1 className="research-title scroll-effect">Research & Publications</h1>

      <p className="research-subtitle scroll-effect">
        Academic Books, Specialized Notes, and Scholarly Work
      </p>

      <p className="research-subtitle scroll-effect">
        🗂️ Authored Works & Resources
      </p>

      <div className="research-grid">
        {displayedCards.map((card, index) => (
          <div
            className={`research-card ${card.variant === "vip" ? "vip-card" : ""} scroll-effect`}
            key={index}
          >
            {card.variant === "vip" && (
              <div className="vip-badge">
                <FaCrown /> {card.badge}
              </div>
            )}
            <h3>
              {card.icon}
              {card.title}
            </h3>
            <p className="research-topic">{card.topic}</p>
            <p className="research-description">{card.description}</p>
            <div className="research-meta">
              <span className="research-year">{card.year}</span>
              <span className="research-status">{card.status}</span>
            </div>
            <div className="research-buttons">
              <a
                href={card.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className={card.linkClass}
              >
                {card.linkIcon} {card.linkText}
              </a>
              {card.buyLink && (
                <a
                  href={card.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-link vip-link"
                >
                  {card.buyIcon} {card.buyText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {mobile && !showAll && (
        <button className="research-see-more" onClick={() => setShowAll(true)}>
          See More
        </button>
      )}
    </section>
  );
};
