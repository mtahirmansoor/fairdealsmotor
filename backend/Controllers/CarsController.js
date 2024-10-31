const Car = require("../models/Cars"); // Adjust the model path if necessary

// Get all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// Controllers/CarsController.js
// Assuming you have a Car model

// Add a new car
const addCar = async (req, res) => {
  const {
    make,
    model,
    year,
    price,
    mileage,
    color,
    fuelType,
    transmission,
    bodyType,
    engineSize,
    features,
    carcondition,
  } = req.body;

  try {
    const newCar = await Car.create({
      make,
      model,
      year,
      price,
      mileage,
      color,
      fuelType,
      transmission,
      bodyType,
      engineSize,
      features,
      carcondition,
    });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: "HI", error: error.message });
  }
};

// Edit car
const editCar = async (req, res) => {
  const { id } = req.params;
  const {
    make,
    model,
    year,
    price,
    mileage,
    color,
    fuelType,
    transmission,
    bodyType,
    engineSize,
    features,
    carcondition,
  } = req.body;

  try {
    const updatedCar = await Car.update(
      {
        make,
        model,
        year,
        price,
        mileage,
        color,
        fuelType,
        transmission,
        bodyType,
        engineSize,
        features,
        carcondition,
      },
      {
        where: { id },
        returning: true,
      }
    );

    if (updatedCar[0] === 0) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(updatedCar[1]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error editing car", error: error.message });
  }
};

// Delete car
const deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCount = await Car.destroy({
      where: { id },
    });

    if (deletedCount === 0) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(204).send(); // No content to return
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting car", error: error.message });
  }
};

module.exports = { getCars, addCar, editCar, deleteCar };
