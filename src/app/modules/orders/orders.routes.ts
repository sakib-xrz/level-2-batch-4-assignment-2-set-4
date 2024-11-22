import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OrdersValidation } from './orders.validation';
import { OrdersController } from './orders.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(OrdersValidation.CreateValidation),
  OrdersController.createOrder,
);

export const OrdersRoutes = router;
