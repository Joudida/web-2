import React from "react";
import './features.css';

const Features = () => {
  const features = [
    {
      title: "Workout Tracking",
      desc: "Log your daily workouts, monitor progress, and reach your fitness goals faster.",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    },
    {
      title: "Meal Logging",
      desc: "Track your meals and calories to maintain a balanced diet and stay energized.",
      img: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
    },
    {
      title: "Sleep Monitoring",
      desc: "Analyze your sleep patterns to improve recovery and overall wellness.",
      img: "https://cdn-icons-png.flaticon.com/512/3448/3448662.png",
    },
    {
      title: "Wellness Tips",
      desc: "Get personalized health tips and motivational quotes to stay consistent.",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
    },
    {
      title: "Progress Dashboard",
      desc: "Visualize your improvement over time with charts and performance stats.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    },
  ];

  return (
    <div className="features-container">
      <h2>Our Features</h2>
      <p>Everything you need to track your health and fitness journey.</p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;