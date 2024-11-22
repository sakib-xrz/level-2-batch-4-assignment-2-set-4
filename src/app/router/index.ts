import express from 'express';
import { ProductsRoutes } from '../modules/products/products.routes';

const router = express.Router();

type Route = {
  path: string;
  route: express.Router;
};

const routes: Route[] = [
  {
    path: '/products',
    route: ProductsRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
