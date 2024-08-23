import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/category';
import { Specification } from '../modules/cars/entities/specification';
import { User } from '../modules/accounts/entities/user';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'postgres',
  synchronize: true,
  logging: false,
  entities: [Category, Specification, User],
  migrations: ['src/database/migrations/*.ts'],
});
