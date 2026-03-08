import '../styles/projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">

        <h2 className="section-title">🛠 Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Student Management System</h3>
              <p className="tech">
                Full Stack Java • HTML • CSS • JavaScript • Servlets • JSP • JDBC • MySQL
              </p>
                 <p>
                    A full-stack web application developed using Java EE technologies to manage
                    student academic records. Implements secure login, role-based access,
                    and complete CRUD operations for student data using Servlets, JSP,
                    JDBC, and MySQL database integration.
                 </p>
          </div>

          <div className="project-card">
            <h3>Task Management System (REST API)</h3>
              <p className="tech">
                Spring Boot • MySQL • JPA • Hibernate • REST API
              </p>
                 <p>
                     A backend RESTful API built using Spring Boot for managing tasks with
                     secure and scalable architecture. Implements CRUD operations,
                     database interaction using JPA/Hibernate, and structured API endpoints
                     tested via Postman.
                 </p>
          </div>

          <div className="project-card">
           <h3>Bank Management System</h3>
             <p className="tech">
              Core Java • OOP • Inheritance • Encapsulation • Polymorphism
             </p>
                 <p>
                   A console-based banking application developed using core Java and
                   object-oriented programming principles. Demonstrates account management,
                   transactions, and business logic implementation using inheritance,
                   encapsulation, and polymorphism.
                </p>
          </div>

          <div className="project-card">
           <h3>Akash Port-folio</h3>
             <p className="tech">
              • React.js and .................
             </p>
                 <p>
                   A console-based banking application developed using core Java and
                   object-oriented programming principles. Demonstrates account management,
                   transactions, and business logic implementation using inheritance,
                   encapsulation, and polymorphism.
                </p>
          </div>
          

        </div>

      </div>
    </section>
  )
}