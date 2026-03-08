import '../styles/skills.css'

/* Skills Data (separate logic from UI) */
const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "HTML", "CSS", "JavaScript"]
  },
  {
    category: "Backend",
    skills: ["Java", "Spring Boot"]
  },
  {
    category: "Database",
    skills: ["MySQL"]
  }
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">

        <h2 className="section-title">🚀 Skills</h2>

        {skillsData.map((group) => (
          <div key={group.category} className="skills-category">

            <h3 className="category-title">{group.category}</h3>

            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div key={skill} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
