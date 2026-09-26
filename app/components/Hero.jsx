import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* left side of hero */}
        <div>
          <p className="mb-5 text-sm font-bold tracking-[0.3em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 font-bold uppercase text-black transition hover:scale-105"
          >
            <span>Browse Workouts</span>
            <span>→</span>
          </Link>
        </div>

        {/* right side of hero */}
        <div className="relative aspect-square w-full">
          <Image
            src="/banner.png"
            alt="FitLog workout"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;