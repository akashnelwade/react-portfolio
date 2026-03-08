

import "../styles/contact.css";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "akashnelwade3630@gmail.com",
      link: "mailto:akashnelwade3630@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/akash-nelwade",
      link: "https://linkedin.com/in/nelwade-akash"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/akashnelwade",
      link: "https://github.com/akashnelwade"
    }
  ];

  // update form state
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();
      console.log("Server response:", data);

      alert("Message sent successfully!");

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <h2 className="section-title">📩 Contact Me</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaboration, internships, or opportunities.
        </p>

        {/* Contact Cards */}
        <div className="contact-cards">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn contact-btn">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}