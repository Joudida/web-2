import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Welcome to <span>HealthTrack</span></h1>
        <p>
          Your personal fitness & wellness tracker.  
          Log your meals, workouts, and stay motivated!
        </p>
        <div className="home-buttons">
          <Link to="/features" className="home-btn">Explore features</Link>
          <Link to="/contact" className="home-btn outline">Contact us</Link>
        </div>
      </div>

      <div className="home-image">
        <img src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png" alt="fitness" />
      </div>
    </div>
  );
};

export default Home;