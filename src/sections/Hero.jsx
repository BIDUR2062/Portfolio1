import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Hello, I'm</span>

          <h1 className="hero-title">
            Bidur Khanal<span className="hero-title-accent">.</span>
          </h1>

          <h2 className="hero-role">AI Enthusiast | Python Developer</h2>

          <p className="hero-description">
            Turning Ideas into Intelligent Applications. I enjoy building
            practical solutions using Python, AI, machine learning, and
            backend technologies.
          </p>

          <div className="hero-actions">
            <Button href="#projects">Explore My Work</Button>
            <Button href="#contact" variant="secondary" icon={false}>
              Contact Me
            </Button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/BIDUR2062"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bidur-khanal-a71810209/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;