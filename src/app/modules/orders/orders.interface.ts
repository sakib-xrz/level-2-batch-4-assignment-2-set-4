import { Types } from 'mongoose';

export interface OrdersInterface {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
}
