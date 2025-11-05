import React, { useState } from "react";
import "../pages/DynamicPage.css"; 
const DynamicPage = () => {
  
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState("");
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState("");
  const [progress, setProgress] = useState({ weight: "", calories: "" });

  
  const addWorkout = () => {
    if (newWorkout.trim() !== "") {
      setWorkouts([...workouts, newWorkout]);
      setNewWorkout("");
    }
  };

  
  const addMeal = () => {
    if (newMeal.trim() !== "") {
      setMeals([...meals, newMeal]);
      setNewMeal("");
    }
  };

  return (
    <div className="dynamic-container">
      <h2>HealthTrack Dashboard</h2>

      <div className="section">
        <h3>🏋️ Workout Logger</h3>
        <input
          type="text"
          placeholder="Enter workout name..."
          value={newWorkout}
          onChange={(e) => setNewWorkout(e.target.value)}
        />
        <button onClick={addWorkout}>Add Workout</button>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>{workout}</li>
          ))}
        </ul>
      </div>

      {/* Meal Tracker */}
      <div className="section">
        <h3>🍎 Meal Tracker</h3>
        <input
          type="text"
          placeholder="Enter meal name..."
          value={newMeal}
          onChange={(e) => setNewMeal(e.target.value)}
        />
        <button onClick={addMeal}>Add Meal</button>
        <ul>
          {meals.map((meal, index) => (
            <li key={index}>{meal}</li>
          ))}
        </ul>
      </div>

      {/* Progress Dashboard */}
      <div className="section">
        <h3>📊 Progress Dashboard</h3>
        <input
          type="text"
          placeholder="Current Weight (kg)"
          value={progress.weight}
          onChange={(e) => setProgress({ ...progress, weight: e.target.value })}
        />
        <input
          type="text"
          placeholder="Calories Today"
          value={progress.calories}
          onChange={(e) => setProgress({ ...progress, calories: e.target.value })}
        />
        <div className="progress-box">
          <p>🏋️ Weight: {progress.weight || "—"} kg</p>
          <p>🔥 Calories: {progress.calories || "—"} kcal</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;