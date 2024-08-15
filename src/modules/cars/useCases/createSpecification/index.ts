import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';
import { CreateSpecificationController } from './createSpecification.controller';
import { CreateSpecificationUseCase } from './createSpecificationUseCase';

const specificationRepository = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
