import React from "react";
import Image1 from "../../assets/Logo/Logow.jpg"; // Replace this with your desired image
import Image2 from "../../assets/Header/image2.jpg"; // Replace this with your desired image
import Image3 from "../../assets/Header/image3.jpg"; // Replace this with your desired image

import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Slider settings as you mentioned
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
};

const WeeklySchedule = () => (
  <div className="bg-black bg-opacity-75 p-4 text-white rounded-t-md mt-8 mb-12 sm:mb-16 lg:mb-20">
    <h3 className="text-xs sm:text-sm md:text-lg font-bold text-center">
      Office Timings
    </h3>
    <ul className="py-2 text-xs sm:text-sm space-y-1">
      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
        <li key={index} className="flex justify-between">
          <span>{day}</span>
          <span>
            {day === "Saturday"
              ? "10am - 4pm"
              : day === "Sunday"
              ? "Closed"
              : "9am - 5pm"}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Tagline = () => (
  <Link to="/SellYourCar">
    <div className="absolute top-4 right-4 bg-white bg-opacity-75 p-3 text-white rounded-lg flex flex-col items-center cursor-pointer text-xs sm:text-sm md:text-md lg:text-lg z-20">
      <span className="font-bold flex items-center text-white-500">
        We Buy <FaCar className="text-lg sm:text-xl lg:text-2xl mx-1 text-red-500" />
      </span>
      <span className="font-bold mt-1 text-white-500">for Affordable <span className="text-red-500">£</span> </span>
    </div>
  </Link>
);

const Location = () => (
  <div className="text-center mt-8 sm:mt-10 lg:mt-12 px-4">
    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
      Visit Us At Our Location
    </h4>
    <p className="text-sm sm:text-base lg:text-lg text-black mt-2">
      20 Harding Road Woodley, Reading Berkshire RG5 3ER
    </p>
  </div>
);

const Header = () => {
  return (
    <header className="relative w-full h-auto overflow-hidden">
      {/* Blue Background with Phone Number */}
      <div className="bg-red-600 text-white text-center p-3 z-10 relative">
        <span className="text-sm sm:text-lg font-semibold">
          Call us now:{" "}
          <a href="tel:+44 7398 524761" className="text-white hover:underline">
            +44 7398 524761
          </a>
        </span>
      </div>

      {/* Slider Section */}
      <div className="relative w-full h-3/4 sm:h-3/4 md:h-2/3 lg:h-2/3">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <img
              src={Image1} // Replace with your desired image
              alt="Header Image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Add more slides as needed */}
          <div>
            <img
              src={Image2} // Replace with your image
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <img
              src={Image3} // Replace with your image
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
        {/* Tagline placed on top of the image */}
        <Tagline />
      </div>

      {/* Location Text Below Image */}
      <Location />

      {/* Timings Section */}
      <div className="relative z-10 mt-8 sm:mt-12 lg:mt-16 px-4 mb-16 sm:mb-20 lg:mb-24">
        <WeeklySchedule />
      </div>
    </header>
  );
};

export default Header;
