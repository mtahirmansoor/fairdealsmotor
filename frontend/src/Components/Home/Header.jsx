import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Logo/Logow.png";
import Image2 from "../../assets/Header/Image2.jpg";
import Image3 from "../../assets/Header/Image3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for arrows
// Custom arrow component for the left arrow
const PrevArrow = ({ style, onClick }) => (
  <div
    className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronLeft className="text-white text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-gray-300" />
  </div>
);

// Custom arrow component for the right arrow
const NextArrow = ({ style, onClick }) => (
  <div
    className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronRight className="text-white text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-gray-300" />
  </div>
);

// Reusable Weekly Schedule Component with responsive design
const WeeklySchedule = () => (
  <div className="absolute bottom-4 left-4 bg-gray-700 bg-opacity-75 p-2 sm:p-3 md:p-4 text-white rounded-lg w-52 sm:w-60 md:w-64">
    <h3 className="text-sm sm:text-lg md:text-lg font-bold text-center">
      Garage Timings
    </h3>
    <ul className="py-2 text-xs sm:text-sm md:text-sm space-y-1 sm:space-y-2">
      <li className="flex justify-between">
        <span>Monday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Tuesday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Wednesday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Thursday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Friday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Saturday</span>
        <span>10am - 4pm</span>
      </li>
      <li className="flex justify-between">
        <span>Sunday</span>
        <span>Closed</span>
      </li>
    </ul>
  </div>
);

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {/* relative h-screen flex justify-center items-center */}
        <div className="relative  bg-black h-screen flex justify-center items-center">
          <img
            src={Image1}
            alt="Slide 1"
            className="h-screen flex items-center justify-center mx-auto" // Ensures the image is centered
          />
          <WeeklySchedule />
        </div>

        <div className="relative h-screen">
          <img
            src={Image2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <WeeklySchedule />
        </div>
        <div className="relative h-screen">
          <img
            src={Image3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <WeeklySchedule />
        </div>
      </Slider>
    </header>
  );
};

export default Header;
