import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About HealthTrack</h1>
        <p>
          HealthTrack is your personal wellness companion — helping you track
          your daily workouts, nutrition, and lifestyle habits to achieve a
          healthier you.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We aim to make fitness simple and accessible for everyone. Whether
          you're a beginner or an athlete, HealthTrack helps you stay
          consistent, motivated, and balanced.
        </p>
      </section>

      <section className="about-vision">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Easy-to-use and intuitive interface</li>
          <li>Track workouts and meals effortlessly</li>
          <li>Stay motivated with daily goals and insights</li>
        </ul>
      </section>
    </div>
  );
}

export default About;