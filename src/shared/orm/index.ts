import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import Logger from "../../utils/Logger";

export function connectToDatabase() {
  AppDataSource.initialize()
    .then(() => {
      Logger.info("Database connected!");
    })
    .catch((error) => {
      Logger.error("Database error: ", error);
    });
}
