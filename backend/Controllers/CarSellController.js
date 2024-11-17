const Car = require('../models/CarSell'); // Import the Car model

// Controller function to handle car submission
exports.submitCarDetails = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      makeModel,
      registration,
      mileage,
      transmission,
      fuelType,
      exteriorColor,
      interiorColor,
      fullServiceHistory,
      carcondition,
    } = req.body;

    // Create a new car entry using Sequelize
    const newCar = await Car.create({
      name,
      email,
      phone,
      address,
      makeModel,
      registration,
      mileage,
      transmission,
      fuelType,
      exteriorColor,
      interiorColor,
      fullServiceHistory,
      carcondition,
    });

    // Respond with a success message
    res.status(201).json({ message: 'Car details submitted successfully!', car: newCar });
  } catch (error) {
    console.error('Error submitting car details:', error);
    res.status(500).json({ message: 'An error occurred while submitting your car details.' });
  }
};
