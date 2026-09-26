"use client";

import { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        setTodayPlan,
        savedWorkouts,
        setSavedWorkouts,
      
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  return useContext(WorkoutContext);
};