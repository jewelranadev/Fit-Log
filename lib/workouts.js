const getWorkouts = async () => {
  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/fitlog",
      {
        cache: "no-store",
      }
    );

    console.log("API STATUS:", res.status);

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();

    console.log("WORKOUT COUNT:", data.length);

    return data;
  } catch (error) {
    console.error("API FETCH ERROR:", error);
    throw error;
  }
};

const getWorkoutById = async (id) => {
  const workouts = await getWorkouts();

  const workout = workouts.find(
    (workout) => workout.id === Number(id)
  );

  console.log("REQUESTED ID:", id);
  console.log("FOUND WORKOUT:", workout);

  return workout;
};

export { getWorkouts, getWorkoutById };