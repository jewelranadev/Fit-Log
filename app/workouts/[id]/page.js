import Image from "next/image";
import { getWorkoutById } from "@/lib/workouts";
import WorkoutActions from "@/app/components/WorkoutActions";


const WorkoutDetails = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    return (
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Workout not found</h1>

        <p className="mt-3 text-white/60">
          The workout you are looking for does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        {/* image */}
        <div className=" h-[400px] overflow-hidden rounded-2xl relative">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* details */}
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ccff00]">
            {workout.muscleGroups.join(" • ")}
          </p>

          <h1 className="text-4xl font-black uppercase md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-white/60">{workout.description}</p>

          {/* spec */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/40">Equipment</p>
              <p className="mt-1 font-semibold">{workout.equipment}</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/40">Difficulty</p>
              <p className="mt-1 font-semibold">{workout.difficulty}</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/40">Duration</p>
              <p className="mt-1 font-semibold">{workout.duration} min</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/40">Rating</p>
              <p className="mt-1 font-semibold">⭐ {workout.rating}</p>
            </div>
          </div>

          {/* instructions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold uppercase">Instructions</h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 text-white/60">
                  <span className="font-bold text-[#ccff00]">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* actions  */}
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;
