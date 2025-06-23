import winston from 'winston';
import path from 'path';

const logDir = path.resolve('src/logs');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(logDir, 'server.log') })
  ],
});

export default logger; 