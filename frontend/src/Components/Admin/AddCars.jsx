import React, { useState } from "react";
import axios from "axios";

const AddCars = () => {
  // State for all fields based on the schema
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [fuel_type, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [body_type, setBodyType] = useState("");
  const [engine_size, setEngineSize] = useState("");
  const [features, setFeatures] = useState("");
  const [carcondition, setCondition] = useState("");
  const [vehicle_description, setVehicleDescription] = useState("");
  const [vehicle_details, setVehicleDetails] = useState([{ detail: "" }]);

  // Performance and specifications
  const [urban, setUrban] = useState("");
  const [extra_urban, setExtraUrban] = useState("");
  const [combined, setCombined] = useState("");
  const [emission, setEmission] = useState("");
  const [euro, setEuro] = useState("");
  const [insurance, setInsurance] = useState("");
  const [security, setSecurity] = useState("");
  const [max_power, setMaxPower] = useState("");
  const [max_torque, setMaxTorque] = useState("");
  const [valve_gear, setValveGear] = useState("");
  const [aspiration, setAspiration] = useState("");
  const [cylinders, setCylinders] = useState("");
  const [drive, setDrive] = useState("");
  const [cyl_arr, setCylArr] = useState("");
  const [gears, setGears] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [max_weight, setMaxWeight] = useState("");
  const [link, setLink] = useState("");    // Link field
  const [sold, setSold] = useState(false);

  const [images, setImages] = useState([]); // Store uploaded images as files

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to handle form submission including images
    const formData = new FormData();

    // Append basic fields to FormData
    formData.append('make', make);
    formData.append('model', model);
    formData.append('year', year);
    formData.append('price', price);
    formData.append('mileage', mileage);
    formData.append('color', color);
    formData.append('fuel_type', fuel_type);
    formData.append('transmission', transmission);
    formData.append('body_type', body_type);
    formData.append('engine_size', engine_size);
    formData.append('features', features);
    formData.append('carcondition', carcondition);

    // Ensure 'vehicle_description' is not empty or null
    if (!vehicle_description) {
      console.log("vehicle_description is missing");
      return; // Prevent form submission if missing
    }
    formData.append('vehicle_description', vehicle_description); 

    // Ensure 'vehicle_details' is an array, and serialize it to a string (if necessary)
    if (vehicle_details && vehicle_details.length > 0) {
      formData.append('vehicle_details', JSON.stringify(vehicle_details)); 
    } else {
      console.log("vehicle_details is empty or invalid");
      return; // Prevent form submission if invalid
    }

    // Append the rest of the fields
    formData.append('urban', urban);
    formData.append('extra_urban', extra_urban);
    formData.append('combined', combined);
    formData.append('emission', emission);
    formData.append('euro', euro);
    formData.append('insurance', insurance);
    formData.append('security', security);
    formData.append('max_power', max_power);
    formData.append('max_torque', max_torque);
    formData.append('valve_gear', valve_gear);
    formData.append('aspiration', aspiration);
    formData.append('cylinders', cylinders);
    formData.append('drive', drive);
    formData.append("link", link);
    formData.append("sold", sold ? "1" : "0");
    formData.append('cyl_arr', cyl_arr);
    formData.append('gears', gears);
    formData.append('dimensions', dimensions);
    formData.append('max_weight', max_weight);

    // Add images
    const files = document.querySelector('input[type="file"]').files;
    images.forEach((image) => {
      formData.append("images", image); // Append each image file
    });

    // Log FormData to verify its contents
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);  // Log all form data key-value pairs
    }

    try {
      // Submit the form data (using FormData to automatically handle file uploads)
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/cars`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }, // Let FormData handle the Content-Type
      });

      console.log('Car added successfully:', response.data);
    } catch (error) {
      console.error("Error adding car:", error.response ? error.response.data : error);
    }
  };

  // Add vehicle detail input dynamically
  const addVehicleDetail = () => {
    setVehicleDetails([...vehicle_details, { detail: "" }]);
  };

  // Handle vehicle detail change
  const handleVehicleDetailChange = (index, e) => {
    const updatedDetails = [...vehicle_details];
    updatedDetails[index][e.target.name] = e.target.value;
    setVehicleDetails(updatedDetails);
  };

  // Add image input dynamically
  const addImageInput = () => {
    setImages([...images, null]);
  };

  // Handle image change
  const handleImageChange = (index, e) => {
    const updatedImages = [...images];
    updatedImages[index] = e.target.files[0];
    setImages(updatedImages);
  };

  // Reset form fields
  const resetFormFields = () => {
    setMake("");
    setModel("");
    setYear("");
    setPrice("");
    setMileage("");
    setColor("");
    setFuelType("");
    setTransmission("");
    setBodyType("");
    setEngineSize("");
    setFeatures("");
    setCondition("");
    setImages([]);
    setVehicleDescription("");
    setVehicleDetails([{ detail: "" }]);
    setUrban("");
    setExtraUrban("");
    setCombined("");
    setEmission("");
    setEuro("");
    setInsurance("");
    setSecurity("");
    setMaxPower("");
    setMaxTorque("");
    setValveGear("");
    setAspiration("");
    setCylinders("");
    setDrive("");
    setCylArr("");
    setGears("");
    setDimensions("");
    setMaxWeight("");
    setLink("");
    setSold(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Car
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* General Car Info */}
          <div>
            <input
              type="text"
              placeholder="Make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          {/* ... rest of the inputs (same as before) ... */}

          {/* Vehicle Details Section */}
          <div>
            {vehicle_details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  name="detail"
                  value={detail.detail}
                  onChange={(e) => handleVehicleDetailChange(index, e)}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder={`Detail ${index + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addVehicleDetail}
              className="mt-2 text-blue-500"
            >
              Add More Details
            </button>
          </div>

          {/* Images Section */}
          <div>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            {images.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                {images.map((image, index) => (
                  <p key={index}>{image.name}</p>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={addImageInput}
              className="mt-2 text-blue-500"
            >
              Add More Images
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-4 rounded-lg mt-4"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCars;
