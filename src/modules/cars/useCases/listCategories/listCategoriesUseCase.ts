import { inject, injectable } from 'tsyringe';
import { Category } from '../../infra/typeorm/entities/category';
import { CategoriesRepository } from '../../infra/typeorm/repositories/categories.repository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
export { ListCategoriesUseCase };
