import React, { useState } from "react";
import axios from "axios";

const SellYourCar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [registration, setRegistration] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [fullServiceHistory, setFullServiceHistory] = useState("yes"); // Default to 'yes'
  const [carcondition, setCarCondition] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine make and model into one field
    const makeModel = `${make} ${model}`;

    // Create the data object to send as JSON
    const newCar = {
      name,
      email,
      phone,
      address,
      makeModel,
      registration,
      mileage: Number(mileage), // Convert mileage to a number
      transmission,
      fuelType,
      exteriorColor,
      interiorColor,
      fullServiceHistory,
      carcondition,
    };

    console.log("Form Data:", newCar); // Log the object to inspect the data

    try {
      // Send the data as JSON to the server
      const response = await axios.post(
        "http://localhost:3000/api/sellCar",
        newCar,
        {
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );

      // Handle success response
      alert(` information sent to Fair-deals-Motor successfully! `);
      resetFormFields(); // Reset form fields after successful submission
    } catch (error) {
      // Handle error response
      console.error(
        "Error adding car:",
        error.response ? error.response.data : error.message
      );
      setError(
        error.response
          ? error.response.data.message
          : "Error while submitting the form"
      );
    }
  };
  const resetFormFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMake("");
    setModel("");
    setRegistration("");
    setMileage("");
    setTransmission("");
    setFuelType("");
    setExteriorColor("");
    setInteriorColor("");
    setFullServiceHistory("yes");
    setCarCondition("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          SELL YOUR CAR
        </h2>
        <hr />
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name, Email, Phone, and Address */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">YOUR INFORMATION</h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">CAR INFORMATION</h1>
          {/* Make and Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

          {/* Registration, Mileage, Transmission */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Registration"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Mileage"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Transmission</option>
                <option value="auto">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Colors, Full Service History, Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Exterior Color"
                value={exteriorColor}
                onChange={(e) => setExteriorColor(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Interior Color"
                value={interiorColor}
                onChange={(e) => setInteriorColor(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                value={fullServiceHistory}
                onChange={(e) => setFullServiceHistory(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Full Service History</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <select
                value={carcondition}
                onChange={(e) => setCarCondition(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Condition</option>
                <option value="new">New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}

          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellYourCar;
