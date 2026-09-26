"use client";


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlan = () => {

  const { todayPlan, savedWorkouts } = useWorkout();

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          YOUR WORKOUTS
        </p>

        <h1 className="text-4xl font-black uppercase md:text-5xl">
          My Plan
        </h1>

        <p className="mt-3 text-white/60">
          Manage your today’s workouts and saved exercises.
        </p>
      </div>

      {/* stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Exercises</p>
          <p className="mt-2 text-3xl font-black">
            {todayPlan.length}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Minutes</p>
          <p className="mt-2 text-3xl font-black">
            {todayPlan.reduce(
              (total, workout) => total + workout.duration,
              0
            )}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Calories</p>
          <p className="mt-2 text-3xl font-black">
            {todayPlan.reduce(
              (total, workout) => total + workout.caloriesBurned,
              0
            )}
          </p>
        </div>
      </div>

      {/* todays plan */}
      <section>
        <h2 className="mb-5 text-2xl font-bold uppercase">
          Today’s Plan
        </h2>

        {todayPlan.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/20 p-10 text-center">
            <p className="text-white/50">
              No workouts added yet.
            </p>

            <Link
              href="/"
              className="mt-5 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {todayPlan.map((workout) => (
              <div
                key={workout.id}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold">
                    {workout.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {workout.duration} min ·{" "}
                    {workout.caloriesBurned} kcal
                  </p>

                  <Link
                    href={`/workouts/${workout.id}`}
                    className="mt-3 inline-block text-sm font-bold text-[#ccff00]"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* saved.. */}
      <section className="mt-16">
        <h2 className="mb-5 text-2xl font-bold uppercase">
          Saved for Later
        </h2>

        {savedWorkouts.length === 0 ? (
          <p className="text-white/50">
            No saved workouts yet.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {savedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-bold">
                  {workout.name}
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  {workout.equipment}
                </p>

                <Link
                  href={`/workouts/${workout.id}`}
                  className="mt-3 inline-block text-sm font-bold text-[#ccff00]"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default MyPlan;