import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Trainers.css';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/trainers')
      .then(res => setTrainers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="trainers-container">
      {trainers.map(trainer => (
        <div key={trainer.id} className="trainer-card">
          <img src={trainer.image} alt={trainer.name} className="trainer-image" />
          <h3 className="trainer-name">{trainer.name}</h3>
          <p className="trainer-specialty">{trainer.specialty}</p>
          <p className="trainer-experience">Experience: {trainer.experience} years</p>
          <p className="trainer-gym">{trainer.gym}</p>
          <p className="trainer-bio">{trainer.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Trainers;