import { NextFunction, Request, Response } from "express";
import Logger from "../../utils/Logger";

export default (request: Request, response: Response, next: NextFunction) => {
  Logger.request(`${request.method} ${request.url}`);

  return next();
};
