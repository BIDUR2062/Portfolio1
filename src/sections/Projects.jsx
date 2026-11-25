import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import "./Projects.css";

const projects = [
  {
    title: "Breast Cancer Prediction",
    category: "Machine Learning",
    description:
      "A machine learning application that predicts whether a breast tumor is benign or malignant using medical diagnostic features.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/BIDUR2062",
    demo: "https://breast-cancer-prediction-nye6dubed58xkmegfvey24.streamlit.app/",
  },
  {
    title: "Pizza Sales Dashboard",
    category: "Data Analytics",
    description:
      "An interactive dashboard for analyzing pizza sales, revenue, orders, average order value, and product performance.",
    technologies: ["Python", "Pandas", "Streamlit", "Data Visualization"],
    github: "https://github.com/BIDUR2062",
    demo: "",
  },
  {
    title: "House Price Prediction",
    category: "Machine Learning",
    description:
      "A regression-based project that estimates house prices using property features such as area, bedrooms, location, and condition.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Linear Regression"],
    github: "https://github.com/BIDUR2062",
    demo: "",
  },
  {
    title: "Gemini Integration LLM",
    category: "Generative AI",
    description:
      "A Streamlit application integrating Google's Gemini API to interact with a large language model.",
    technologies: ["Python", "Streamlit", "Google GenAI API"],
    github: "https://github.com/BIDUR2062",
    demo: "",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeading
          eyebrow="MY WORK"
          title="Featured Projects"
          description="A selection of projects where I apply my knowledge to solve practical problems."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-content">
                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;