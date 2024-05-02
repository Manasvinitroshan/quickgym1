import React, { useState, useEffect } from 'react';
import './Profile.css';


const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Loves to exercise, be fit, and maintain a healthy lifestyle.",
    imageUrl: "https://via.placeholder.com/150"
  };


  // State to manage workout streak
  const [streak, setStreak] = useState(0);


  useEffect(() => {
    // Simulate loading the streak count from a local storage or API on component mount
    const savedStreak = localStorage.getItem('workoutStreak') || 0;
    setStreak(parseInt(savedStreak, 10));
  }, []);


  useEffect(() => {
    // Save the streak to local storage whenever it changes
    localStorage.setItem('workoutStreak', streak.toString());
  }, [streak]);


  // Function to increment the streak, could be triggered by a real event
  const incrementStreak = () => {
    setStreak(streak + 1);
  }


  return (
    <div className="profile-container">
      <img src={user.imageUrl} alt="profile" className="profile-image"/>
      <h1>{user.name}</h1>
      <p className="profile-bio">{user.bio}</p>
      <p className="profile-email">{user.email}</p>
      <p className="workout-streak">Workout Streak: {streak} days</p>
      <button onClick={incrementStreak}>Log Workout</button> {/* Button to simulate logging a workout */}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <Profile />
    </div>
  );
}


export default App;


