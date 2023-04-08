import { AppError } from "../../http/errors/AppError";

export default class InvalidEnvVariablesError extends AppError {
  constructor() {
    super("Invalid environment variables");
  }
}
