import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '../.env' }); // Adjust path if running from /server

// Debug log to confirm the URI is loaded
console.log(' MONGO_URI:', process.env.MONGO_URI);

console.log('Attempting to connect to MongoDB...');

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


