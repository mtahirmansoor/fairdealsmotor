import React from "react";
import { FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import financeImage from "../../assets/Header/finance.jpg"; 
import stockImage from "../../assets/Header/sellcar.jpg"; 
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="flex flex-col items-center py-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <div className="flex flex-wrap justify-center sm:justify-evenly max-w-[1200px] pt-2">
        
        {/* Finance Section */}
       

        {/* Stock Section */}
        <div
          className="flex flex-col items-start max-w-[420px] m-4 cursor-pointer p-4 bg-black text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
         
        >
           <Link to="/stock">
          <FaChartLine className="h-10 w-10 text-red-600 mb-2" />
          <p className="font-bold text-[18px] mb-2">Browse all stock</p>
          <p>Stay up-to-date with the latest stock market trends and news.</p>
          </Link>
        </div>

        {/* Finance Image Section */}
        <div
          className="flex flex-col items-start max-w-[420px] m-4 p-4 bg-white rounded-lg shadow-lg cursor-pointer"
         
        >
           <Link to="/finance">
          <p className="font-bold text-[18px] text-black mb-2">Finance</p>
          <img
            src={financeImage}
            alt="Finance Insights"
            className="w-full h-40 object-cover rounded-md mt-2"
          />
          </Link>
        </div>

        {/* SellCar Image Section */}
        <div
          className="flex flex-col items-start max-w-[420px] m-4 p-4 bg-white rounded-lg shadow-lg cursor-pointer"
         
        >
           <Link to="/SellYourCar">
          <p className="font-bold text-[18px] text-black mb-2">Sell Your Car</p>
          <img
            src={stockImage}
            alt="Sell Car"
            className="w-full h-40 object-cover rounded-md mt-2"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
