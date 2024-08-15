import { Category } from '../../model/category';
import { CategoriesRepository } from '../../repositories/implementations/categories.repository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}
export { ListCategoriesUseCase };
