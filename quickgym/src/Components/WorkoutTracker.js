import React, { useState } from 'react';
import './index.css';
import './WorkoutTracker.js'; 


const Menu = () => {
  const [selectedExercise, setSelectedExercise] = useState('');
  const exercises = ['Push-up', 'Pull-up', 'Squat', 'Deadlift', 'Bench Press'];


  return (
    <div className="center orange-bg">
      <div className="white-bg length">
        <select
          className="dropdownClass"
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
        >
          <option value="">Select Exercise</option>  // Default option
          {exercises.map((exercise, index) => (
            <option key={index} value={exercise}>{exercise}</option>
          ))}
        </select>
        <button className="buttonClass">Set</button>
        <button className="buttonClass">Rep</button>
      </div>
    </div>
  );
}


export default Menu;
