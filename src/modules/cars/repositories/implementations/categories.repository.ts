import { Category } from '../../entities/category';
import { Repository } from 'typeorm';
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from '../iCategories.repository';
import { dataSource } from '../../../../database/data-source';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDto): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOneBy({ name });

    return category;
  }
}

export { CategoriesRepository };
