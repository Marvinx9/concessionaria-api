import { Specification } from '../../entities/specification';
import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}
export { ListSpecificationsUseCase };
