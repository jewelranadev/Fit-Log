import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="mb-3 text-sm font-black tracking-[0.3em] text-[#ccff00]">
          404 ERROR
        </p>

        <h1 className="text-5xl font-black uppercase md:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-white/50">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;