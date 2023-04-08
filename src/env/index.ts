import "dotenv/config";
import { z } from "zod";
import Logger from "../utils/Logger";
import InvalidEnvVariablesError from "./errors/InvalidEnvVariablesError";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "prod"]).default("dev"),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  Logger.error("Invalid environment variables", _env.error.format());

  throw new InvalidEnvVariablesError();
}

export const env = _env.data;
