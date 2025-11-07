import React from "react";
import { Link } from "react-router-dom";
import "./features.css";

const Features = () => {
  return (
    <div className="features-section">
      <h2 className="features-title">Our Features</h2>
      <p className="features-subtitle">
        Explore everything HealthTrack has to offer — from personalized training plans 
        to group classes and nutrition tracking.
      </p>

      <div className="features-grid">
        <Link to="/feature/personal" className="feature-card">
          <img
            src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Personal Training"
          />
          <h3>Personal Training</h3>
          <p>Get customized workout programs designed for your goals and fitness level.</p>
        </Link>

        <Link to="/feature/nutrition" className="feature-card">
          <img
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088"
            alt="Nutrition Guidance"
          />
          <h3>Nutrition Guidance</h3>
          <p>Track your meals and learn how to balance proteins, carbs, and fats the right way.</p>
        </Link>

        <Link to="/feature/zumba" className="feature-card">
          <img
            src="https://images.pexels.com/photos/2908175/pexels-photo-2908175.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Zumba & Dance Classes"
          />
          <h3>Zumba & Dance Classes</h3>
          <p>Join energetic dance sessions to stay fit while having fun!</p>
        </Link>

        <Link to="/feature/crossfit" className="feature-card">
          <img
            src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="CrossFit & Strength"
          />
          <h3>CrossFit & Strength</h3>
          <p>Push your limits with strength-based training sessions and dynamic workouts.</p>
        </Link>
      </div>
    </div>
  );
};

export default Features;