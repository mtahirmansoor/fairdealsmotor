import React, { useState, useEffect } from "react";
import axios from "axios";

const EditCars = ({ carId }) => {
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    color: "",
    fuel_type: "",
    transmission: "",
    body_type: "",
    engine_size: "",
    features: "",
    carcondition: "",
  });
  const [images, setImages] = useState([]); // State to hold new uploaded images
  const [existingImages, setExistingImages] = useState([]); // State to hold existing images

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/cars/${carId}`)
      .then((response) => {
        setCar(response.data);
        // Parse images safely, ensuring it's always an array
        const imagesFromResponse = response.data.images ? JSON.parse(response.data.images) : [];
        setExistingImages(imagesFromResponse);
      })
      .catch((error) => console.log(error));
  }, [carId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    // Append car data to FormData
    Object.keys(car).forEach((key) => {
      formData.append(key, car[key]);
    });
    // Append new images to FormData
    images.forEach((image) => {
      formData.append("images", image);
    });

    axios
      .put(`http://localhost:3000/api/cars/${carId}`, formData)
      .then((response) => {
        console.log(response.data);
        alert('Car updated successfully!');
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to update car: ' + error.response?.data?.message || 'Unknown error');
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(car).map((key) => (
          <div key={key}>
            <input
              type={key === "year" || key === "price" || key === "mileage" ? "number" : "text"}
              value={car[key]}
              onChange={(e) => setCar({ ...car, [key]: e.target.value })}
              required
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        ))}
        <div>
          <input
            type="file"
            multiple
            onChange={(e) => setImages(Array.from(e.target.files))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        {Array.isArray(existingImages) && existingImages.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Existing Images:</h3>
            <div className="grid grid-cols-2 gap-2">
              {existingImages.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:3000/uploads/${image}`} // Adjust based on your actual URL setup
                  alt={`Car Image ${index}`}
                  className="w-32 h-32 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        )}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Update Car
        </button>
      </form>
    </div>
  );
};

export default EditCars;
