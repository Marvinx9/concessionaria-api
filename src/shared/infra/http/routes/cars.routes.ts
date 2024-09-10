import { Router } from 'express';
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/createCar.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListAvailableCarsController } from '../../../../modules/cars/useCases/listAvailableCars/listAvailableCars.controller';
import { CreateCarSpecificationController } from '../../../../modules/cars/useCases/createCarSpecification/createCarSpecification.controller';

const carsRoutes = Router();

const listAvailableCarsController = new ListAvailableCarsController();
const createCarController = new CreateCarController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
);

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

export { carsRoutes };
