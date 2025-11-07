import React from "react";
import "./Trainers.css";

const trainersData = [
  {
    id: 1,
    name: "Judy Dandachi",
    specialty: "Zumba & Dance Instructor",
    experience: "3 years",
    image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Mark Khalil",
    specialty: "CrossFit Coach",
    experience: "5 years",
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Layla Mansour",
    specialty: "Personal Trainer",
    experience: "4 years",
    image: "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Omar Haddad",
    specialty: "Nutrition & Strength Coach",
    experience: "6 years",
    image: "https://images.pexels.com/photos/4753892/pexels-photo-4753892.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Trainers = () => {
  return (
    <div className="trainers-section">
      <h2 className="trainers-title">Meet Our Trainers</h2>
      <p className="trainers-subtitle">
        Our certified professionals are here to guide and motivate you every step of the way.
      </p>

      <div className="trainers-grid">
        {trainersData.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.specialty}</p>
            <span>{trainer.experience}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;