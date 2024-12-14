// src/pages/Dashboard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Gadgets from "../components/Gadgets";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/"); // Redirect to login if not logged in
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Gadgets />
      <Contact />
      <Footer />
    </>
  );
};

export default Dashboard;
