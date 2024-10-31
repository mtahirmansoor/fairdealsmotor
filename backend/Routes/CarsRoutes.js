const express = require("express");
const multer = require("multer");
const Car = require("../models/Cars");
const path = require("path");

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); // Save files to 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname); // Generate unique filename
    cb(null, uniqueSuffix); // Only the unique filename will be used
  },
});
// Multer configuration with limits
const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // Limit to 2 MB
  },
});

// Create a new car
router.post("/", upload.array("images"), async (req, res) => {
  console.log("Received files:", req.files); // Log the uploaded files

  // Check if files were uploaded
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded." });
  }

  try {
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
    } = req.body;

    // Validate required fields
    if (
      !make ||
      !model ||
      !year ||
      !price ||
      !mileage ||
      !color ||
      !fuel_type ||
      !transmission ||
      !body_type ||
      !engine_size ||
      !carcondition
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Map the file names to an array (only save filenames)
    const images = req.files.map(file => file.filename); // Only the filename

    // Create the car entry in the database
    const car = await Car.create({
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
      images: JSON.stringify(images), // Store as a JSON string
    });

    // Send back the car details, including the filenames
    res.status(201).json({ ...car.toJSON(), images });
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ message: error.message });
  }
});


// Get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.findAll(); // Adjust based on your ORM
    // Parse images back to an array for response
    const parsedCars = cars.map(car => {
      return {
        ...car.toJSON(),
        images: JSON.parse(car.images), // Parse images back to an array
      };
    });
    res.json(parsedCars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: error.message });
  }
});

// Get a car by ID
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a car by ID
router.put('/:id', upload.array('images'), async (req, res) => {
  const { id } = req.params;
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
  } = req.body;

  try {
    const car = await Car.findByPk(id);
    
    if (!car) {
      return res.status(404).json({ message: "Car not found." });
    }

    // Update car fields
    car.make = make;
    car.model = model;
    car.year = year;
    car.price = price;
    car.mileage = mileage;
    car.color = color;
    car.fuel_type = fuel_type;
    car.transmission = transmission;
    car.body_type = body_type;
    car.engine_size = engine_size;
    car.features = features;
    car.carcondition = carcondition;

    // Update images
    if (req.files && req.files.length > 0) {
      // Save only the new filenames
      const newImageFilenames = req.files.map(file => file.filename);
      car.images = JSON.stringify(newImageFilenames); // Store only the filenames
    }

    await car.save();
    res.status(200).json(car);
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ message: error.message });
  }
});


// Delete a car by ID
router.delete("/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });

    await car.destroy();
    res.status(204).send(); // No content response
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
