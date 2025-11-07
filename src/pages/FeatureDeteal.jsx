import React from "react";
import { useParams } from "react-router-dom";
import "./FeatureDetail.css";

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
    image: "https://images.unsplash.com/photo-1594737625785-c6c86e3a2c5d",
  },
  crossfit: {
    title: "CrossFit & Strength",
    description:
      "Push your limits with powerful strength-based training sessions and dynamic workouts.",
    image: "https://images.unsplash.com/photo-1517964603305-11c0f5e86b5d",
  },
};

const FeatureDetail = () => {
  const { id } = useParams();
  const feature = featuresData[id];

  if (!feature) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Feature not found</h2>;
  }

  return (
    <div className="feature-detail">
      <img src={feature.image} alt={feature.title} className="feature-detail-img" />
      <div className="feature-detail-text">
        <h1>{feature.title}</h1>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureDetail;