import "./About.css";
const About = () => {
  return (
    <div className="about__wrapper">
      <div className="container">
        <div className="about">
          <div className="about__left">
            <img className="about__img" src="/me.png" alt="" />
          </div>
          <div className="about__right">
            <div className="about__info">
              <h1 className="about__title">
                About <span>me</span>
              </h1>
              <h2 className="about__tagline">
                Full-stack javascript developer
              </h2>
              <p className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                incidunt aliquam aspernatur libero doloribus, voluptatibus
                culpa! Iure repellendus repellat fugit
              </p>
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
