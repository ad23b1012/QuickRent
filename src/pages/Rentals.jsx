import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { gadgets } from "../assets/assets"; 

const Rentals = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGadgets = gadgets.filter((gadget) => {
    const matchesCategory = selectedCategory === "all" || gadget.category === selectedCategory;
    const matchesSearch =
      gadget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gadget.features.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <ScrollToTop />

      <Navbar />

      <div className="pt-20 p-8">
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          Available Rentals
        </h1>

        <div className="text-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for gadgets..."
            className="px-12 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="mb-8 text-center">
          <label className="text-lg text-gray-400 mb-2">Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {[
              "all",
              "category Cameras",
              "category Lenses",
              "category Audio",
              "category Lighting",
              "category Drones",
              "product Gimbals",
              "product 360 Cameras",
              "product ARRI Cameras",
              "product RED Cameras",
              "product mobiles",
              "product playstations",
              "product iots",
            ].map((category) => (
              <option key={category} value={category}>
                {category.replace("category ", "").replace("product ", "").toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
          {filteredGadgets.map((gadget) => (
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
      </div>

      <Footer />
    </div>
  );
};

export default Rentals;
