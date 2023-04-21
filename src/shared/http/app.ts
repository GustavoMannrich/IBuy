import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/errorHandler';
import logRequest from './middlewares/logRequest';
import router from './routes';
import '../container';

const app = express();

app.use(express.json());
app.use(logRequest);

app.use('/api/v1', router);

app.use(errorHandler); // Error Handler deve ser o último use

export default app;
