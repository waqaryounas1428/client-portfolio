import { FaGraduationCap, FaBriefcase, FaTrophy, FaLightbulb } from "react-icons/fa";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about scroll-effect">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">Multidisciplinary Thinker | Analytical Researcher | Lifelong Learner
</p>

        <div className="about-content">
          <div className="about-card scroll-effect">
            <FaGraduationCap className="about-icon" />
            <h3>Academic Foundation</h3>
            <p>
              Combining Biotechnology (EQF Level 6) and Political Science (EQF Level 5) to integrate scientific precision with governance, policy understanding, and critical analysis for a strong multidisciplinary perspective.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaBriefcase className="about-icon" />
            <h3>Professional Growth</h3>
            <p>
              Experienced in analytical research, academic writing, competitive examination preparation, and strategic communication, with a focus on structured thinking and intellectual development.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaTrophy className="about-icon" />
            <h3>Achievements</h3>
            <p>
              Award-winning public speaker and debater, securing 1st Position at District Level and 2nd Position at Divisional Level, demonstrating leadership, confidence, and persuasive communication excellence.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaLightbulb className="about-icon" />
            <h3>Vision</h3>
            <p>
              Driven by continuous learning and innovation, with a commitment to transforming knowledge into meaningful impact through leadership, education, and purposeful contribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
