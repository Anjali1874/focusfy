import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="backdrop-blur-md bg-gradient-to-r from-yellow-200 to-red-700 py-12 border-2 p-20 rounded">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-white px-6 md:px-0">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-2">
            <img src="src\public\logo.png" alt="FocusFy Logo" className="h-10 w-10" />
            <h2 className="text-3xl font-bold text-yellow-400">FocusFy</h2>
          </div>
          <p className="text-center md:text-left text-black max-w-xs">
            Stay focused, stay productive. FocusFy helps you improve your study habits with real-time feedback and personalized insights.
          </p>
        </div>

        {/* Contact and Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
          <p className="text-gray-300">Email: <a href="mailto:support@focusfy.com" className="hover:text-yellow-400 transition duration-300 ease-in-out">support@focusfy.com</a></p>
          <p className="text-gray-300">Phone: <a href="tel:+123456789" className="hover:text-yellow-400 transition duration-300 ease-in-out">+1 234 567 89</a></p>
          
          <div className="flex space-x-6 mt-2">
            <a href="https://twitter.com" className="text-yellow-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-125">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://facebook.com" className="text-yellow-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-125">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-yellow-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-125">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400">
        &copy; 2024 FocusFy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
