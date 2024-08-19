import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { router } from './routes';
import { dataSource } from './database/data-source';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(3333, () => console.log('Server is running on port 3333!'));
  })
  .catch((error) =>
    console.log('Error during Data Source initialization:', error),
  );
