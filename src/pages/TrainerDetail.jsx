import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TrainerDetails.css';

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/trainers/${id}`)
      .then(res => setTrainer(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if(!trainer) return <p>Loading...</p>;

  return (
    <div className="trainer-details-container">
      <img src={trainer.image} alt={trainer.name} className="trainer-details-image" />
      <h2>{trainer.name}</h2>
      <p><strong>Specialty:</strong> {trainer.specialty}</p>
      <p><strong>Experience:</strong> {trainer.experience} years</p>
      <p><strong>Gym:</strong> {trainer.gym}</p>
      <p>{trainer.bio}</p>

      <button className="book-button">Book Session</button>
    </div>
  );
};

export default TrainerDetails;
