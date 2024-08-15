import { CategoriesRepository } from '../../repositories/categories.repository';
import { ListCategoriesController } from './listCategories.controller';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
