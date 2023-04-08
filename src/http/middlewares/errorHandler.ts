import { NextFunction, Request, Response } from "express";
import Logger from "../../utils/Logger";
import { AppError } from "../errors/AppError";

export default (error: Error, request: Request, response: Response, next: NextFunction) => {
  Logger.error(error.message);

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${error.message}`,
  });
};
