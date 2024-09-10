import { In, Repository } from 'typeorm';
import { Specifications } from '../entities/specification';
import {
  ICreateSpecificationDto,
  ISpecificationsRepository,
} from '../../../repositories/iSpecifications.repository';
import { dataSource } from '../../../../../shared/infra/typeorm/data-source';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = dataSource.getRepository(Specifications);
  }

  async findByIds(ids: string[]): Promise<Specifications[]> {
    const specifications = await this.repository.findBy({
      id: In(ids),
    });
    return specifications;
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDto): Promise<Specifications> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }

  async list(): Promise<Specifications[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specifications> {
    const specification = await this.repository.findOneBy({ name });
    return specification;
  }
}

export { SpecificationsRepository };
