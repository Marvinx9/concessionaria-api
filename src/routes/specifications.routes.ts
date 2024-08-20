import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/createSpecification.controller';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/listSpecifications.controller';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
