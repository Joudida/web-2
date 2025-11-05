import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to HealthTrack 🏋️‍♀️</h1>
          <p>Your personal fitness and health companion.</p>
          <Link to="/features" className="btn">
            Explore Features
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlight">
          <h3>💪 Track Workouts</h3>
          <p>Log your daily exercises and monitor progress easily.</p>
        </div>
        <div className="highlight">
          <h3>🥗 Nutrition Tips</h3>
          <p>Get personalized meal recommendations for your goals.</p>
        </div>
        <div className="highlight">
          <h3>🧠 Mind & Body</h3>
          <p>Balance your physical and mental wellness daily.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to start your journey?</h2>
        <Link to="/contact" className="btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default Home;