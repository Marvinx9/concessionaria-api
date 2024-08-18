import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/category';
import { Specification } from '../modules/cars/entities/specification';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database_concessionaria',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'concessionaria',
  synchronize: true,
  entities: [Category, Specification],
  migrations: ['src/database/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
