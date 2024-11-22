import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import ProductsValidation from './products.validation';
import { ProductsController } from './products.controller';

const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(ProductsValidation.CreateValidation),
    ProductsController.createProduct,
  )
  .get(ProductsController.getAllProducts);

router
  .route('/:id')
  .get(ProductsController.getProductById)
  .put(
    validateRequest(ProductsValidation.UpdateValidation),
    ProductsController.updateProduct,
  )
  .delete(ProductsController.deleteProduct);

export const ProductsRoutes = router;
