import { appDataSource } from "./dataSource";
import Logger from "../../utils/Logger";

export function connectToDatabase() {
  appDataSource
    .initialize()
    .then(() => {
      Logger.info("Database connected!");
    })
    .catch((error) => {
      Logger.error("Database error: ", error);
    });
}
