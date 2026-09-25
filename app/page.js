
import getWorkouts from "@/lib/workout";
import Hero from "./components/Hero";

export default async function Home() {
  const workouts = await getWorkouts();

  console.log(workouts);

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="container mx-auto px-4 py-16 md:py-24"
      >
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
      </section>
    </main>
  );
}