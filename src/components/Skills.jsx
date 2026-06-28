import '../styles/skills.css'

/* Skills Data (separate logic from UI) */
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      "Java",
      "JavaScript",
      "SQL"
    ]
  },

  {
    category: "Frontend",
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ]
  },

  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "Servlets",
      "JSP",
      "JDBC",
      "Hibernate",
      "JPA",
      "Maven"
    ]
  },

  {
    category: "Authentication & Security",
    skills: [
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Password Encryption",
      "Authentication",
      "Authorization",
      "Input Validation"
    ]
  },

  {
    category: "Database & Caching",
    skills: [
      "MySQL",
      "Redis",
      "SQL Queries",
      "Database Design"
    ]
  },

  {
    category: "Testing",
    skills: [
      "JUnit 5",
      "Mockito",
      "Unit Testing",
      "Postman API Testing"
    ]
  },

  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Apache Tomcat"
    ]
  },

  {
    category: "Software Engineering Concepts",
    skills: [
      "Object-Oriented Programming",
      "Data Structures",
      "Collections Framework",
      "Exception Handling",
      "Global Exception Handling",
      "MVC and Layered Architecture",
      "Dependency Injection",
      "CRUD Operations"
    ]
  }
];

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
