import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/iCategories.repository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/categories.repository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/iSpecifications.repository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/specifications.repository';
import { IUsersRepository } from '../../modules/accounts/repositories/iUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/usersRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'IUsersRepository',
  UsersRepository,
);
