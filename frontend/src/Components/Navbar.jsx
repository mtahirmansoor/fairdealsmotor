import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"; // Import Facebook icon
import { FaYoutube } from "react-icons/fa"; // Import YouTube icon
import Logo from "../assets/Logo/Logow.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white py-4 px-2 md:px-8 shadow-md ${isOpen ? "h-screen" : ""}`}>
      {/* Container */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-1xl font-bold">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[97px] h-[87px]" />
          </a>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex">
          <ul className="flex list-none gap-7">
            <Link to="/stock" className="hover:text-blue-300">
              Stock
            </Link>
            <Link to="/finance" className="hover:text-blue-300">
              Finance
            </Link>
            <Link to="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </ul>
        </div>

        {/* Right Section (Search, Login, Button) for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Icon */}
         

          {/* Conditionally Rendered Search Bar */}
         
          {/* Login Link */}
         

          {/* Social Media Icons */}
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

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (Menu) - Show when isOpen is true */}
      {isOpen && (
        <div className="flex flex-col gap-4 md:p-4">
          <Link to="/stock" className="hover:text-blue-300">
            Stock
          </Link>
          <Link to="/finance" className="hover:text-blue-300">
            Finance
          </Link>
          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
