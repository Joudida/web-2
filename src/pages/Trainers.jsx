import React, { useEffect, useState } from "react";
import "./Trainers.css";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching trainers:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading trainers...</p>;
  }

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