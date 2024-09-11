import { Router } from 'express';
import { CreateRentalController } from '../../../../modules/rentals/useCases/createRental/createRental.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalRoutes = Router();

const createRouterController = new CreateRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRouterController.handle);

export { rentalRoutes };
