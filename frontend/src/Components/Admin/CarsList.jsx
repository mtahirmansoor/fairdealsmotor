import React, { useState, useEffect } from "react";
import axios from "axios";

const CarList = ({ onEdit }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the API base URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000"; // Default to localhost in dev

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/cars`);
        console.log('Fetched Cars:', response.data); // Log entire response to check data
  
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
  
        console.log('Processed Cars with Images:', carsWithParsedImages); // Log the processed data
        setCars(carsWithParsedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCars();
  }, []);
  

  const handleDelete = async (carId) => {
    try {
      await axios.delete(`${API_URL}/api/cars/${carId}`);
      setCars(cars.filter((car) => car.id !== carId));
    } catch (err) {
      console.error("Error deleting car:", err);
    }
  };

  if (loading)
    return <div className="text-center text-xl font-semibold mt-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 text-xl mt-10">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Car List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105">
            <div className="flex-shrink-0">
              {Array.isArray(car.images) && car.images.length > 0 ? (
                <img
                  src={`${API_URL}/uploads/${car.images[0]}`} // First image
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
              <h2 className="text-2xl font-semibold text-gray-800">
                {car.make} {car.model} ({car.year})
              </h2>
              <p className="text-gray-600 mt-1">
                Price:{" "}
                <span className="text-green-500 font-semibold">${car.price}</span>
              </p>
              <p className="text-gray-600">Mileage: {car.mileage} miles</p>
              <p className="text-gray-600">Color: {car.color}</p>
              <p className="text-gray-600">Fuel Type: {car.fuel_type}</p>
              <p className="text-gray-600">Condition: {car.carcondition}</p>

              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => onEdit(car.id)}
                  className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(car.id)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
