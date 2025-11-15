import React from "react";
import { Link } from "react-router-dom";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "Layla Haddad",
      specialty: "Personal Trainer",
      image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Maya Mansour",
      specialty: "Zumba & Dance Instructor",
      image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800", // new image
    },
    {
      id: 3,
      name: "Karim Nassar",
      specialty: "CrossFit & Strength Coach",
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Nadine Fares",
      specialty: "Nutrition & Wellness Expert",
      image: "https://images.pexels.com/photos/3769712/pexels-photo-3769712.jpeg?auto=compress&cs=tinysrgb&w=800", // new image
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Our Trainers
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {trainer.image && (
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {trainer.name}
              </h2>
              <p className="text-gray-600 mb-4">{trainer.specialty}</p>
              <Link
                to={`/trainer/${trainer.id}`}
                className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;