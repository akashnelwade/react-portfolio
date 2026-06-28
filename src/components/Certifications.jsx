import '../styles/certifications.css'

import javaCert from '../images/certificates/programming-in-java-nptel.jpg'
import internshipCert from '../images/certificates/java-full-stack-internship-campuspe.jpg'
import aiCert from '../images/certificates/ai-skills-passport-ey-microsoft.jpg'
import cloudCert from '../images/certificates/cloud-computing-vtu.jpg'
import researchCert from '../images/certificates/research-methodology-ipr-vtu.jpg'
import ncscCert from '../images/certificates/national-childrens-science-congress.jpeg'

export default function Certifications() {
  return (
    <section className="section certifications-bg" id="certifications">
      <div className="container">

        <h2 className="section-title">
          🏆 Certifications & Professional Achievements
        </h2>

        <p className="section-subtitle">
          Professional certifications and achievements that demonstrate my
          continuous learning, technical expertise, and commitment to software
          development.
        </p>

        <div className="cert-grid">

          {/* Java */}

          <div className="cert-card">

            <img src={javaCert} alt="Programming in Java" className="cert-image"/>

            <h3>Programming in Java</h3>

            <p className="cert-org">
              NPTEL • IIT Kharagpur
            </p>

            <span className="cert-year">
              2025
            </span>

            <p className="cert-desc">
              Successfully completed a 12-week NPTEL certification covering Core
              Java, Object-Oriented Programming, Exception Handling,
              Multithreading, JDBC, and Java Collections with Elite certification.
            </p>

            <a
              href={javaCert}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>


          {/* Internship */}

          <div className="cert-card">

            <img src={internshipCert} alt="CampusPe Internship" className="cert-image"/>

            <h3>Java Full Stack Internship</h3>

            <p className="cert-org">
              CampusPe
            </p>

            <span className="cert-year">
              Feb 2026 – May 2026
            </span>

            <p className="cert-desc">
              Completed a 3-month Full Stack Java internship with hands-on
              experience in Spring Boot, REST APIs, MySQL, Git, and enterprise
              backend application development.
            </p>

            <a
              href={internshipCert}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>


          {/* AI */}

          <div className="cert-card">

            <img src={aiCert} alt="AI Skills Passport" className="cert-image"/>

            <h3>AI Skills Passport</h3>

            <p className="cert-org">
              EY & Microsoft
            </p>

            <span className="cert-year">
              2025
            </span>

            <p className="cert-desc">
              Successfully completed the AI Skills Passport program covering AI
              fundamentals, business applications, and professional workplace
              skills.
            </p>

            <a
              href={aiCert}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>


          {/* Cloud */}

          <div className="cert-card">

            <img src={cloudCert} alt="Cloud Computing" className="cert-image"/>

            <h3>Cloud Computing</h3>

            <p className="cert-org">
              VTU Centre for Online Education
            </p>

            <span className="cert-year">
              12 Weeks
            </span>

            <p className="cert-desc">
              Completed a certified course covering cloud fundamentals,
              virtualization, cloud deployment models, service models, and modern
              cloud computing concepts.
            </p>

            <a
              href={cloudCert}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>


          {/* Research */}

          <div className="cert-card">

            <img src={researchCert} alt="Research Methodology" className="cert-image"/>

            <h3>Research Methodology & IPR</h3>

            <p className="cert-org">
              VTU Centre for Online Education
            </p>

            <span className="cert-year">
              2025
            </span>

            <p className="cert-desc">
              Successfully completed a certified course on Research Methodology
              and Intellectual Property Rights focusing on research ethics,
              patents, copyrights, and innovation management.
            </p>

            <a
              href={researchCert}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>


          {/* NCSC */}

          <div className="cert-card">

            <img src={ncscCert} alt="National Children's Science Congress" className="cert-image"/>

            <h3>National Children's Science Congress</h3>

            <p className="cert-org">
              NCSTC • Government of India
            </p>

            <span className="cert-year">
              National Level • 2015
            </span>

            <p className="cert-desc">
              Represented Karnataka at the National Children's Science Congress
              and presented a science research project at the national level,
              demonstrating research and analytical skills.
            </p>

            <a
              href={ncscCert}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}