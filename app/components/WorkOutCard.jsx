import Image from "next/image";
import Link from "next/link";

const WorkOutCard = ({ workout }) => {
  return (
    <Link href={`/workouts/${workout.id}`} className="group">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition hover:-translate-y-1 hover:border-[#ccff00]/40">
        {/* image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* content */}
        <div className="p-5">
          {/* category */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00]/10 px-3 py-1 text-xs font-bold uppercase text-[#ccff00]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* workout name */}
          <h3 className="text-xl font-black uppercase tracking-wide">
            {workout.name}
          </h3>

          {/* equipment */}
          <p className="mt-2 text-sm text-white/50">
            {workout.equipment}
          </p>

          {/* stat */}
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/60">
            <span>⏱ {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkOutCard;