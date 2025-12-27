import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Trainers.css";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/gettrainers");
        setTrainers(res.data);
      } catch (err) {
        console.log(err);
        setError("Failed to load trainers");
      }
    };

    fetchTrainers();
  }, []);

  return (
    <div className="trainers-container">
      {error && <p>{error}</p>}

      {trainers.map((t) => (
        <div key={t.id} className="trainer-card">
          <img src={t.image} alt={t.name} />
          <h3>{t.name}</h3>
          <p>{t.specialty}</p>
          <p>{t.gym}</p>
        </div>
      ))}
    </div>
  );
};

export default Trainers;