import { DataSource } from 'typeorm';
import { Category } from '../../../modules/cars/infra/typeorm/entities/category';
import { Specifications } from '../../../modules/cars/infra/typeorm/entities/specification';
import { Users } from '../../../modules/accounts/infra/typeorm/entities/user';
import { Car } from '../../../modules/cars/infra/typeorm/entities/car';
import { CarImage } from '../../../modules/cars/infra/typeorm/entities/carImage';
import { Rental } from '../../../modules/rentals/infra/typeorm/entities/rental';
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
  entities: [Category, Specifications, Users, Car, CarImage, Rental],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
});
