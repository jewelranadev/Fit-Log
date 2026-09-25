const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const getWorkoutById = async (id) => {
  const workouts = await getWorkouts();

  return workouts.find((workout) => workout.id === Number(id));
};

export { getWorkouts, getWorkoutById };