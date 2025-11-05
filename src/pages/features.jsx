import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Our Key Features</h2>
      <p className="features-intro">
        Discover tools that help you stay on top of your fitness journey.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/814/814513.png"
            alt="Activity Tracking"
          />
          <h3>Activity Tracking</h3>
          <p>Track your workouts, steps, and overall daily performance.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
            alt="Healthy Meals"
          />
          <h3>Healthy Meals</h3>
          <p>Monitor your meals and get personalized nutrition recommendations.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2784/2784459.png"
            alt="Hydration Reminder"
          />
          <h3>Hydration Reminder</h3>
          <p>Stay hydrated! Get smart reminders to drink water regularly.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;