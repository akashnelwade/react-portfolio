import '../styles/education.css'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">

        <h2 className="section-title">🎓 My Education</h2>
        <p className="section-subtitle">
          Education is not the learning of facts, but the training of the mind to think.
        </p>

        <div className="education-wrapper">

          {/* MCA */}
          <div className="education-card">
            <h3>MCA (Master of Computer Applications)</h3>
            <p className="education-institute">
              Visvesvaraya Technological University, CPGS Kalaburagi
            </p>
            <span className="education-year">2024 – 2026 | Pursuing</span>
            <p className="education-desc">
              Focused on Full-Stack Development using Java, React, Spring Boot,
              database systems, and real-world project development.
            </p>
          </div>

          {/* BSc */}
          <div className="education-card">
            <h3>Bachelor of Science (Computer Science)</h3>
            <p className="education-institute">
              B.Sc in Computer Science
            </p>
            <span className="education-year">2021 – 2024 | Completed</span>
            <p className="education-desc">
              Built strong analytical and programming foundations through
              computer science and core science subjects.
            </p>
          </div>

          {/* PUC */}
          <div className="education-card">
            <h3>Higher Secondary Education (Science)</h3>
            <p className="education-institute">
              Karnataka PU College, Bidar
            </p>
            <span className="education-year">2018 – 2020 | Completed</span>
            <p className="education-desc">
              Developed logical thinking and problem-solving skills through
              science and mathematics education.
            </p>
          </div>

          {/* SSLC */}
          <div className="education-card">
            <h3>SSLC</h3>
            <p className="education-institute">
              Prakash Vidyalaya High School, Ghat-Boral, Bidar
            </p>
            <span className="education-year">2018 | Completed</span>
            <p className="education-desc">
              Completed schooling in Kannada medium, building strong academic
              fundamentals and discipline.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}