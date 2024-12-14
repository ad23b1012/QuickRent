import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleLogoClick = () => {
    if (window.scrollToTop) {
      window.scrollToTop(); // Manually trigger the ScrollToTop function
    }
  };

  return (
    <nav className="backdrop-blur-lg bg-opacity-20 bg-black fixed top-0 w-full p-4 flex justify-between items-center shadow-lg z-50">
      {/* Logo */}
      <h1
        onClick={handleLogoClick}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 cursor-pointer"
      >
        QuickRent
      </h1>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex space-x-6 text-white text-sm sm:text-base md:text-lg lg:text-xl">
        <li>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="gadgets"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Gadgets
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400 transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="text-cyan-400 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 shadow-lg text-base sm:text-lg">
          <li>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="gadgets"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gadgets
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="bg-cyan-400 text-black px-6 py-2 rounded-md hover:bg-cyan-500 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      )}

      {/* Desktop Logout Button */}
      <button
        onClick={handleLogout}
        className="hidden md:block bg-cyan-400 text-black px-6 py-2 rounded-md hover:bg-cyan-500 transition text-sm sm:text-base md:text-lg"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
