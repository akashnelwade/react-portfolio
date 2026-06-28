import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="skills">
        <Skills />
      </section>


      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>


      <section id="certifications">
        <Certifications />
      </section>


      <section id="contact">
        <Contact />
      </section>


    </>
  )
}
