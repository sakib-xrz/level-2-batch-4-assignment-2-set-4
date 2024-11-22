import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrdersService } from './orders.services';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrdersService.createOrder(orderData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getRevenue = catchAsync(async (_req: Request, res: Response) => {
  const result = await OrdersService.getRevenue();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Revenue fetched successfully',
    data: result,
  });
});

export const OrdersController = { createOrder, getRevenue };
