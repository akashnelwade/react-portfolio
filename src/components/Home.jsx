import '../styles/home.css'
import profile from '../images/aka.jpeg'

export default function Home() {
  return (
    <section className="home-section" id="home">

      <img src={profile} alt="Akash profile" className="profile-img" />

      <h1 className="intro">Hi, I'm Akash </h1>
      <h2>Java Full Stack Developer</h2>

      <p className="tagline">
        Building scalable web applications using React & Spring Boot.
        Passionate about backend logic, clean architecture, and solving real-world problems.
      </p>

      <div className="highlights">
        <span>⚡ 3 Projects</span>
        <span>☕ Java & Spring Boot</span>
        <span>⚛ React SPA Developer</span>
        <span>🎯 Full Stack & Backend Roles</span>
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
