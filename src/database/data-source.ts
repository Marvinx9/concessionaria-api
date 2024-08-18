import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/category';
import { Specification } from '../modules/cars/entities/specification';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'postgres',
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: ['src/database/migrations/*.ts'],
  entities: [Category, Specification],
});
