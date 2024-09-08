import { Router } from 'express';
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/createCar.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListAvailableCarsController } from '../../../../modules/cars/useCases/listAvailableCars/listAvailableCars.controller';

const carsRoutes = Router();

const listAvailableCarsController = new ListAvailableCarsController();
const createCarController = new CreateCarController();

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

export { carsRoutes };
