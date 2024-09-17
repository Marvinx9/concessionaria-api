import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../config/upload';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/createUserController';
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ProfileUserUseController } from '../../../../modules/accounts/useCases/profileUserUseCase/profileUser.controller';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

const profileUserUseController = new ProfileUserUseController();

usersRoutes.get(
  '/profile',
  ensureAuthenticated,
  profileUserUseController.handle,
);

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
