import { Repository } from 'typeorm';
import { dataSource } from '../../../../database/data-source';
import { Specifications } from '../../entities/specification';
import {
  ICreateSpecificationDto,
  ISpecificationsRepository,
} from '../iSpecifications.repository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = dataSource.getRepository(Specifications);
  }

  async create({ name, description }: ICreateSpecificationDto): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);
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
