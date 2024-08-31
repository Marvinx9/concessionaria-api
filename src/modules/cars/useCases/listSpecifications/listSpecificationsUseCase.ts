import { inject, injectable } from 'tsyringe';
import { Specifications } from '../../entities/specification';
import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';

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
