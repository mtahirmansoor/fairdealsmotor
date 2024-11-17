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
  // New field for vehicle description (TEXT type)
  vehicle_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // New field for vehicle details (JSON array type)
  vehicle_details: {
    type: DataTypes.JSON, // JSONB is used for JSON arrays/objects with better performance in PostgreSQL, you can use JSON if you're using other DBs
    allowNull: false,
  },

  // New performance and specification fields
  urban: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: true, // Optional, can be null if not provided
  },
  extra_urban: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: true, // Optional, can be null if not provided
  },
  combined: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: true, // Optional, can be null if not provided
  },
  emission: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: true, // Optional, can be null if not provided
  },
  euro: {
    type: DataTypes.STRING(10),
    allowNull: true, // Optional, can be null if not provided
  },
  insurance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true, // Optional, can be null if not provided
  },
  security: {
    type: DataTypes.STRING,
    allowNull: true, // Optional, can be null if not provided
  },
  max_power: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: true, // Optional, can be null if not provided
  },
  max_torque: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: true, // Optional, can be null if not provided
  },
  valve_gear: {
    type: DataTypes.STRING,
    allowNull: true, // Optional, can be null if not provided
  },
  aspiration: {
    type: DataTypes.STRING,
    allowNull: true, // Optional, can be null if not provided
  },
  cylinders: {
    type: DataTypes.INTEGER,
    allowNull: true, // Optional, can be null if not provided
  },
  drive: {
    type: DataTypes.STRING,
    allowNull: true, // Optional, can be null if not provided
  },
  cyl_arr: {
    type: DataTypes.STRING,
    allowNull: true, // Optional, can be null if not provided
  },
  gears: {
    type: DataTypes.INTEGER,
    allowNull: true, // Optional, can be null if not provided
  },
  dimensions: {
    type: DataTypes.STRING,
    allowNull: true, // Optional, can be null if not provided
  },
  max_weight: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true, // Optional, can be null if not provided
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = Car;
