

import '../styles/certifications.css'

export default function Certifications() {
  return (
    <section className="section certifications-bg" id="certifications">
      <div className="container">
        <h2 className="section-title">🏆 Certifications & Achievements</h2>
        <p className="section-subtitle">
          Recognitions that reflect my learning, consistency, and participation beyond academics.
        </p>

        <div className="cert-grid">

          {/* Certification */}
          <div className="cert-card">
            <h3>Programming in Java</h3>
            <p className="cert-org">NPTEL – IIT</p>
            <span className="cert-year">2024</span>
            <p className="cert-desc">
              Completed an NPTEL certification covering core Java concepts, OOP,
              exception handling, multithreading, and JDBC.
            </p>
          </div>

          {/* Achievement */}

          <div className="cert-card">
            <h3>National Children’s Science Congress (NCSC)</h3>
            <p className="cert-org">NCSTC – DST (Govt. of India)</p>
            <span className="cert-year">National Level</span>
            <p className="cert-desc">
              Represented my state at the national level on the theme
              “Understanding Weather and Climate”.
            </p>
          </div>

          {/* Achievement */}

          <div className="cert-card">
            <h3>Inter-College Coding Competitions</h3>
            <p className="cert-org">Academic Events</p>
            <span className="cert-year">2024–2025</span>
            <p className="cert-desc">
              Actively participated in coding competitions to improve problem-solving
              skills and real-time logical thinking.
            </p>
          </div>

          
          {/* Certification */}
          
          <div className="cert-card">
            <h3>Research and Methodilogy IPR</h3>
            <p className="cert-org">Online course - VTU</p>
            <span className="cert-year">2024</span>
            <p className="cert-desc">
              Completed an NPTEL certification covering core Java concepts, OOP,
              exception handling, multithreading, and JDBC.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
