import React, { useState, useEffect } from "react";
import "./Trainers.css";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "Layla Haddad",
        specialty: "Personal Trainer",
        image:
          "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: 2,
        name: "Judy Dandachi",
        specialty: "Zumba & Dance Instructor",
        image:
          "https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=800", // جديدة (زومبا)
      },
      {
        id: 3,
        name: "Karim Nassar",
        specialty: "CrossFit & Strength Coach",
        image:
          "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: 4,
        name: "Jana Hashem",
        specialty: "Nutrition & Wellness Expert",
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800", // جديدة (تغذية)
      },
    ];

    setTrainers(mockData);
  }, []);

  return (
    <div className="trainers-page">
      <h2 className="trainers-title">Our Trainers</h2>
      <p className="trainers-subtitle">
        Meet our certified professionals ready to help you reach your goals.
      </p>

      <div className="trainers-grid">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;