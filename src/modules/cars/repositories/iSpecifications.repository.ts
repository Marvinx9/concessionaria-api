import { Category } from '../entities/category';
import { Specification } from '../entities/specification';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDto): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Category[]>;
}

export { ISpecificationsRepository, ICreateSpecificationDto };
