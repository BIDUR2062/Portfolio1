
import SectionHeading from "../components/SectionHeading";
import "./Training.css";

const trainings = [
  {
    title: "Data Science & Machine Learning with GenAI",
    provider: "Broadway Infosys",
    category: "Professional Training",
    date: "Completed",
    description:
      "Practical training covering data science, machine learning concepts, data analysis, and generative AI technologies.",
    technologies: [
      "Python",
      "Data Science",
      "Machine Learning",
      "Generative AI",
    ],
  },
  {
    title: "AI Foundation Course",
    provider: "OpenAI",
    category: "AI Certification",
    date: "July 22, 2026",
    description:
      "Completed an AI foundation course to strengthen my understanding of artificial intelligence and its practical applications.",
    technologies: [
      "Artificial Intelligence",
      "AI Fundamentals",
      "Generative AI",
    ],
  },
  {
    title: "Python Developer Certification",
    provider: "freeCodeCamp",
    category: "Developer Certification",
    date: "June 6, 2026",
    description:
      "Completed a Python developer certification representing approximately 300 hours of learning and practical programming work.",
    technologies: [
      "Python",
      "Programming",
      "Problem Solving",
    ],
  },
];

function Training() {
  return (
    <section id="training" className="training-section section">
      <div className="container">
        <SectionHeading
          eyebrow="CONTINUOUS LEARNING"
          title="Training & Certifications"
          description="Professional training and certifications that reflect my commitment to continuous learning and technical growth."
        />

        <div className="training-grid">
          {trainings.map((training) => (
            <article className="training-card" key={training.title}>
              <div className="training-card-top">
                <span className="training-category">
                  {training.category}
                </span>

                <span className="training-date">
                  {training.date}
                </span>
              </div>

              <div className="training-card-content">
                <h3>{training.title}</h3>

                <h4>{training.provider}</h4>

                <p className="training-description">
                  {training.description}
                </p>

                <div className="training-technologies">
                  {training.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Training;
