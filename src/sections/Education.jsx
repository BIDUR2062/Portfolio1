
import SectionHeading from "../components/SectionHeading";
import "./Education.css";

const education = [
  {
    title: "BSc. Computer Science and Information Technology",
    institution: "Tribhuvan University",
    period: "Currently Pursuing",
    description:
      "Studying computer science with a focus on programming, software development, artificial intelligence, databases, and computer systems.",
    type: "Education",
  },
  {
    title: "+2 Science",
    institution: "Nobel Academy",
    period: "Completed",
    description:
      "Completed higher secondary education in the Science stream, developing a foundation in mathematics, physics, and computer science.",
    type: "Education",
  },
  {
    title: "Secondary Education",
    institution: "Aadarsha Secondary School, Ilam",
    period: "Completed",
    description:
      "Completed secondary-level education and developed an academic foundation for further studies.",
    type: "Education",
  },
];

function Education() {
  return (
    <section id="education" className="education-section section">
      <div className="container">
        <SectionHeading
          eyebrow="MY BACKGROUND"
          title="Education & Learning"
          description="My academic journey and continuous efforts to develop my knowledge and technical skills."
        />

        <div className="education-timeline">
          {education.map((item) => (
            <article className="education-item" key={item.title}>
              <div className="education-marker">
                <span></span>
              </div>

              <div className="education-card">
                <div className="education-card-top">
                  <span className="education-type">{item.type}</span>
                  <span className="education-period">
                    {item.period}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
