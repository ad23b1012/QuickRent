import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10">
        Contact Us
      </h2>
      <form className="max-w-lg mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Message</label>
          <textarea
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-400 text-black py-3 rounded hover:bg-cyan-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
