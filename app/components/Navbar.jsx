"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative border-b border-white/10">
      <div className="flex justify-between items-center px-4 py-5 container mx-auto">
        {/* logo */}
        <Link href="/" className="text-2xl font-black tracking-wider">
          FIT<span className="text-[#ccff00]">LOG</span>
        </Link>

        {/* Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-[#ccff00]">
            WORKOUT
          </Link>
          <Link
            href="/my-plan"
            className="text-white/60 transition hover:text-white"
          >
            MYPLAN
          </Link>
        </div>
        {/* counter */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="
          rounded-full bg-[#ccff00] pc-4 py-2 text-sm font-bold text-black"
          >
            PLAN
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold"
          >
            SAVED
          </Link>
        </div>

        {/* for responsive mobile menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/20 px-3 py-2 md:hidden"
        >
          ☰
        </button>
        {isOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-b border-white/10 bg-[#0b0b0b] p-5 md:hidden">
            <div className="flex flex-col gap-5">
              <Link href="/" onClick={() => setIsOpen(false)}>
                WORKOUT
              </Link>

              <Link href="/my-plan" onClick={() => setIsOpen(false)}>
                MY PLAN
              </Link>

              <Link
                href="/my-plan"
                className="rounded-full bg-[#ccff00] px-4 py-2 text-center font-bold text-black"
                onClick={() => setIsOpen(false)}
              >
                PLAN
              </Link>

              <Link
                href="/my-plan"
                className="rounded-full border border-white/30 px-4 py-2 text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                SAVED
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
