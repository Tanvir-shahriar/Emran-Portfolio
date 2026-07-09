import mongoose from 'mongoose';

export async function connectDB() {
  if (!process.env.MONGO_URI) {
    console.log('MongoDB not configured. Using in-memory content data.');
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected.');
    return true;
  } catch (error) {
    console.warn(`MongoDB connection failed. Using in-memory content data. ${error.message}`);
    return false;
  }
}

export function hasMongoConnection() {
  return mongoose.connection.readyState === 1;
}
