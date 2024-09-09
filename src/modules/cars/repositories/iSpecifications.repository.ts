import { Specifications } from '../infra/typeorm/entities/specification';

interface ICreateSpecificationDto {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDto): Promise<void>;
  list(): Promise<Specifications[]>;
  findByName(name: string): Promise<Specifications>;
  findByIds(ids: string[]): Promise<Specifications[]>;
}

export { ISpecificationsRepository, ICreateSpecificationDto };
