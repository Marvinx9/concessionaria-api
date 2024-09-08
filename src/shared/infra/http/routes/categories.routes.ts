import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../../../../modules/cars/useCases/createCategory/createCategory.controller';
import { ImportCategoryController } from '../../../../modules/cars/useCases/importCategory/importCategoryController';
import { ListCategoriesController } from '../../../../modules/cars/useCases/listCategories/listCategories.controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRoutes.post(
  '/import',
  ensureAuthenticated,
  ensureAdmin,
  upload.single('file'),
  importCategoryController.handle,
);

categoriesRoutes.get('/', listCategoriesController.handle);

export { categoriesRoutes };
