import { env } from "../env";
import Logger from "../utils/Logger";
import app from "./app";

const port = env.PORT || 3333;
const url = env.NODE_ENV === "dev" ? `http://localhost:${port}` : `Unknown production URL`;

app.listen(port, () => {
  Logger.info(`Server is running on ${url}`);
  Logger.warning(`Started on ${env.NODE_ENV} mode!`);
});
