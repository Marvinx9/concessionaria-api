import { container } from 'tsyringe';
import { ICategoriesRepository } from '../../modules/cars/repositories/iCategories.repository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/categories.repository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/iSpecifications.repository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/specifications.repository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
