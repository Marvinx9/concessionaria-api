import { CategoriesRepository } from '../../repositories/implementations/categories.repository';
import { CreateCategoryController } from './createCategory.controller';
import { CreateCategoryUseCase } from './createCategoryUseCase';

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase,
  );

  return createCategoryController;
};
