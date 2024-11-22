import { Request, Response } from 'express';
import { ProductsService } from './products.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductsService.createProduct(productData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Bicycle created successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const { searchTerm } = req.query;
  const result = await ProductsService.getAllProducts(searchTerm as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycles retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getProductById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductsService.getProductById(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle retrieved successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const productData = req.body;
  const result = await ProductsService.updateProduct(id, productData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await ProductsService.deleteProduct(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bicycle deleted successfully',
    data: {},
  });
});

export const ProductsController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
