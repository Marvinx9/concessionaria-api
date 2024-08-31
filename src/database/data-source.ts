import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/category';
import { Specifications } from '../modules/cars/entities/specification';
import { Users } from '../modules/accounts/entities/user';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Category, Specifications, Users],
  migrations: ['src/database/migrations/*.ts'],
});
