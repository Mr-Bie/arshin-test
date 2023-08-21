import logger from "../services/logger.service";

export const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err?.status || 500;
  logger.error(err.message);
  let message = "Internal Server Error!";
  if (statusCode !== 500) message = err.message;
  return res.status(statusCode).json({error: message, timestamps: new Date()});
};

export class HttpException extends Error {
  message;
  status;
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

