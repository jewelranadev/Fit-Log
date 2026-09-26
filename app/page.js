import { getWorkouts } from "@/lib/workouts";
import Hero from "./components/Hero";
import Library from "./library/Library";

export default async function Home() {
  const workouts = await getWorkouts();

  console.log(workouts);

  return (
    <main>
      <Hero />

      <Library workouts={workouts} />
    </main>
  );
}