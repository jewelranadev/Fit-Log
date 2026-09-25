import Image from "next/image";

const WorkOutCard = ({ workout }) => {
  return (
    <article>
      <Image 
      src={workout.image}  
      alt={workout.name}   
      width={740} 
      height={500} 
       />

      <div>
        <p>{workout.muscleGroups.join(" • ")}</p>
        <h3>{workout.name}</h3>
        <p>{workout.equipment}</p>
      </div>
      <div>
        <span>{workout.duration} min</span>
        <span>{workout.caloriesBurned} kcal</span>
        <span>⭐ {workout.rating}</span>
      </div>
    </article>
  );
};

export default WorkOutCard;
