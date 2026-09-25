import Image from "next/image";
import Link from "next/link";

const WorkOutCard = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
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
    </Link>
  );
};

export default WorkOutCard;
