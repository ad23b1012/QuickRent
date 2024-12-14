import React from "react";
import { FaLaptop, FaTruck, FaWallet } from "react-icons/fa";

const Features = () => {
  const features = [
    { icon: <FaLaptop size={50} />, title: "Wide Variety", desc: "Laptops, cameras, gaming consoles." },
    { icon: <FaWallet size={50} />, title: "Affordable Pricing", desc: "Budget-friendly rental plans." },
    { icon: <FaTruck size={50} />, title: "Quick Delivery", desc: "Fast delivery to your doorstep." },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-12">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-400/50 text-center text-white transition"
          >
            <div className="text-cyan-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
