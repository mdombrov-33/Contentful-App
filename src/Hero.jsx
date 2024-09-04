import heroImg from "./assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Projects Stash</h1>
          <p>
            My personal collection of projects. All the applications are built
            using different technologies and tools. Feel free to explore them.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
