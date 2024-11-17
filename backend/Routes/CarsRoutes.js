const express = require("express");
const router = express.Router();
const {
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../Controllers/CarsController");
const multer = require("multer");
const path = require("path");
const { Car } = require("../models/Cars");
const { sequelize } = require("../Config/db");
// Route definitions
router.get("/", getCars); // Get all cars
router.get("/:id", getCarById); // Get a car by ID
// Create a new car
router.put("/:id", updateCar); // Update a car by ID
router.delete("/:id", deleteCar); // Delete a car by ID

// Define the storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); // Ensure you have the "uploads" folder created
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix); // Use unique filenames
  },
});

// Multer middleware to handle file uploads
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // Limit to 2MB per file
});

// Route for handling POST requests to add a car
router.post("/", upload.array("images"), async (req, res) => {
  console.log("Request Body:", req.body); // Log form data
  console.log("Request Files:", req.files); // Log uploaded files

  // Destructure fields from the request body, including vehicle_description and vehicle_details
  const {
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
    link,
    sold,
    vehicle_description,
    vehicle_details,
  } = req.body;

  // Validate required fields
  const missingFields = [];
  if (!make) missingFields.push("make");
  if (!model) missingFields.push("model");
  if (!year) missingFields.push("year");
  if (!price) missingFields.push("price");
  if (!mileage) missingFields.push("mileage");
  if (!color) missingFields.push("color");
  if (!fuel_type) missingFields.push("fuel_type");
  if (!transmission) missingFields.push("transmission");
  if (!body_type) missingFields.push("body_type");
  if (!engine_size) missingFields.push("engine_size");
  if (!carcondition) missingFields.push("carcondition");
  if (!vehicle_description) missingFields.push("vehicle_description");
  if (!vehicle_details) missingFields.push("vehicle_details");

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: "Missing required fields",
      missingFields,
    });
  }

  // Check if any files were uploaded
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded." });
  }

  // Process images (store filenames)
  const imageFilenames = req.files.map((file) => file.filename);

  // Ensure 'link' is provided (if applicable), default to null if not
  const carLink = link || null;
  // Ensure 'sold' is provided, default to 0 (not sold) if not provided
  const carSold = sold ? parseInt(sold) : 0;

  // Create the car entry in the database (assuming a `Car` model)
  try {
    const car = await sequelize.models.cars.create({
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
      max_weight,
      link: carLink, // New field
      sold: carSold, // New field
    });

    res.status(201).json({
      message: "Car added successfully!",
      car: car,
      imageFilenames,
    });
  } catch (error) {
    console.error("Error adding car:", error);
    res
      .status(500)
      .json({ message: "Error adding car", errorDetails: error.message });
  }
});

module.exports = router;
