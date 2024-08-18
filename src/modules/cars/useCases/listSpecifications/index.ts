import { SpecificationsRepository } from '../../repositories/implementations/specifications.repository';
import { ListSpecificationsController } from './listSpecifications.controller';
import { ListSpecificationsUseCase } from './listSpecificationsUseCase';

export default (): ListSpecificationsController => {
  const specificationsRepository = new SpecificationsRepository();
  const listSpecificationsUseCase = new ListSpecificationsUseCase(
    specificationsRepository,
  );
  const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase,
  );

  return listSpecificationsController;
};
