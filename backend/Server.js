const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const carsRoutes = require('./routes/CarsRoutes');
const { connectDB, sequelize } = require('./config/db'); // Adjust the path if necessary
const path = require("path");
const app = express();



// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/cars', carsRoutes);

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

// Handle 404 errors

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
