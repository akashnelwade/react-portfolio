import '../styles/projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">

        <h2 className="section-title">🛠 Projects</h2>

        <div className="projects-grid">

          {/* NextCartX */}

<div className="project-card">

  <h3>🛒 NextCartX</h3>

  <p className="tech">
    React.js • Spring Boot • MySQL • JWT • REST APIs • Maven
  </p>

  <ul className="project-features">
    <li>Modern full-stack e-commerce application.</li>
    <li>JWT-based user authentication and authorization.</li>
    <li>Product, cart, and order management modules.</li>
    <li>RESTful APIs with MySQL database integration.</li>
    <li>Built using scalable layered architecture.</li>
  </ul>

  <a
    href="https://github.com/akashnelwade/NextCartX"
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    🔗 View on GitHub
  </a>

</div>


          {/* PetFinder */}

<div className="project-card">

  <h3>🐾 PetFinder</h3>

  <p className="tech">
    Spring Boot • Java • MySQL • HTML • CSS • JavaScript • Cloudinary
  </p>

  <ul className="project-features">
    <li>Community-driven lost and found pet platform.</li>
    <li>Create and manage lost or found pet reports.</li>
    <li>Cloudinary integration for image uploads.</li>
    <li>Secure CRUD operations with MySQL database.</li>
    <li>Responsive user-friendly interface.</li>
  </ul>

  <a
    href="https://github.com/akashnelwade/PetFinder"
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    🔗 View on GitHub
  </a>

</div>


          {/* SentinelIQ */}

<div className="project-card">

  <h3>🤖 SentinelIQ Chatbot Backend</h3>

  <p className="tech">
    Spring Boot • MySQL • Redis • Docker • JWT • REST APIs • JUnit
  </p>

  <ul className="project-features">
    <li>Production-ready enterprise backend application.</li>
    <li>Secure JWT authentication and authorization.</li>
    <li>Redis caching for improved performance.</li>
    <li>Docker containerization and unit testing.</li>
    <li>REST APIs with layered architecture.</li>
  </ul>

  <a
    href="https://github.com/akashnelwade/SentinelIQ-Chatbot-Backend"
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    🔗 View on GitHub
  </a>

</div>


          {/* Bank Management System */}

<div className="project-card">

  <h3>🏦 Bank Management System</h3>

  <p className="tech">
    Core Java • OOP • Exception Handling • Collections • File Handling
  </p>

  <ul className="project-features">
    <li>Console-based banking application in Core Java.</li>
    <li>Implements OOP principles and modular design.</li>
    <li>Supports account and transaction management.</li>
    <li>Robust exception handling for reliable operations.</li>
    <li>Demonstrates clean business logic implementation.</li>
  </ul>

  <a
    href="https://github.com/akashnelwade/bank-account-management-system"
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    🔗 View on GitHub
  </a>

</div>

        </div>

      </div>
    </section>
  )
}