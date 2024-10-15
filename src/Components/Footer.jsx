import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/Logo/Logow.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <div className="text-1xl font-bold">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[97px] h-[87px]" />
          </a>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <FaTiktok className="h-6 w-6" />
          </a>
        </div>
      </div>

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
