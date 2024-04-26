// server.js
const express = require('express');
const mongoose = require('mongoose');
const useRoutes = require('./routes/useRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', useRoutes);

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Sid747:siddik2471@cluster0.xpkwjos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
  // Start the server after connecting to the database
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('Error connecting to MongoDB Atlas:', err));

