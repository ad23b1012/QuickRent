import React from "react";
import { useNavigate } from "react-router-dom";
import { gadgets } from "../assets/assets.js";

const Gadgets = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/rentals");
  };

  const displayedGadgets = gadgets.slice(0, 6);

  return (
    <section id="gadgets" className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10">
        Available Gadgets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {displayedGadgets.map((gadget) => (
          <div
            key={gadget.id}
            className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/50 text-center text-white transition"
          >
            <img
              src={gadget.image}
              alt={gadget.name}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{gadget.name}</h3>
            <p className="text-gray-400 mb-2">{gadget.features}</p>
            <p className="text-cyan-400 font-bold mb-4">{gadget.price}</p>
            <button className="px-4 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-500 transition">
              Rent Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleSeeMore}
          className="px-6 py-3 bg-cyan-400 text-black text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-400/50 hover:bg-cyan-500 transition"
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default Gadgets;
