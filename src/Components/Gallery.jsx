import React, { useState, useMemo } from "react";
import Card from "./Card";

const Gallery = () => {
  const [showCard, setShowCard] = useState(false);

  // ✅ Responsive hearts (less on mobile)
  const hearts = useMemo(() => {
    const count = window.innerWidth < 640 ? 15 : 30;
    return Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 5,
    }));
  }, []);

  const items = [
    { id: 1, img: "images/hand2.jpeg", text: "This is our last 2 days meeting still again hope we will meet in may 😊😍" },
    { id: 2, img: "images/last1.jpeg", text: "Your Text Here" },
    { id: 3, img: "images/my_sec.jpeg", text: "Your Text Here" },
    { id: 4, img: "images/my_third.jpeg", text: "Your Text Here" },
    { id: 5, img: "images/my_five.jpeg", text: "Your Text Here" },
    { id: 6, img: "images/my_fev5.jpeg", text: "Your Text Here" },
    { id: 7, img: "images/my_sev.jpeg", text: "Your Text Here" },
    { id: 8, img: "images/my_eight.jpeg", text: "Your Text Here" },
    { id: 9, img: "images/my_fav.jpeg", text: "Your Text Here" },
    { id: 10, img: "images/my_fev2.jpeg", text: "Your Text Here" },
    { id: 11, img: "images/my_fev3.jpeg", text: "Your Text Here" },
  ];

  if (showCard) {
    return <Card />;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-300 via-pink-400 to-red-300 px-4 py-6 overflow-hidden">

      {/* Floating Hearts */}
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="absolute text-red-500 animate-float text-xs sm:text-sm"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}

      {/* Title */}
      <div className="text-center text-white mb-8 sm:mb-10 px-2">
        <h1 className="font-bold drop-shadow-lg leading-tight text-[clamp(22px,6vw,48px)]">
          You Made <br /> My World <br /> Even More Beautiful 💖
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto relative z-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white"
          >
            <img
              src={item.img}
              alt="gallery"
              className="w-full h-48 sm:h-56 md:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-xs sm:text-sm font-semibold text-center px-3">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button
          onClick={() => setShowCard(true)}
          className="bg-white text-pink-500 font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition text-sm sm:text-base"
        >
          🎂 Open Birthday Message
        </button>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-20px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.7; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
