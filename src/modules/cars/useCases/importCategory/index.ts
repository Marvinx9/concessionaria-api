import { CategoriesRepository } from '../../repositories/implementations/categories.repository';
import { ImportCategoryController } from './importCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
