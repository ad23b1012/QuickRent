import React from "react";
import { Link } from "react-scroll";
import { gadgets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center h-full z-10 relative">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to <span className="text-cyan-400">QuickRent</span>
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          Future-ready gadget rentals at your fingertips.
        </p>
        <Link
          to="gadgets"
          smooth={true}
          duration={500}
          className="px-6 py-3 bg-cyan-400 text-black text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-400/50 hover:bg-cyan-500 transition cursor-pointer animate-pulse"
        >
          Explore Gadgets
        </Link>
      </div>

      {gadgets.slice(0, 9).map((gadget, index) => (
        <div
          key={gadget.id}
          className={`absolute w-40 h-40 bg-gradient-to-br from-gray-900/80 via-black/70 to-gray-800/80 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center text-white transition transform hover:scale-110 z-0`}
          style={{
            top: `${6 + index * 10}%`, // Random vertical positions
            left: `${25 * ((index % 3) + 0.75)}%`, // Random horizontal positions
            animation: `float ${3 + index}s ease-in-out infinite`,
          }}
        >
          <img
            src={gadget.image}
            alt={gadget.name}
            className="w-20 h-20 object-contain mb-2"
          />
          <p className="text-sm font-semibold">{gadget.name}</p>
        </div>
      ))}

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
