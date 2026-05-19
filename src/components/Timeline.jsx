import { FaBriefcase, FaGraduationCap, FaPencilAlt, FaTrophy } from "react-icons/fa";
import "./Timeline.css";

export const Timeline = () => {
  const journeyData = [
    {
      icon: <FaBriefcase />,
      date: "2021 – Present",
      title: "Special Advisor, WICA",
      desc: "Supporting academic excellence through student mentorship, mock examination evaluation, curriculum planning, and administrative management to ensure effective learning and smooth institutional operations."
    },
    {
      icon: <FaPencilAlt />,
      date: "2026",
      title: "Competitive Examination Journey",
      desc: "Appeared in CSS 2026, BPSC Headmaster (BPS-17), Assistant Director (MOD), and Assistant Director (FPSC) examinations, strengthening analytical thinking, decision-making, and problem-solving abilities."
    },
    {
      icon: <FaGraduationCap />,
      date: "2020 – 2024",
      title: "BS in Biotechnology (EQF Level 6)",
      desc: "Developed a strong foundation in scientific research, bioinformatics, and analytical methods at The Islamia University of Bahawalpur."
    },
    {
      icon: <FaGraduationCap />,
      date: "2020 – 2022",
      title: "Associate Degree in Arts – Political Science (EQF Level 5)",
      desc: "Built a deeper understanding of political theory, governance systems, international relations, and public policy through analytical study."
    },
    {
      icon: <FaTrophy />,
      date: "Oratory Milestones",
      title: "Speech & Debate Journey",
      desc: "Secured 1st Position at District Level (twice) and 2nd Position at Divisional Level in college-level speech and debate competitions, reflecting strong communication, leadership, and speaking skills."
    }
  ];

  return (
    <section id="timeline" className="timeline-section scroll-effect">
      <h2 className="timeline-title scroll-effect">My Journey</h2>
      <p className="timeline-subtitle scroll-effect">Biotechnologist | Policy Analyst | Critical Thinker | Academic Mentor</p>
      <p className="timeline-subtitle scroll-effect">Academic, Leadership & Public Service Milestones</p>

      <div className="timeline-cards">
        {journeyData.map((item, index) => (
          <div className="timeline-card scroll-effect" key={index}>
            <span className="timeline-date">{item.date}</span>
            <h3>
              <span className="timeline-icon">{item.icon}</span>
              {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
