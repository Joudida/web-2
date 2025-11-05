
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="subtitle">
        We’d love to hear from you! Whether you have a question, feedback, or collaboration idea —
        get in touch with us.
      </p>

      <div className="contact-container">
      
        <form className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email address" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: <a href="mailto:info@healthtrack.com">info@healthtrack.com</a></p>
          <p>Phone: +961 76 304 493</p>

          <div className="social-links">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="YouTube" /></a>
          </div>

        
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.7948578207234!2d35.84581497559752!3d34.35549227305604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f7a4b5b5b1cd%3A0x25b5cbe889f29b3b!2sBishmizzine%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1700000000000!5m2!1sen!2slb"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
