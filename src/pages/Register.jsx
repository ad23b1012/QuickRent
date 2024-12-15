import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      setError("Email already registered!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userName", name); // Save the user's name for dynamic display
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Sign Up for <span className="text-white">QuickRent</span>
        </h1>
        <form onSubmit={handleRegister}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Confirm your password"
              required
            />
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-500 hover:shadow-cyan-400/50 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/" className="text-cyan-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
