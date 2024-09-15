import { Router } from 'express';
import { SendForgotPasswordMailController } from '../../../../modules/accounts/useCases/sendForgotPasswordMail/sendForgotPasswordMail.controller';
import { ResetPasswordUserController } from '../../../../modules/accounts/useCases/resetPasswordUser/resetPasswordUser.controller';

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resePasswordController = new ResetPasswordUserController();

passwordRoutes.post('/forgot', sendForgotPasswordMailController.handle);
passwordRoutes.post('/reset', resePasswordController.handle);

export { passwordRoutes };
