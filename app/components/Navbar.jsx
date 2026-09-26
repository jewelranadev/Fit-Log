"use client";

import { useWorkout } from "@/context/WorkoutContext";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const { todayPlan, savedWorkouts } = useWorkout();

  return (
    <nav className="relative border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        {/* logo */}
        <Link href="/" className="text-2xl font-black tracking-wider">
          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        {/* Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-white/60 transition hover:text-white"
            }
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className={
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-white/60 transition hover:text-white"
            }
          >
            MY PLAN
          </Link>
        </div>

        {/* counter */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
          >
            PLAN {todayPlan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold"
          >
            SAVED {savedWorkouts.length}
          </Link>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/20 px-3 py-2 md:hidden"
        >
          ☰
        </button>

        {/* mobile menu */}
        {isOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-b border-white/10 bg-[#0b0b0b] p-5 md:hidden">
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={
                  pathname === "/" ? "text-[#ccff00]" : "text-white/60"
                }
              >
                WORKOUT
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className={
                  pathname === "/my-plan"
                    ? "text-[#ccff00]"
                    : "text-white/60"
                }
              >
                MY PLAN
              </Link>

              <Link
                href="/my-plan"
                className="rounded-full bg-[#ccff00] px-4 py-2 text-center font-bold text-black"
                onClick={() => setIsOpen(false)}
              >
                PLAN {todayPlan.length}
              </Link>

              <Link
                href="/my-plan"
                className="rounded-full border border-white/30 px-4 py-2 text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                SAVED {savedWorkouts.length}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;