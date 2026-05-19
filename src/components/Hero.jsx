import pic2 from "../images/2.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home">
      <div className="name-title">
        <p className="name scroll-effect">
          <span className="hello">Hello, I'm</span><br />
          <span className="user-name">Shahid Mir</span><br />
          <span className="titles">Biotechnologist | Special Advisor, WICA</span>
        </p>
      </div>


      <div className="content-wrapper">
        <div className="intro-left">
          <div className="intro scroll-effect">
  <p>
    <span className="highlight"></span>Special Advisor and Academic Mentor at
    <span className="highlight"> Writers INN Competitive Academy (WICA)</span>. My academic journey combines the analytical precision of
    <span className="highlight"> Biotechnology (EQF Level 6)</span> with the structured depth of
    <span className="highlight"> Political Science (EQF Level 5)</span>, enabling me to approach learning through
    <span className="highlight"> scientific reasoning</span> and
    <span className="highlight"> critical analysis</span>.

    Having appeared in competitive examinations including
    <span className="highlight"> CSS 2026</span>,
    <span className="highlight"> BPSC Headmaster (BPS-17)</span>,
    <span className="highlight"> AD MOD</span>, and
    <span className="highlight"> AD FPSC</span>, this experience keeps me closely connected to the evolving standards and demands of modern examination systems.

    My teaching philosophy extends beyond conventional learning, focusing on
    <span className="highlight"> analytical thinking</span>,
    <span className="highlight"> strategic preparation</span>, and helping students develop the
    <span className="highlight"> mindset</span>,
    <span className="highlight"> discipline</span>, and
    <span className="highlight"> confidence</span> required for academic excellence and long-term success.
  </p>
</div>
        </div>

        <div className="img-right">
          <div className="hero-right scroll-effect">
            <img src={pic2} alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
};
