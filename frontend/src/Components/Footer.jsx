import React, { useState } from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"; // Import Facebook icon
import { FaYoutube } from "react-icons/fa"; // Import YouTube icon
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

        {/* Social Media Links */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Copyright Section */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fair Deals Motors. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
