const express = require('express');
const Car = require('../models/CarSell'); // Import Sequelize model
const nodemailer = require('nodemailer');
const router = express.Router();

// Create a transporter object using your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',  // For example, using Gmail
  auth: {
    user: 'mtahirmansoor257@gmail.com',  // Replace with your email
    pass: '123456',  // Use app-specific password if 2FA is enabled
  },
});

// POST route to save car data to the database and send an email
router.post('/', async (req, res) => {
  console.log(req.body); // Log the received data for debugging

  try {
    // Extract data from request body
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
      carcondition // Expecting an enum value for car condition
    } = req.body;

    // Ensure that all necessary fields are provided
    if (!name || !email || !phone || !address || !makeModel || !registration || !mileage || !transmission || !fuelType || !exteriorColor || !interiorColor || !fullServiceHistory || !carcondition) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new car entry in the database
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

    // After successfully saving to the database, send a confirmation email
    const mailOptions = {
      from: email,  // From the user's email address
      to: 'mtahirmansoor257@gmail.com',  // Change this to your recipient email
      subject: `New Car Details Submitted by ${name}`,
      html: `
        <h3>New Car Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Make & Model:</strong> ${makeModel}</p>
        <p><strong>Registration:</strong> ${registration}</p>
        <p><strong>Mileage:</strong> ${mileage} miles</p>
        <p><strong>Transmission:</strong> ${transmission}</p>
        <p><strong>Fuel Type:</strong> ${fuelType}</p>
        <p><strong>Exterior Color:</strong> ${exteriorColor}</p>
        <p><strong>Interior Color:</strong> ${interiorColor}</p>
        <p><strong>Full Service History:</strong> ${fullServiceHistory ? 'Yes' : 'No'}</p>
        <p><strong>Condition:</strong> ${carcondition}</p>
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email', error });
      }
      console.log('Email sent: ' + info.response);
    });

    // Return success response with the saved car data
    return res.status(201).json({ message: 'Car details saved successfully!', car: newCar });

  } catch (err) {
    console.error('Error saving car details:', err);
    return res.status(500).json({ message: 'Error saving car details', error: err.message });
  }
});

module.exports = router;
