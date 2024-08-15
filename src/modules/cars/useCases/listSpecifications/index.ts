import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';
import { ListSpecificationsController } from './listSpecifications.controller';
import { ListSpecificationsUseCase } from './listSpecificationsUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository,
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase,
);

export { listSpecificationsController };
