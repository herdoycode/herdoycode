import Button from "../common/button/Button";
import SectionHeader from "../common/sectionHeader/SectionHeader";
import "./About.css";
const About = () => {
  return (
    <div className="about-wrapper">
      <SectionHeader> About Me </SectionHeader>
      <div className="container">
        <div className="about">
          <div className="about__left">
            <div>
              <img className="about-img" src="/me.png" alt="" />
            </div>
          </div>
          <div className="about__right">
            <div className="about__content">
              <h1>Hi, I'am Herdy</h1>
              <h2>Full-Stack javaScript developer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                recusandae nesciunt, temporibus incidunt, eaque quidem in
                aperiam eius vero omnis commodi eius vero.
              </p>
              <Button className="primary"> Download CV </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
