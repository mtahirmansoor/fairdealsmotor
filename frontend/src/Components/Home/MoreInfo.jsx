import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Import tick icon
import { motion } from "framer-motion"; // Import Framer Motion for animation
import Slider from "react-slick"; // Import react-slick
import { FaTiktok, FaYoutube } from "react-icons/fa"; // Import TikTok and YouTube icons

const MoreInfo = () => {
  const { id } = useParams(); // Get the car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("tech"); // Default to "tech" tab

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000"; // Default to localhost if the env var is not set

  // Fetch car details
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/cars/${id}`);
        const carData = response.data;

        // Handle image and vehicle details data
        const carWithParsedImages = {
          ...carData,
          images: Array.isArray(carData.images)
            ? carData.images
            : typeof carData.images === "string"
            ? JSON.parse(carData.images)
            : [],
          vehicle_details: Array.isArray(carData.vehicle_details)
            ? carData.vehicle_details
            : carData.vehicle_details &&
              typeof carData.vehicle_details === "string"
            ? JSON.parse(carData.vehicle_details)
            : [],
        };

        setCar(carWithParsedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id, apiUrl]); // Add apiUrl as dependency to handle environment changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render content based on the active tab
  const renderTabContent = () => {
    if (activeTab === "moreDetails") {
      return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Vehicle Description</h2>
          <p className="text-gray-700 mb-4">{car.vehicle_description}</p>

          <h3 className="text-xl font-semibold mb-2">Details</h3>
          <ul className="list-none pl-0">
            {car.vehicle_details && car.vehicle_details.length > 0 ? (
              car.vehicle_details.map((item, index) => (
                <li key={index} className="flex items-start mb-2 text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2 w-5 h-5 flex-shrink-0" />
                  <span className="flex-grow-0">{item.detail}</span>
                </li>
              ))
            ) : (
              <li>No details available.</li>
            )}
          </ul>
        </div>
      );
    } else if (activeTab === "techSpecifications") {
      return (
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">
            Vehicle Specifications
          </h2>

          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[{ label: "Urban Fuel Consumption", value: `${car.urban} L/100km` },
                { label: "Extra Urban Fuel Consumption", value: `${car.extra_urban} L/100km` },
                { label: "Max Power", value: `${car.max_power} hp` },
                { label: "Max Torque", value: `${car.max_torque} Nm` },
                { label: "CO2 Emissions", value: `${car.emission} g/km` },
                { label: "Euro Standard", value: car.euro },
                { label: "Insurance Cost", value: `£ ${car.insurance}` },
                { label: "Security", value: car.security },
                { label: "Drive", value: car.drive }].map((spec, index) => (
                  <motion.p
                    key={index}
                    className="flex items-center text-sm md:text-base text-blue-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <strong>{spec.label}:</strong> <span className="ml-2">{spec.value}</span>
                  </motion.p>
                ))}
            </div>
          </div>
        </motion.div>
      );
    }
  };

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

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold mb-4">
        {car.make} {car.model} Details
      </h1>

      {/* Image Section with Slider */}
      <div className="mb-6">
        <Slider {...settings}>
          {Array.isArray(car.images) ? (
            car.images.length > 0 ? (
              car.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={`${apiUrl}/uploads/${image}`} // Use dynamic API URL
                    alt={`${car.make} ${car.model}`}
                    className="w-full rounded-lg shadow-md cursor-pointer"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400";
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">No Image Available</span>
              </div>
            )
          ) : typeof car.images === "string" ? (
            <div>
              <img
                src={`${apiUrl}/uploads/${JSON.parse(car.images)[0]}`} // Use dynamic API URL
                alt={`${car.make} ${car.model}`}
                className="w-full rounded-lg shadow-md cursor-pointer"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400";
                }}
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">No Image Available</span>
            </div>
          )}
        </Slider>
      </div>

      {/* Tabs for Tech and Specifications */}
      <div className="flex gap-6 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "moreDetails" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("moreDetails")}
        >
          More Details
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "techSpecifications" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("techSpecifications")}
        >
          Tech Specifications
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Sold and Links */}
      <div className="mt-6">
        {car.sold && (
          <div className="bg-red-500 text-white py-2 px-4 rounded-lg inline-block">
            <span>Car is Sold</span>
          </div>
        )}

        {/* TikTok and YouTube Links */}
        <div className="mt-4">
          {car.link && (
            <a href={car.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 mr-4">
              <FaTiktok className="w-6 h-6" />
            </a>
          )}
          {car.youtube && (
            <a href={car.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
              <FaYoutube className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
