import React from "react";
import { useParams } from "react-router-dom";

const featuresData = {
  personal: {
    title: "Personal Training",
    description:
      "Our personal training sessions are designed to help you achieve your fitness goals with one-on-one coaching and tailored workout programs.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
  nutrition: {
    title: "Nutrition Guidance",
    description:
      "Learn to balance your diet with the right mix of proteins, carbs, and fats to stay healthy and energized.",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
  },
    zumba: {
  title: "Zumba & Dance Classes",
  description:
    "Join fun and energetic dance sessions to stay fit while having an amazing time!",
  image: "https://images.pexels.com/photos/3769735/pexels-photo-3769735.jpeg?auto=compress&cs=tinysrgb&w=800", // real Zumba class image
},
  crossfit: {
    title: "CrossFit & Strength",
    description:
      "Push your limits with powerful strength-based training sessions and dynamic workouts.",
    image: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
};

const FeatureDetail = () => {
  const { id } = useParams();
  const feature = featuresData[id];

  if (!feature) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center text-2xl text-red-500">
        Feature not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full lg:w-1/2 h-64 lg:h-96 rounded-xl object-cover shadow-md"
        />

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h1>
          <p className="text-gray-700 text-lg">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;