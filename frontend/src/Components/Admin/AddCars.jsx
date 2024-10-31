import React, { useState } from 'react';
import axios from 'axios';

const AddCars = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState('');
  const [color, setColor] = useState('');
  const [fuel_type, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [body_type, setBodyType] = useState('');
  const [engine_size, setEngineSize] = useState('');
  const [features, setFeatures] = useState('');
  const [carcondition, setCondition] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    const newCar = new FormData();
    newCar.append('make', make);
    newCar.append('model', model);
    newCar.append('year', Number(year));
    newCar.append('price', Number(price));
    newCar.append('mileage', Number(mileage));
    newCar.append('color', color);
    newCar.append('fuel_type', fuel_type);
    newCar.append('transmission', transmission);
    newCar.append('body_type', body_type);
    newCar.append('engine_size', engine_size);
    newCar.append('features', features);
    newCar.append('carcondition', carcondition);

    if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
            newCar.append('images', images[i]);
        }
    }

    console.log('Form Data:', Array.from(newCar.entries()));

    try {
        const response = await axios.post('http://localhost:3000/api/cars', newCar, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // Access response.data.images only after confirming response is defined
        const images = response.data.images || []; // Default to empty array if undefined
        alert(`Car added successfully! Images: ${images.length > 0 ? images.join(', ') : 'No images uploaded.'}`);
        resetFormFields();
    } catch (error) {
        console.error('Error adding car:', error.response ? error.response.data : error.message);
    }
};

  const resetFormFields = () => {
    setMake('');
    setModel('');
    setYear('');
    setPrice('');
    setMileage('');
    setColor('');
    setFuelType('');
    setTransmission('');
    setBodyType('');
    setEngineSize('');
    setFeatures('');
    setCondition('');
    setImages([]);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Car</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Mileage"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Fuel Type"
                value={fuel_type}
                onChange={(e) => setFuelType(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Transmission"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Body Type"
                value={body_type}
                onChange={(e) => setBodyType(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Engine Size"
              value={engine_size}
              onChange={(e) => setEngineSize(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Condition (New/Used)"
              value={carcondition}
              onChange={(e) => setCondition(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => setImages(Array.from(e.target.files))}
              multiple
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCars;
