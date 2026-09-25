import { getWorkouts } from "@/lib/workouts";
import Hero from "./components/Hero";
import WorkOutCard from "./components/WorkOutCard";


export default async function Home() {
  const workouts = await getWorkouts();

  console.log(workouts);

  return (
    <main>
      <Hero />

      {/* Library section */}
      <section id="library" className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUTS
          </p>

          <h2 className="text-4xl font-black uppercase md:text-5xl">
            The Library
          </h2>

          <p className="mt-3 text-white/60">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkOutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </main>
  );
}
