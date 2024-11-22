import express from 'express';
import { ProductsRoutes } from '../modules/products/products.routes';
import { OrdersRoutes } from '../modules/orders/orders.routes';

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
  {
    path: '/orders',
    route: OrdersRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
