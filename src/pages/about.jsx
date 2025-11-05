import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About HealthTrack</h1>
      <p>
        Welcome to <strong>HealthTrack</strong> — your personal fitness and wellness companion.
        Our mission is to help you stay on top of your health goals by tracking your workouts,
        meals, and daily activities, all in one place.
      </p>

      <p>
        Whether you're aiming to lose weight, build muscle, or just live a healthier lifestyle,
        HealthTrack provides the tools, motivation, and insights you need to succeed.
      </p>

      <div className="about-team">
        <h2>Meet the Creator</h2>
        <img
          src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
          alt="Trainer"
          className="about-img"
        />
        <p>
          Hi, I’m <strong>Joudi Dandachi</strong>, a certified fitness trainer and IT student passionate about
          combining technology with wellness. This project is built to inspire people to take control
          of their health journey using modern web tools.
        </p>
      </div>
    </div>
  );
};

export default About;