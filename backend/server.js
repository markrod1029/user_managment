const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = process.env.NODE_ENV === 'production' 
  ? require('./config/productionDb') 
  : require('./config/database');

const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'User Management API' });
});

app.use('/users', userRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
