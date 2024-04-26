const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

// Connect to MongoDB used atlas 
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    insertDummyUsers();
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

async function insertDummyUsers() {
  try {
    // Check if there are existing users in the database
    const existingUsers = await User.find();
    if (existingUsers.length > 0) {
      console.log('Database already contains users. Skipping!');
      return;
    }

    // Generate password hash
    const pass = await bcrypt.hash('password123', 10);

    const users = [
      { username: 'user1', password: pass },
      { username: 'user2', password: pass },
    ];

    await User.insertMany(users);
    console.log('Dummy users inserted successfully');
  } catch (err) {
    console.error('Error inserting dummy users:', err);
  } finally {
    mongoose.connection.close();
  }
}
