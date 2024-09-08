import { Router } from 'express';
import { ListSpecificationsController } from '../../../../modules/cars/useCases/listSpecifications/listSpecifications.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '../../../../modules/cars/useCases/createSpecification/createSpecification.controller';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle,
);

specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
