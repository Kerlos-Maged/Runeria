import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import http from 'http';
import app from './app.js';
import logger from './config/logger.js';

console.log('Starting server...');

// Load environment variables
dotenv.config();

// Check for required environment variables
const requiredEnv = ['MONGO_URI', 'JWT_SECRET', 'CLIENT_URL', 'PORT'];

const missing = requiredEnv.filter((key) => !process.env[key]);
if (missing.length) {
  logger.error('Missing required environment variables: ' + missing.join(', '));
  process.exit(1);
}

let server;

export async function bootServer() {
  try {
    await connectDB();
    server = http.createServer(app);
    const port = process.env.PORT || 5000;

    server.listen(port, () => {
      logger.info(`Server running on port ${port}`);
    });

    // Graceful shutdown
    process.on('SIGINT', () => {
      logger.info('Server shutting down...');
      process.exit(0);
    });

    return { app, server };
  } catch (err) {
    logger.error('Failed to boot server: ' + err);
    process.exit(1);
  }
}

bootServer();
