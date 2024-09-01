import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/iCategories.repository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/iSpecifications.repository';
import { SpecificationsRepository } from '../../modules/cars/infra/typeorm/repositories/specifications.repository';
import { IUsersRepository } from '../../modules/accounts/repositories/iUsersRepository';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/usersRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/categories.repository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
