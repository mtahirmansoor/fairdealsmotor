const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const carsRoutes = require('./Routes/CarsRoutes');
const sellCarRoutes = require('./Routes/carSellRoutes');
const { connectDB, sequelize } = require('./Config/db'); // Adjust the path if necessary
const path = require("path");

const app = express();

// Middleware
const corsOptions = {
  origin: 'https://fairdealsmotor.co.uk',  // Allow only the production domain
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,  // If you need cookies/session data
};

app.use(cors(corsOptions)); // Enable CORS with the defined options
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Static route for file uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// API Routes
app.use('/api/cars', carsRoutes);  // This should be correct
app.use('/api/sellCar', sellCarRoutes);

// Database Connection and Server Initialization
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await connectDB(); // Establish the database connection
    await sequelize.sync({ alter: true }); // Sync the database
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
    process.exit(1); // Exit the process if DB sync fails
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
