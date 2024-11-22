import ApiError from '../../../errors/ApiError';
import { Product } from '../products/products.model';
import { OrdersInterface } from './orders.interface';
import { Orders } from './orders.model';

const createOrder = async (orderData: OrdersInterface) => {
  const product = await Product.findById(orderData.product);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.quantity < orderData.quantity) {
    throw new ApiError(400, 'Insufficient stock');
  }

  product.quantity -= orderData.quantity;
  await product.save();

  const result = await Orders.create(orderData);
  return result;
};

const getRevenue = async () => {
  const result = await Orders.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result[0] || { totalRevenue: 0 };
};

export const OrdersService = { createOrder, getRevenue };
