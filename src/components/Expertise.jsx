import { useState, useEffect } from "react";
import {
  FaLandmark,
  FaVenusMars,
  FaFlask,
  FaBalanceScale,
  FaGlobeAmericas
} from "react-icons/fa";
import "./Expertise.css";

export const Expertise = () => {
  const [mobile, setMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setMobile(isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const cards = [
    {
      icon: <FaLandmark className="icon" />,
      title: "Political Science",
      desc: "Analyzing classical and modern political theories, comparative governance systems, and the theoretical foundations of statecraft through critical and analytical perspectives."
    },
    {
      icon: <FaVenusMars className="icon" />,
      title: "Gender Studies",
      desc: "Examining socio-political structures, feminist theories, and international human rights frameworks through an intersectional and research-driven approach."
    },
    {
      icon: <FaFlask className="icon" />,
      title: "General Science",
      desc: "Integrating scientific principles, environmental challenges, and technological developments with logical reasoning and analytical depth."
    },
    {
      icon: <FaBalanceScale className="icon" />,
      title: "Criminology",
      desc: "Exploring criminal behavior, juvenile delinquency, and justice systems to understand contemporary frameworks of law, order, and social control."
    },
    {
      icon: <FaGlobeAmericas className="icon" />,
      title: "Geography",
      desc: "Interpreting physical, human, and regional geography to assess evolving geopolitical dynamics and environmental realities with conceptual clarity."
    }
  ];

  // Desktop: show all 5 cards always
  // Mobile: show first 4 cards initially, all 5 after clicking
  const displayedCards = mobile && !showAll ? cards.slice(0, 4) : cards;

  return (
    <section id="expertise" className="expertise scroll-effect">
      <h1 className="title scroll-effect">Areas of Expertise</h1>

      <p className="subtitle scroll-effect">
        Biotechnologist | Policy Analyst | Critical Thinker | Academic Mentor
      </p>

      <div className="cards">
        {displayedCards.map((card, index) => (
          <div 
            className={index < 4 ? "card scroll-effect" : "card"} 
            key={index}
            style={index >= 4 ? { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' } : {}}
          >
            <h3>
              {card.icon}
              {card.title}
            </h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* See More Button - Only shows on mobile when first 4 cards are visible */}
      {mobile && !showAll && (
        <button
          className="see-more-btn"
          onClick={handleSeeMore}
        >
          See More 
        </button>
      )}
    </section>
  );
};
