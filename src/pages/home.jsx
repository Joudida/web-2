import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold mb-3">Welcome to HealthTrack </h1>
      <p className="lead">
        Your personal fitness & wellness tracker.log your meals, workouts, and stay motivated!
      </p>
      <div className="mt-4">
        <Link to="/features" className="btn btn-primary mx-2">
        Explore features
        </Link>
        <Link to="/contact" className="btn btn-outline-secondary mx-2">
         contact us
        </Link>
      </div>
      <img 
      src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
      alt="fitness"
      className="img-fluid mt-5"
      style={{ width: "250px"}}
      />
    </div>
  );
};

export default Home;