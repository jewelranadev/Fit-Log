"use client";

import { useState } from "react";
import WorkOutCard from "@/app/components/WorkOutCard";

const Library = ({ workouts }) => {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <section
      id="library"
      className="container mx-auto px-4 py-16 md:py-20"
    >
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
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

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none rounded-full border border-white/20 bg-[#111111] px-5 py-3 pr-10 text-sm font-bold text-white outline-none focus:border-[#ccff00]"
          >
            <option value="duration">Sort By: Duration</option>
            <option value="calories">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>

          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
            ↓
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkOutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
};

export default Library;