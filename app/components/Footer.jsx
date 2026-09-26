import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-black tracking-wider">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </div>

        <p className="text-center text-sm text-white/50 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;