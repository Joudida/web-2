import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have a question, feedback, or collaboration idea? We’d love to hear from you!
      </p>

      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Info</h2>
          <p>📍 Tripoli, Lebanon</p>
          <p>📞 +961 76 304 493</p>
          <p>📧 info@healthtrack.com</p>

          <div className="socials">
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
