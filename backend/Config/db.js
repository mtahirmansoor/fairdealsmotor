const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('fair_deals_motor', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log, // Enable logging for SQL queries
});


// Test the database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connected successfully');
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
