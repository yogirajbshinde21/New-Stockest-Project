const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/positions', require('./routes/positionRoutes'));
app.use('/api/funds', require('./routes/fundRoutes'));
app.use('/api/holdings', require('./routes/holdingRoutes'));

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
