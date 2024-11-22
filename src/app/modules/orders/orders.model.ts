import mongoose, { Schema } from 'mongoose';
import { OrdersInterface } from './orders.interface';

const OrdersSchema = new mongoose.Schema<OrdersInterface>(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Orders = mongoose.model('Orders', OrdersSchema);
