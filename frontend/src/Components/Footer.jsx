import React from "react";
import { FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "../assets/Logo/Logo1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Logo and Get Directions Button */}
        <div className="flex flex-col items-center text-1xl font-bold mb-4 md:mb-0">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[97px] h-[87px]" />
          </a>
          <Link
            to="/contact"
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors duration-200"
          >
            Get Directions
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-gray-400"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://youtube.com/@fairdealsmotorlimited?si=M6CxVn_S4PM_fTBF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-gray-400"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@fair.deals.motor?_t=8qlBMiiXN2H&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-400"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="text-center mt-4">
        <p>
          <a href="mailto:Fairdealsmotor@gmail.com" className="text-blue-400 hover:underline">
            Fairdealsmotor@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+447398524761" className="text-blue-400 hover:underline">
            +44 7398 524761
          </a>
        </p>
      </div>

      {/* Contact Information Section */}
     

      {/* Copyright Section */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fair Deals Motors. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
