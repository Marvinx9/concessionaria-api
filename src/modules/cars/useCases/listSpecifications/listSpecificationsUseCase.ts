import { inject, injectable } from 'tsyringe';
import { Specifications } from '../../infra/typeorm/entities/specification';
import { SpecificationsRepository } from '../../infra/typeorm/repositories/specifications.repository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepository,
  ) {}

  async execute(): Promise<Specifications[]> {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}
export { ListSpecificationsUseCase };
