
import SectionHeading from "../components/SectionHeading";
import "./Skills.css";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Streamlit",
      "Tableau",
      "SQL Server",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Development",
    skills: [
      "Backend Development",
      "REST APIs",
      "React",
      "HTML",
      "CSS",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeading
          eyebrow="MY EXPERTISE"
          title="Skills & Technologies"
          description="Technologies and tools I use while learning, developing, and building projects."
        />

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
