"use client";

import { useWorkout } from "@/context/WorkoutContext";

const WorkoutActions = ({ workout }) => {
  const {
    todayPlan,
    setTodayPlan,
    savedWorkouts,
    setSavedWorkouts,
  } = useWorkout();

  const handleAddToPlan = () => {
    const alreadyAdded = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      return;
    }

    if (todayPlan.length >= 5) {
      return;
    }

    setTodayPlan([...todayPlan, workout]);
  };

  const handleSaveForLater = () => {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      return;
    }

    setSavedWorkouts([...savedWorkouts, workout]);
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={handleAddToPlan}
        className="rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
      >
        Add to today’s plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="rounded-full border border-white/20 px-6 py-3 font-bold"
      >
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;