const express = require('express');
const cors = require('cors');

const app = express();

// Use CORS to allow requests from any origin
app.use(cors());

// Respond to preflight requests
app.options('*', cors());

// Handle GET request to root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
