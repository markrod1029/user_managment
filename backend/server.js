const express = require('express');
const cors = require('cors');
require('dotenv').config();


const db = process.env.NODE_ENV === 'production' 
  ? require('./config/productionDb') 
  : require('./config/database');

const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3306;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'User Management API' });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});