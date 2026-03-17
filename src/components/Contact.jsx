import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sidhu@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Left Side: Info */}
        <div className="contact-info">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-tagline">
            Have a project in mind or just want to say hi? <br />
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your linkvisions.
          </p>

          <div className="contact-details">
            {/* Add more specific details if needed */}
          </div>

          <div className="contact-icons">
            <a href="https://github.com/KSidhu2112" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="siddusiddu5849@gmail.com" className="contact-icon" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane style={{ marginLeft: '8px', fontSize: '0.9em' }} />
            </button>
          </form>
        </div>

        <p className="contact-footer">© 2026 K Sidhu. Built with React & Vite.</p>
      </div>
    </section>
  );
};

export default Contact;
