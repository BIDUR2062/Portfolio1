
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Please configure your Formspree endpoint.");
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Connect"
          description="Have a project idea, opportunity, or just want to connect? Feel free to reach out."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's start a conversation</h3>

            <p className="contact-description">
              I'm always interested in discussing new opportunities,
              collaborating on projects, and connecting with people
              in the technology community.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-icon">
                  <Mail size={20} />
                </span>
                <div>
                  <h4>Email</h4>
                  <p>
  <a href="mailto:bidurkhanal111@gmail.com">
    bidurkhanal111@gmail.com
  </a>
</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon">
                  <MapPin size={20} />
                </span>
                <div>
                  <h4>Location</h4>
                  <p>Nepal</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Find me online</h4>

              <div className="contact-social-links">
                <a
                  href="https://github.com/BIDUR2062"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/bidur-khanal-a71810209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={17} />
            </button>

            {status && (
              <p className="contact-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
