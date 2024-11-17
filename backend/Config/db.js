const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('u953478623_fairdealsmotor', 'u953478623_fairdealsmotor', 'E/4i/pPq', {
  host: 'srv1699.hstgr.io', // Hostinger database host (e.g., `mysql.hostinger.com`)
  dialect: 'mysql',
  logging: console.log, // Enable logging for SQL queries
});

sequelize.authenticate()
  .then(() => console.log('Connection established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));
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
