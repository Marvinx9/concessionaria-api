import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';
import { CreateSpecificationController } from './createSpecification.controller';
import { CreateSpecificationUseCase } from './createSpecificationUseCase';

export default (): CreateSpecificationController => {
  const specificationRepository = new SpecificationsRepository();
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository,
  );
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
  );

  return createSpecificationController;
};
