import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  // Reduce hearts on mobile for performance
  const hearts = useMemo(() => {
    const count = window.innerWidth < 640 ? 20 : 40;
    return Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 5,
      size: 10 + Math.random() * 12,
    }));
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-purple-500 via-pink-400 to-red-400">

      {/* Floating Hearts */}
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="absolute text-red-500 animate-float"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}

      {/* PROFILE CIRCLE */}
      <div className="absolute top-[8%] sm:top-[10%] left-1/2 -translate-x-1/2 z-10">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">
          
          <img
            src="/images/my_hand.jpeg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="text-center text-white z-10 px-4 mt-32 sm:mt-40 md:mt-48">

        <h1 className="font-semibold drop-shadow-lg text-[clamp(24px,6vw,48px)]">
          Something Special
        </h1>

        <p className="mt-3 italic text-white/80 text-[clamp(14px,4vw,22px)]">
          Awaits You
        </p>

        <button
          onClick={() => navigate("/gallery")}
          className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition-all duration-300 shadow-xl text-white font-medium text-sm sm:text-base"
        >
          Start Our Journey 💖
        </button>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
        }

        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Form;
