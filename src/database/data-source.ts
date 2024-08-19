import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/category';
import { Specification } from '../modules/cars/entities/specification';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'database_concessionaria',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'concessionaria',
  synchronize: true,
  logging: false,
  entities: [Category, Specification],
  migrations: ['src/database/migrations/*.ts'],
});
