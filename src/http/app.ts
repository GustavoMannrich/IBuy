import express from "express";
import errorHandler from "./middlewares/errorHandler";
import logRequest from "./middlewares/logRequest";
import router from "./routes";

const app = express();

app.use(express.json());

app.use(logRequest);
app.use(errorHandler);

app.use(router);

export default app;
