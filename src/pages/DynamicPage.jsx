import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DynamicPage.css";
import { Link } from "react-router-dom";

const DynamicPage = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/gettrainers");
        setTrainers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <div className="trainers-container">
      {trainers.map((t) => (
        <div key={t.id} className="trainer-card">
          <img src={t.image} alt={t.name} />
          <h3>{t.name}</h3>
          <p>{t.specialty}</p>
          <p>{t.gym}</p>
          <Link to={`/trainer/${t.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default DynamicPage;