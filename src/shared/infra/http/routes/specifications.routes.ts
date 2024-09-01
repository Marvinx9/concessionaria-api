import { Router } from 'express';
import { ListSpecificationsController } from '../../../../modules/cars/useCases/listSpecifications/listSpecifications.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../../../../modules/cars/useCases/createSpecification/createSpecification.controller';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
