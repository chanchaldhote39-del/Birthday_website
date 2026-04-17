import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const BirthdayCard = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-rose-950">

      <div className="relative w-full h-full bg-gradient-to-br from-rose-700 via-rose-800 to-rose-950 flex items-center justify-center">

        {/* LEFT HEARTS */}
        <div className="absolute left-[-5%] top-0 bottom-0 w-1/2 opacity-60 md:opacity-80 pointer-events-none">
          <HeartIcon className="absolute top-[10%] left-[5%] w-16 h-16 md:w-32 md:h-32 rotate-12 text-rose-600" />
          <HeartIcon className="absolute top-[30%] left-[-2%] w-24 h-24 md:w-48 md:h-48 -rotate-12 text-rose-900" />
          <HeartIcon className="absolute bottom-[10%] left-[8%] w-20 h-20 md:w-40 md:h-40 rotate-45 text-rose-800" />
          <HeartIcon className="absolute top-[50%] left-[15%] w-12 h-12 md:w-24 md:h-24 -rotate-12 text-rose-500" />
        </div>

        {/* RIGHT HEARTS */}
        <div className="absolute right-[-5%] top-0 bottom-0 w-1/2 opacity-60 md:opacity-80 pointer-events-none scale-x-[-1]">
          <HeartIcon className="absolute top-[10%] left-[5%] w-16 h-16 md:w-32 md:h-32 rotate-12 text-rose-600" />
          <HeartIcon className="absolute top-[30%] left-[-2%] w-24 h-24 md:w-48 md:h-48 -rotate-12 text-rose-900" />
          <HeartIcon className="absolute bottom-[10%] left-[8%] w-20 h-20 md:w-40 md:h-40 rotate-45 text-rose-800" />
          <HeartIcon className="absolute top-[50%] left-[15%] w-12 h-12 md:w-24 md:h-24 -rotate-12 text-rose-500" />
        </div>

        {/* CENTER FADED HEART */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <HeartIcon className="w-[60%] md:w-[80%] h-[60%] md:h-[80%] text-rose-300" />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 text-center select-none px-4 max-w-[95%]">

          <h2 className="font-serif italic text-white tracking-wide mb-2 text-[clamp(20px,4vw,40px)]">
            Let's Celebrate
          </h2>

          <h1 className="font-bold italic text-white drop-shadow-2xl leading-tight py-2 text-[clamp(28px,10vw,120px)]">
            Happy Birthday Anuj
          </h1>

          <div className="flex items-center justify-center mt-4 space-x-2 md:space-x-4">
            <span className="font-serif text-white uppercase tracking-widest text-[clamp(20px,6vw,60px)]">
              L
            </span>

            <HeartIcon className="text-white fill-current animate-pulse w-6 h-6 md:w-12 md:h-12" />

            <span className="font-serif text-white uppercase tracking-widest text-[clamp(20px,6vw,60px)]">
              ve
            </span>
          </div>

          <button
            onClick={() => navigate("/form")}
            className="mt-8 md:mt-12 px-6 md:px-10 py-3 md:py-4 bg-white text-rose-900 font-bold rounded-full shadow-xl hover:bg-rose-100 transform hover:scale-105 transition-all duration-300 animate-bounce text-sm md:text-lg"
          >
            CLICK HERE 💖
          </button>
        </div>

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none"></div>

      </div>
    </div>
  );
};

// HEART ICON
const HeartIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default BirthdayCard;
