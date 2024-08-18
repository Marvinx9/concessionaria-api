import { CategoriesRepository } from '../../repositories/implementations/categories.repository';
import { ListCategoriesController } from './listCategories.controller';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

export default (): ListCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
  );

  return listCategoriesController;
};
