const { DataTypes } = require('sequelize');
const { sequelize } = require('../Config/db'); // Adjust the path if necessary

const Car = sequelize.define('cars', {
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fuel_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transmission: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  engine_size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  features: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  carcondition: {
    type: DataTypes.ENUM('New', 'Used'),
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON, // Store an array of image URLs or paths
    allowNull: false, // Change to true if you want to allow cars without images
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = Car;
