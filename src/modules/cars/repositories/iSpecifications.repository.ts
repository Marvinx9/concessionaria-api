import { Category } from '../model/category';
import { Specification } from '../model/specification';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDto): void;
  findByName(name: string): Specification;
  list(): Category[];
}

export { ISpecificationsRepository, ICreateSpecificationDto };
