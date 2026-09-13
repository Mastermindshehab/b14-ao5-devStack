import "./Hero.css";
import bannerStack from "../../assets/banner-stack.png";

const Hero = () => {
  const scrollToTechnologies = () => {
    document
      .getElementById("technologies")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack
            that fits your next project.
          </p>

          <div className="hero-buttons">

            <button
              className="explore-btn"
              onClick={scrollToTechnologies}
            >
              Explore Technologies
            </button>

            <button
              className="learn-btn"
              onClick={scrollToAbout}
            >
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={bannerStack}
            alt="Development Stack"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;