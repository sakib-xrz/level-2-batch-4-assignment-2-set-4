import mongoose from 'mongoose';

const OrdersSchema = new mongoose.Schema({});

export const Orders = mongoose.model('Orders', OrdersSchema);