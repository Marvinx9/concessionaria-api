import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import '../../container';
import '../typeorm/data-source';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';
import { dataSource } from '../typeorm/data-source';
import { AppError } from '../../errors/appError';
import { router } from './routes';

/* eslint-disable @typescript-eslint/no-unused-vars */
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(3333, () => console.log('Server is running on port 3333!'));
  })
  .catch((error) =>
    console.log('Error during Data Source initialization:', error),
  );
