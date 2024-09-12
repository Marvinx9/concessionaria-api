import { Router } from 'express';
import { CreateRentalController } from '../../../../modules/rentals/useCases/createRental/createRental.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { DevolutionRentalController } from '../../../../modules/rentals/useCases/devolutionRental/devolutionRental.controller';
import { ListRentalsByUserController } from '../../../../modules/rentals/useCases/listRentalsByUser/listRentalsByUser.controller';

const rentalRoutes = Router();

const listRentalsByUserController = new ListRentalsByUserController();
const createRouterController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

rentalRoutes.get(
  '/user',
  ensureAuthenticated,
  listRentalsByUserController.handle,
);

rentalRoutes.post('/', ensureAuthenticated, createRouterController.handle);

rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalController.handle,
);

export { rentalRoutes };
