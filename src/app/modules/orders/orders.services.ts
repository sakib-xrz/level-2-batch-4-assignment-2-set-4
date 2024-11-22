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

export const OrdersService = { createOrder };
