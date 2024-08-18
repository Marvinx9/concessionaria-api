import { Category } from '../../entities/category';
import { CategoriesRepository } from '../../repositories/implementations/categories.repository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
export { ListCategoriesUseCase };
