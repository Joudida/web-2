import React from "react";
import "./DynamicPage.css";
import { useParams } from "react-router-dom";

const DynamicPage = () => {
  const { id } = useParams();

  const activities = [
    {
      id: 1,
      title: "Personal Training",
      image:
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
      description:
        "Achieve your fitness goals with personalized training sessions designed just for you.",
    },
    {
      id: 2,
      title: "CrossFit",
      image:
        "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg",
      description:
        "Join our high-intensity CrossFit classes and push your limits every day!",
    },
    {
      id: 3,
      title: "Zumba",
      image:
        "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
      description:
        "Have fun while burning calories with energetic Zumba dance workouts.",
    },
  ];

  const activity = activities.find((item) => item.id === Number(id));

  if (!activity) {
    return <h2 className="not-found">Activity not found</h2>;
  }

  return (
    <div className="dynamic-container">
      <h1>{activity.title}</h1>
      <img src={activity.image} alt={activity.title} className="dynamic-image" />
      <p>{activity.description}</p>
    </div>
  );
};

export default DynamicPage;