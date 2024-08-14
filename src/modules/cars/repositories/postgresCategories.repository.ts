import { Category } from '../model/category';
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from './iCategories.repository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDto): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
