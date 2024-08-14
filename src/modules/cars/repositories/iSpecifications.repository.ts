import { Category } from '../model/category';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDto): void;
  findByName(name: string): Category;
  list(): Category[];
}

export { ISpecificationsRepository, ICreateSpecificationDto };
