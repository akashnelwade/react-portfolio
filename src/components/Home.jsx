import '../styles/home.css'
import profile from '../images/aka.jpeg'

export default function Home() {
  return (
    <section className="home-section" id="home">

      <img src={profile} alt="Akash profile" className="profile-img" />

      <h1 className="intro"> Hi, I'm <span>Akash Nelwade</span></h1>
      <h2>Java Full Stack Developer</h2>

      <p className="tagline">
        Java Full Stack Developer specializing in Spring Boot, React.js, REST APIs,
         and secure backend systems. Passionate about building scalable, maintainable, 
         and user-focused web applications.
      </p>

      <div className="highlights">
        <span>3 Full Stack Projects</span>
        <span>Spring Boot Backend</span>
        <span>React.js Frontend</span>
        <span>REST API Development</span>
        <span>JWT Authentication</span>
        <span> MySQL Database</span>
      </div>

      <div className="home-buttons">
        <a href="/Akash_Resume.pdf" download className="btn">
          Download Resume
        </a>

        <a href="https://github.com/akashnelwade" target="_blank" className="btn secondary">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/nelwade-akash" target="_blank" className="btn secondary">
          LinkedIn
        </a>
      </div>

    </section>
  )
}
