import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ProductsService } from './products.services';
import sendResponse from '../../../shared/sendResponse';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductsService.createProduct(productData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});

export const ProductsController = {
  createProduct,
};
