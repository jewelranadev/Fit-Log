"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

const MyPlan = () => {
  const {
    todayPlan,
    savedWorkouts,
    setTodayPlan,
    setSavedWorkouts,
    completedWorkouts,
    setCompletedWorkouts,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState("today");

  const handleRemove = (id) => {
    setTodayPlan(todayPlan.filter((workout) => workout.id !== id));
    toast.success("Workout removed from today's plan");
  };

  const handleMarkDone = (id) => {
    const alreadyDone = completedWorkouts.includes(id);

    if (alreadyDone) {
      setCompletedWorkouts(
        completedWorkouts.filter((workoutId) => workoutId !== id)
      );

      toast.info("Workout marked as not done");
    } else {
      setCompletedWorkouts([...completedWorkouts, id]);

      toast.success("Workout marked as done");
    }
  };

  const handleRemoveSaved = (id) => {
    setSavedWorkouts(
      savedWorkouts.filter((workout) => workout.id !== id)
    );

    toast.success("Workout removed from saved");
  };

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
          YOUR WORKOUTS
        </p>

        <h1 className="text-4xl font-black uppercase md:text-5xl">
          MY PLAN
        </h1>

        <p className="mt-3 text-white/60">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics Summary */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Exercises</p>
          <p className="mt-2 text-3xl font-black">{todayPlan.length}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Minutes</p>
          <p className="mt-2 text-3xl font-black">{totalMinutes}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Calories</p>
          <p className="mt-2 text-3xl font-black">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex gap-3 border-b border-white/10">
        <button
          onClick={() => setActiveTab("today")}
          className={`border-b-2 px-5 py-3 font-bold ${
            activeTab === "today"
              ? "border-[#ccff00] text-[#ccff00]"
              : "border-transparent text-white/50"
          }`}
        >
          Today's Plan
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

      {/* Today's Plan */}
      {activeTab === "today" && (
        <section>
          {todayPlan.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/20 p-10 text-center">
              <h2 className="text-2xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-3 text-white/50">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="grid gap-5">
              {todayPlan.map((workout) => {
                const isDone = completedWorkouts.includes(workout.id);

                return (
                  <div
                    key={workout.id}
                    className={`rounded-2xl border p-4 transition ${
                      isDone
                        ? "border-[#ccff00]/40 bg-[#ccff00]/5"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      {/* Thumbnail */}
                      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-40">
                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3
                              className={`text-xl font-black uppercase ${
                                isDone
                                  ? "text-white/40 line-through"
                                  : ""
                              }`}
                            >
                              {workout.name}
                            </h3>

                            <p className="mt-2 text-sm text-white/50">
                              {workout.equipment}
                            </p>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => handleRemove(workout.id)}
                            className="text-xl text-white/40 transition hover:text-red-400"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                          <span>⏱ {workout.duration} min</span>
                          <span>🔥 {workout.caloriesBurned} kcal</span>
                          <span>⭐ {workout.rating}</span>
                        </div>

                        {/* Actions */}
                        <div className="mt-5 flex flex-wrap gap-3">
                          <Link
                            href={`/workouts/${workout.id}`}
                            className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:border-[#ccff00] hover:text-[#ccff00]"
                          >
                            View Details
                          </Link>

                          <button
                            onClick={() => handleMarkDone(workout.id)}
                            className={`rounded-full px-4 py-2 text-sm font-bold ${
                              isDone
                                ? "border border-[#ccff00] text-[#ccff00]"
                                : "bg-white text-black"
                            }`}
                          >
                            {isDone ? "✓ Done" : "✓ Mark as Done"}
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

      {/* Saved */}
      {activeTab === "saved" && (
        <section>
          {savedWorkouts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/20 p-10 text-center">
              <h2 className="text-2xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-3 text-white/50">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="grid gap-5">
              {savedWorkouts.map((workout) => (
                <div
                  key={workout.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    {/* Thumbnail */}
                    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-40">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-black uppercase">
                            {workout.name}
                          </h3>

                          <p className="mt-2 text-sm text-white/50">
                            {workout.equipment}
                          </p>
                        </div>

                        <button
                          onClick={() => handleRemoveSaved(workout.id)}
                          className="text-xl text-white/40 transition hover:text-red-400"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
                        <span>⏱ {workout.duration} min</span>
                        <span>🔥 {workout.caloriesBurned} kcal</span>
                        <span>⭐ {workout.rating}</span>
                      </div>

                      {/* View Details */}
                      <div className="mt-5">
                        <Link
                          href={`/workouts/${workout.id}`}
                          className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold transition hover:border-[#ccff00] hover:text-[#ccff00]"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
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