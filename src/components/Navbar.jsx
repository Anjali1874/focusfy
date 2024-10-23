import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile Icon
import { Link, useNavigate } from "react-router-dom"; // For navigation

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // To programmatically navigate

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  const handleLogin = () => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home after logging out
  };

  return (
    <>
      <nav className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg fixed top-5 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a
                  onClick={() => handleScroll("home")}
                  className="flex items-center py-5 px-2 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold"
                >
                  <img
                    src="src/public/logo.png"
                    className="h-10 w-30 mr-2"
                    alt="FocusFy Logo"
                  />
                  <span className="font-bold text-4xl text-yellow-500">FocusFy</span>
                </a>
              </div>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                onClick={() => handleScroll("home")}
                className="cursor-pointer py-2 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
              >
                Home
              </a>
              <a
                onClick={() => handleScroll("about")}
                className="cursor-pointer py-2 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
              >
                About
              </a>
              <a
                onClick={() => handleScroll("services")}
                className="cursor-pointer py-2 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
              >
                Services
              </a>
              <a
                onClick={() => handleScroll("contact")}
                className="cursor-pointer py-2 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
              >
                Contact
              </a>

              {/* Conditional rendering of Login or Profile icon */}
              {isLoggedIn ? (
                <div className="relative group">
                  <FaUserCircle
                    size={40}
                    className="text-yellow-500 cursor-pointer hover:text-yellow-600 transition duration-300"
                  />
                  {/* Dropdown menu on hover */}
                  <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2">
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition duration-300"
                    >
                      My Profile
                    </a>
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition duration-300"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  onClick={handleLogin}
                  className="cursor-pointer py-2 px-4 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-700 transition duration-300 shadow-md"
                >
                  Login
                </a>
              )}
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6 text-yellow-500 hover:text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            <a
              onClick={() => handleScroll("home")}
              className="block py-2 px-4 cursor-pointer text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              Home
            </a>
            <a
              onClick={() => handleScroll("about")}
              className="block py-2 px-4 cursor-pointer text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              About
            </a>
            <a
              onClick={() => handleScroll("services")}
              className="block py-2 px-4 cursor-pointer text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              Services
            </a>
            <a
              onClick={() => handleScroll("contact")}
              className="block py-2 px-4 cursor-pointer text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              Contact
            </a>
            {isLoggedIn ? (
              <a
                onClick={handleLogout}
                className="block py-2 px-4 cursor-pointer text-yellow-500 hover:bg-yellow-50 text-xl"
              >
                Logout
              </a>
            ) : (
              <a
                onClick={handleLogin}
                className="block py-2 px-4 cursor-pointer text-yellow-500 hover:bg-yellow-50 text-xl"
              >
                Login
              </a>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
