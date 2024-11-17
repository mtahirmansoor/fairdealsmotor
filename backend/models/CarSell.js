// models/CarSell.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../Config/db');  // Correct path to sequelize instance

// Define the CarSell model
const CarSell = sequelize.define('CarSell', {  // Use 'CarSell' as the model name
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Auto increment the `id`
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  makeModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  transmission: {
    type: DataTypes.ENUM('auto', 'manual'),
    allowNull: false,
  },
  fuelType: {
    type: DataTypes.ENUM('petrol', 'diesel', 'electric', 'hybrid'),
    allowNull: false,
  },
  exteriorColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interiorColor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullServiceHistory: {
    type: DataTypes.ENUM('yes', 'no'),
    allowNull: false,
  },
  carcondition: {
    type: DataTypes.ENUM('new', 'good', 'fair', 'poor'),
    allowNull: false,
  }
}, {
  tableName: 'carsell', // Explicitly define table name as 'carsell'
  timestamps: true,     // Optionally add createdAt and updatedAt fields
});

module.exports = CarSell;
