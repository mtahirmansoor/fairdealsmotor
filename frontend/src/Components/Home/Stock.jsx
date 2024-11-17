import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Stock = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/cars");
        console.log("Fetched Cars:", response.data); // Log entire response to check data

        const carsWithParsedImages = response.data.map((car) => {
          let parsedImages = [];

          // Check if the images are a stringified JSON array with an additional level of stringification
          if (typeof car.images === "string") {
            try {
              // First parse: removes the outer string quotes
              const firstParse = JSON.parse(car.images);
              // Second parse: parses the inner JSON array
              parsedImages = JSON.parse(firstParse);
            } catch (e) {
              console.error("Error parsing images:", e);
              parsedImages = []; // Fallback to empty array on error
            }
          } else if (Array.isArray(car.images)) {
            parsedImages = car.images; // Already an array, no need to parse
          }

          // Ensure images is always an array
          return {
            ...car,
            images: parsedImages,
          };
        });

        console.log("Processed Cars with Images:", carsWithParsedImages); // Log the processed data
        setCars(carsWithParsedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Car List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105"
          >
            <div className="flex-shrink-0">
              {Array.isArray(car.images) && car.images.length > 0 ? (
                <img
                  src={`http://localhost:3000/uploads/${car.images[0]}`} // First image
                  alt={`Car ${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">No Image</span>
                </div>
              )}
            </div>
            <div className="p-4 flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-green-500 font-bold text-gray-800">
                  £{car.price}
                </h2>
              </div>
              <p className="font-semibold text-xl">
                {car.make} {car.model} ({car.year})
              </p>
              <p className="text-gray-600 mt-1">Mileage: {car.mileage} miles</p>
              <p className="text-gray-600">Color: {car.color}</p>
              <p className="text-gray-600">Fuel Type: {car.fuel_type}</p>
              <p className="text-gray-600">Condition: {car.carcondition}</p>
              <div className="mt-4">
                <Link
                  to={`/MoreInfo/${car.id}`}
                  className="text-blue-500 hover:underline"
                >
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stock;
