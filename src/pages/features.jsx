import React from "react";

const Features = () => {
  return (
    <div className="features-container" style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>Our Features</h1>

      <div
        className="features-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
      
        <div className="feature-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5344/5344749.png"
            alt="Activity Tracking"
            style={{ width: "100px", height: "100px", marginBottom: "20px" }}
          />
          <h3>Activity Tracking</h3>
          <p>Track your daily workouts, steps, and overall performance easily.</p>
        </div>

        <div className="feature-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
            alt="Healthy Meals"
            style={{ width: "100px", height: "100px", marginBottom: "20px" }}
          />
          <h3>Healthy Meals</h3>
          <p>Monitor your meals and get personalized nutrition recommendations.</p>
        </div>

     
        <div className="feature-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2784/2784459.png"
            alt="Hydration Reminder"
            style={{ width: "100px", height: "100px", marginBottom: "20px" }}
          />
          <h3>Hydration Reminder</h3>
          <p>Stay hydrated with reminders and track your daily water intake.</p>
        </div>
          <div className="feature-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Sleep Quality"
            style={{ width: "100px", height: "100px", marginBottom: "20px" }}
          />
          <h3>Sleep Quality</h3>
          <p>Log your sleep hours and get insights to improve your rest and focus.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;