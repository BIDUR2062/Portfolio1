
import SectionHeading from "../components/SectionHeading";
import "./About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHeading
          eyebrow="ABOUT ME"
          title="A Little About Me"
          description="Get to know my background, interests, and what drives me."
        />

        <div className="about-content">
          <div className="about-text">
            <h3>Turning curiosity into practical solutions.</h3>

            <p>
              I'm Bidur Khanal, a BSc CSIT student interested in Artificial
              Intelligence, Machine Learning, Data Science, and Backend
              Development.
            </p>

            <p>
              I enjoy understanding how technology works and applying what
              I learn to build practical projects. My primary programming
              language is Python, and I'm continuously improving my skills
              through coursework, training, and hands-on development.
            </p>

            <p>
              My goal is to develop intelligent applications that solve
              real-world problems while growing as an AI and software
              developer.
            </p>
          </div>

          <div className="about-details">
            <div className="about-detail-item">
              <span className="about-detail-label">Education</span>
              <h4>BSc CSIT</h4>
              <p>Computer Science and Information Technology</p>
            </div>

            <div className="about-detail-item">
              <span className="about-detail-label">Primary Language</span>
              <h4>Python</h4>
              <p>AI, Machine Learning and Backend Development</p>
            </div>

            <div className="about-detail-item">
              <span className="about-detail-label">Interests</span>
              <h4>AI & Data Science</h4>
              <p>Building useful and intelligent applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
