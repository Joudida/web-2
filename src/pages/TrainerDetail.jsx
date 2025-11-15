import React from "react";
import { useParams } from "react-router-dom";

const TrainerDetail = () => {
  const { id } = useParams();

  const trainers = [
    {
      id: 1,
      name: "Layla Haddad",
      specialty: "Personal Trainer",
      age: 28,
      experience: "5 years",
      gym: "Fit14 Gym - Koura",
      image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Maya Mansour",
      specialty: "Zumba & Dance Instructor",
      age: 26,
      experience: "4 years",
      gym: "Step By Step Gym",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800", // updated image
    },
    {
      id: 3,
      name: "Karim Nassar",
      specialty: "CrossFit & Strength Coach",
      age: 30,
      experience: "6 years",
      gym: "Power House Gym",
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Nadine Fares",
      specialty: "Nutrition & Wellness Expert",
      age: 32,
      experience: "8 years",
      gym: "HealthTrack Nutrition Center",
      image: "https://images.pexels.com/photos/3769712/pexels-photo-3769712.jpeg?auto=compress&cs=tinysrgb&w=800", // updated image
    },
  ];

  const trainer = trainers.find((t) => t.id === parseInt(id));

  if (!trainer) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-2xl text-red-500">
        Trainer not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Image */}
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-64 h-64 rounded-xl object-cover shadow-md"
        />

        {/* Info */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{trainer.name}</h2>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Specialty:</span> {trainer.specialty}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Gym:</span> {trainer.gym}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Age:</span> {trainer.age}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Experience:</span> {trainer.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetail;