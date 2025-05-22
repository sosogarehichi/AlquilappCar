import { Router } from 'express';
import IndexController from '../controllers';

const router = Router();
const indexController = new IndexController();

export const setRoutes = () => {
  router.get('/', indexController.home);
  // Add more routes as needed
  return router;
};