import mongoose from 'mongoose';

const MONGO_OPTIONS = {
  autoIndex: false, // Don't build indexes automatically in production
  maxPoolSize: 20, // Maintain up to 20 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, MONGO_OPTIONS);
  } catch (err) {
    console.error('MongoDB initial connection error:', err);
    process.exit(1);
  }
}

// Connection event listeners for robust monitoring
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('Mongoose disconnected. Attempting to reconnect...');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose connection closed on app termination');
  process.exit(0);
}); 