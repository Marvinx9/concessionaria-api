import { Specification } from '../../model/specification';
import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();
    return specifications;
  }
}
export { ListSpecificationsUseCase };
