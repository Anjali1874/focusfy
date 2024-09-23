import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/30 backdrop-blur-lg shadow-lg rounded-lg fixed top-5 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a
                  href="home"
                  className="flex items-center py-5 px-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold"
                >
                  <img
                    src="/logo.png"
                    className="h-10 w-30 mr-2"
                    alt="FocusFy Logo"
                  />
                  <span className="font-bold text-4xl text-yellow-500">FocusFy</span>
                </a>
              </div>

              {/* Primary Nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="home"
                  className="py-5 px-3 text-yellow-500 hover:text-yellow-600 text-xl"
                >
                  Home
                </a>
                <a
                  href="about"
                  className="py-5 px-3 text-yellow-500 hover:text-yellow-600 text-xl"
                >
                  About
                </a>
                <a
                  href="services"
                  className="py-5 px-3 text-yellow-500 hover:text-yellow-600 text-xl"
                >
                  Services
                </a>
                <a
                  href="contact"
                  className="py-5 px-3 text-yellow-500 hover:text-yellow-600 text-xl"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Secondary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-2 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-50 transition duration-300"
              >
                Sign Up
              </a>
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
              href="#"
              className="block py-2 px-4 text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              Services
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-yellow-500 hover:bg-yellow-50 text-xl"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
      <div id="home" className="h-500" ></div>
      <div id="about" className="h-500" ></div>
      <div id="services" className="h-500" ></div>
      <div id="contact" className="h-500" ></div>
    </>
  );
};

export default Navbar;