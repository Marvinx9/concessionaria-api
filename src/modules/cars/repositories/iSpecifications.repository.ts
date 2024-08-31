import { Specifications } from '../entities/specification';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDto): Promise<void>;
  list(): Promise<Specifications[]>;
  findByName(name: string): Promise<Specifications>;
}

export { ISpecificationsRepository, ICreateSpecificationDto };
