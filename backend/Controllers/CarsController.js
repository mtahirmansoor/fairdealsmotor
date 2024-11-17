// Assuming your Car model is correctly set up
const { sequelize } = require('../Config/db'); // Adjust the path if necessary
const { Car } = require('../models/Cars');
const multer = require('multer');
const path = require('path');

// Get all cars
// Get all cars
const getCars = async (req, res) => {
  try {
    // Use the model to find all cars (instead of raw SQL query)
    const cars = await sequelize.models.cars.findAll();

    console.log('Results:', cars);  // Log the results to check the data

    res.status(200).json(cars);  // Return the results as a JSON response
  } catch (error) {
    console.error('Error fetching cars:', error.message);  // Log the error message
    res.status(500).json({ message: 'Error fetching cars', error: error.message });
  }
};
  
  
  
// Get car by ID
const getCarById = async (req, res) => {
  try {
    // Use the sequelize instance directly if Car model is undefined
    const car = await sequelize.models.cars.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!car) return res.status(404).json({ message: "Car not found" });

    const carResponse = {
      ...car.toJSON(),
      images: JSON.parse(car.images),
      vehicle_details: JSON.parse(car.vehicle_details),
    };

    res.json(carResponse);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
};
  
  

// Add a new car
 // Assuming you have a Car model defined

// Multer configuration for file storage





// Update car by ID
const updateCar = async (req, res) => {
  console.log(req.body); // Log the request body to verify the fields are present
  console.log(req.files); // Log the files to check if images are sent properly
  const { id } = req.params;
  const {
    make, model, year, price, mileage, color, fuel_type, transmission,
    body_type, engine_size, features, carcondition, vehicle_description,
    vehicle_details, urban, extra_urban, combined, emission, euro, insurance,
    security, max_power, max_torque, valve_gear, aspiration, cylinders, drive,
    cyl_arr, gears, dimensions, max_weight
  } = req.body;

  // Initialize an array to store missing fields
  const missingFields = [];

  // Check if required fields are missing and add to missingFields array
  if (!make) missingFields.push('make');
  if (!model) missingFields.push('model');
  if (!year) missingFields.push('year');
  if (!price) missingFields.push('price');
  if (!mileage) missingFields.push('mileage');
  if (!color) missingFields.push('color');
  if (!fuel_type) missingFields.push('fuel_type');
  if (!transmission) missingFields.push('transmission');
  if (!body_type) missingFields.push('body_type');
  if (!engine_size) missingFields.push('engine_size');
  if (!carcondition) missingFields.push('carcondition');
  if (!vehicle_description) missingFields.push('vehicle_description');
  if (!vehicle_details) missingFields.push('vehicle_details');

  // If there are missing fields, return an error with the list of missing fields
  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Missing required fields: ${missingFields.join(', ')}`
    });
  }

  try {
    const car = await Car.findByPk(id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found.' });
    }

    // Use Sequelize's update method to simplify the update process
    const updatedCar = await car.update({
      make,
      model,
      year,
      price,
      mileage,
      color,
      fuel_type,
      transmission,
      body_type,
      engine_size,
      features,
      carcondition,
      vehicle_description,
      vehicle_details: JSON.stringify(vehicle_details), // Ensure JSON data is stored properly
      urban,
      extra_urban,
      combined,
      emission,
      euro,
      insurance,
      security,
      max_power,
      max_torque,
      valve_gear,
      aspiration,
      cylinders,
      drive,
      cyl_arr,
      gears,
      dimensions,
      max_weight
    });

    // Handle file uploads (if any)
    if (req.files && req.files.length > 0) {
      const newImageFilenames = req.files.map((file) => file.filename);
      updatedCar.images = JSON.stringify(newImageFilenames); // Store filenames in the images field
      await updatedCar.save();
    }

    return res.status(200).json(updatedCar);
  } catch (error) {
    console.error('Error updating car:', error);
    return res.status(500).json({ message: 'Error updating car.', error: error.message });
  }
};








// Delete car by ID
const deleteCar = async (req, res) => {
  try {
    // Using sequelize.models.cars.findOne to fetch the car by ID
    const car = await sequelize.models.cars.findOne({ 
      where: { id: req.params.id } 
    });

    // If car is not found, return a 404 error
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    // Destroy the car record from the database
    await car.destroy();

    // Respond with a 204 No Content status
    res.status(204).send(); // No content response
    
  } catch (error) {
    console.error('Error deleting car:', error);
    res.status(500).json({ message: error.message });
  }
};


// Export all handlers
module.exports = { getCars, getCarById,  updateCar, deleteCar };
