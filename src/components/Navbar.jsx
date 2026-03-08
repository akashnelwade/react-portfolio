import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {

  const [theme, setTheme] = useState( localStorage.getItem("theme") || "dark");

  useEffect(() => {
          document.body.classList.remove("light", "dark");
          document.body.classList.add(theme);
          localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
     setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const navItems = [
    "Home",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact"
  ];

  return (
    <nav className="navbar">
      
      <h2 className="logo">Akash Nelwade</h2>

      <ul className="nav-links">
        {navItems.map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}