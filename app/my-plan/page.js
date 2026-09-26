"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlan = () => {
  const {
    todayPlan,
    savedWorkouts,
    setTodayPlan,
    setSavedWorkouts,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState("today");
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const handleRemove = (id) => {
    setTodayPlan(todayPlan.filter((workout) => workout.id !== id));
  };

  const handleMarkDone = (id) => {
    const alreadyDone = completedWorkouts.includes(id);

    if (alreadyDone) {
      setCompletedWorkouts(
        completedWorkouts.filter((workoutId) => workoutId !== id),
      );
    } else {
      setCompletedWorkouts([...completedWorkouts, id]);
    }
  };

  const handleRemoveSaved = (id) => {
    setSavedWorkouts(
      savedWorkouts.filter((workout) => workout.id !== id),
    );
  };

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
              0,
            )}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Calories</p>
          <p className="mt-2 text-3xl font-black">
            {todayPlan.reduce(
              (total, workout) => total + workout.caloriesBurned,
              0,
            )}
          </p>
        </div>
      </div>

      {/* tab ui */}
      <div className="mb-8 flex gap-3 border-b border-white/10">
        <button
          onClick={() => setActiveTab("today")}
          className={`border-b-2 px-5 py-3 font-bold ${
            activeTab === "today"
              ? "border-[#ccff00] text-[#ccff00]"
              : "border-transparent text-white/50"
          }`}
        >
          Today’s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`border-b-2 px-5 py-3 font-bold ${
            activeTab === "saved"
              ? "border-[#ccff00] text-[#ccff00]"
              : "border-transparent text-white/50"
          }`}
        >
          Saved
        </button>
      </div>

      {/* todays plan */}
      {activeTab === "today" && (
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
              {todayPlan.map((workout) => {
                const isDone = completedWorkouts.includes(workout.id);

                return (
                  <div
                    key={workout.id}
                    className={`rounded-2xl border p-4 ${
                      isDone
                        ? "border-[#ccff00]/40 bg-[#ccff00]/5"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex gap-5">
                      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3
                            className={`font-bold ${
                              isDone
                                ? "text-white/40 line-through"
                                : ""
                            }`}
                          >
                            {workout.name}
                          </h3>

                          <button
                            onClick={() =>
                              handleRemove(workout.id)
                            }
                            className="text-white/40 hover:text-red-400"
                          >
                            ✕
                          </button>
                        </div>

                        <p className="mt-2 text-sm text-white/50">
                          {workout.duration} min ·{" "}
                          {workout.caloriesBurned} kcal
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                          <Link
                            href={`/workouts/${workout.id}`}
                            className="text-sm font-bold text-[#ccff00]"
                          >
                            View Details →
                          </Link>

                          <button
                            onClick={() =>
                              handleMarkDone(workout.id)
                            }
                            className={`rounded-full px-4 py-2 text-xs font-bold ${
                              isDone
                                ? "border border-[#ccff00] text-[#ccff00]"
                                : "bg-white text-black"
                            }`}
                          >
                            {isDone ? "✓ Done" : "Mark as Done"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* saved */}
      {activeTab === "saved" && (
        <section>
          <h2 className="mb-5 text-2xl font-bold uppercase">
            Saved for Later
          </h2>

          {savedWorkouts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/20 p-10 text-center">
              <p className="text-white/50">
                No saved workouts yet.
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
              {savedWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold">
                        {workout.name}
                      </h3>

                      <p className="mt-2 text-sm text-white/50">
                        {workout.equipment}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        handleRemoveSaved(workout.id)
                      }
                      className="text-white/40 hover:text-red-400"
                    >
                      ✕
                    </button>
                  </div>

                  <Link
                    href={`/workouts/${workout.id}`}
                    className="mt-4 inline-block text-sm font-bold text-[#ccff00]"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default MyPlan;