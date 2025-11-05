import React from "react";
import "./features.css";

function Features() {
  const features = [
    {
      title: "Personal Training",
      description:
        "Get customized workout programs designed for your goals and fitness level.",
      img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Nutrition Guidance",
      description:
        "Track your meals and learn how to balance proteins, carbs, and fats the right way.",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Zumba & Dance Classes",
      description:
        "Join energetic dance sessions to stay fit while having fun!",
      img: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "CrossFit & Strength",
      description:
        "Push your limits with strength-based training sessions and dynamic workouts.",
      img: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="features-container">
      <h1>Our Features</h1>
      <p className="intro-text">
        Explore everything HealthTrack has to offer — from personalized training
        plans to group classes and nutrition tracking.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.img} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;