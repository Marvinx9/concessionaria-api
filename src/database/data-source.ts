import { DataSource } from 'typeorm';

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
  entities: [],
  migrations: ['src/database/migrations/*.ts'],
});
