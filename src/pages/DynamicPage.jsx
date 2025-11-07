import React from "react";
import { useParams } from "react-router-dom";
import { features } from "./features";
import "./DynamicPage.css";

const DynamicPage = () => {
  const { id } = useParams();
  const feature = features.find((f) => f.id === parseInt(id));

  if (!feature) {
    return <h2>Activity not found</h2>;
  }

  return (
    <div className="dynamic-page">
      <img src={feature.image} alt={feature.title} className="dynamic-image" />
      <h1>{feature.title}</h1>
      <p>{feature.description}</p>
    </div>
  );
};

export default DynamicPage;