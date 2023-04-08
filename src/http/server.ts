import Logger from "../utils/Logger";
import app from "./app";

const port = process.env.PORT || 3333;
const url = process.env.AMBIENT === "PROD" ? "Unknown production URL" : `http://localhost:${port}`;

app.listen(port, () => {
  Logger.info(`Server is running on ${url}`);
});
