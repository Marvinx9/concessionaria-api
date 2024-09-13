import { Router } from 'express';
import { AuthenticateUserController } from '../../../../modules/accounts/useCases/authenticateUser/authenticateUserController';
import { RefreshTokenController } from '../../../../modules/accounts/useCases/refreshToken/refreshToken.controller';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post('/token', authenticateUserController.handle);

authenticateRoutes.post('/refresh_token', refreshTokenController.handle);

export { authenticateRoutes };
