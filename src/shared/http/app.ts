import express from "express";
import errorHandler from "./middlewares/errorHandler";
import logRequest from "./middlewares/logRequest";
import router from "./routes";
import { connectToDatabase } from "../orm";

const app = express();

app.use(express.json());

app.use(logRequest);
app.use(errorHandler);

app.use(router);

export default app;