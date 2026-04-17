import React from "react";

const Animate = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 via-pink-400 to-orange-500">

      {/* Card Wrapper */}
      <div className="relative">

        {/* Top Candle */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-14 bg-red-500 rounded-t-md">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>

        {/* Back Layer */}
        <div className="absolute w-[340px] h-[300px] bg-orange-200 rounded-3xl blur-sm translate-y-4"></div>

        {/* Main Card */}
        <div className="relative w-[340px] p-6 bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl shadow-2xl text-center">

          <h2 className="text-xl font-bold text-white mb-4 drop-shadow">
            Sweet Login 💖
          </h2>

          {/* Question 1 */}
          <p className="text-white text-sm mb-2">
            Will you be my best friend in every lifetime?
          </p>
          <input
            type="text"
            placeholder="Your Answer..."
            className="w-full px-4 py-2 mb-4 rounded-full outline-none bg-orange-100/70 text-center text-sm shadow-inner focus:ring-2 focus:ring-pink-400 transition"
          />

          {/* Question 2 */}
          <p className="text-white text-sm mb-2">
            you want me as my best friend in every birth.
          </p>
          <input
            type="text"
            placeholder="Your Answer..."
            className="w-full px-4 py-2 mb-4 rounded-full outline-none bg-orange-100/70 text-center text-sm shadow-inner focus:ring-2 focus:ring-pink-400 transition"
          />

          {/* Button */}
          <button className="mt-2 px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-white font-semibold shadow-lg transform hover:scale-105 transition duration-300">
            Let's Eat!
          </button>
        </div>
      </div>

      {/* Confetti Animation */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full animate-bounce"
          style={{
            background: ["#ff4d6d", "#ffd60a", "#4cc9f0"][i % 3],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default Animate;