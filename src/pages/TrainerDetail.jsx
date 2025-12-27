import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  const handleBooking = async () => {
    try {
      await axios.post("http://localhost:5000/addbooking", {
        user_id: 1,
        trainer_id: trainer.id,
      });
      alert("Booking successful");
    } catch (err) {
      console.log(err);
      alert("Booking failed");
    }
  };

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/gettrainer/${id}`
        );
        setTrainer(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTrainer();
  }, [id]);

  if (!trainer) return <p>Loading...</p>;

  return (
    <div>
      <img src={trainer.image} alt={trainer.name} />
      <h2>{trainer.name}</h2>
      <p>{trainer.specialty}</p>
      <p>{trainer.bio}</p>
      <button onClick={handleBooking}>Book Session</button>
    </div>
  );
};

export default TrainerDetails;