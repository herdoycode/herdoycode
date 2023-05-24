import { AiOutlineCloudDownload } from "react-icons/ai";
import "./Hero.css";
import Social from "../social/Social";
const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <div className="hero">
          <div className="hero__left">
            <div className="hero__info">
              <h1 className="hero__title">
                Hi, Iam <span>Herdoy</span>
              </h1>
              <h2 className="hero__tagline">Full-stack javascript developer</h2>
              <p className="hero__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                incidunt aliquam aspernatur libero doloribus, voluptatibus
                culpa! Iure repellendus repellat fugit
              </p>
              <button>
                Download Cv
                <AiOutlineCloudDownload style={{ fontSize: "25px" }} />
              </button>
              <Social />
            </div>
          </div>
          <div className="hero__right">
            <img className="hero__img" src="/me.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
