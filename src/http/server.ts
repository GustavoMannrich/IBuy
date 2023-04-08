import Logger from "../utils/Logger";
import app from "./app";

const port = process.env.PORT || 3333;
const url = process.env.NODE_ENV === "development" ? `http://localhost:${port}` : `Unknown production URL`;

app.listen(port, () => {
  Logger.info(`Server is running on ${url}`);
  Logger.warning(`Started on ${process.env.NODE_ENV} mode!`);
});
