import Button from "../common/button/Button";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="hero">
          <div className="hero__left">
            <div className="hero__content">
              <h1>Hi, I'am Herody</h1>
              <h2>Full-Stack javaScript developer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                recusandae nesciunt, temporibus incidunt, eaque quidem in
                aperiam eius vero omnis commodi eius vero.
              </p>
              <Button className="primary"> Download CV </Button>
            </div>
          </div>
          <div className="hero__right">
            <div>
              <img className="hero-img" src="/me.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
