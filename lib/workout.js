const getWorkouts = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    
    if (!res.ok) {
        throw new Error ("Failed to fetch workouts");
    }
    return res.json();
    
    
};
export default getWorkouts;