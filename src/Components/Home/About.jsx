import React from "react";
import {FaChartLine, FaMoneyBillWave } from "react-icons/fa"; // Importing icons for finance and stock

const About = () => {
  return (
    <div className="flex flex-col items-center py-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <div className="flex flex-wrap justify-center sm:justify-evenly max-w-[1200px] pt-20">
        <div
          className="flex justify-start max-w-[420px] m-4 cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => (window.location.href = "/finance")}
        >
          <FaMoneyBillWave className="h-10 w-10 text-green-600" />
          <div className="pl-4">
            <p className="font-bold text-[18px]">Finance Insights</p>
            <p>
              Get the latest insights on managing finances and investment
              opportunities.
            </p>
          </div>
        </div>

        {/* Stock Section */}
        <div
          className="flex justify-start max-w-[420px] m-4 cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => (window.location.href = "/stock")}
        >
          <FaChartLine className="h-10 w-10 text-red-600" />
          <div className="pl-4">
            <p className="font-bold text-[18px]">Stock Market Updates</p>
            <p>Stay up-to-date with the latest stock market trends and news.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
