import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import ProductsValidation from './products.validation';
import { ProductsController } from './products.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductsValidation.CreateValidation),
  ProductsController.createProduct,
);

export const ProductsRoutes = router;
