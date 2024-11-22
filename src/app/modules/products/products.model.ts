import mongoose from 'mongoose';
import { ProductsInterface } from './products.interface';

interface ProductDocument extends Document, ProductsInterface {
  updateStockStatus(): Promise<void>;
}

const ProductsSchema = new mongoose.Schema<ProductsInterface>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

// Middleware to manage `inStock` before saving
ProductsSchema.pre<ProductDocument>('save', function (next) {
  this.inStock = this.quantity > 0;
  next();
});

// Middleware for update queries to manage `inStock`
ProductsSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate() as Partial<ProductsInterface>;
  if (update.quantity !== undefined) {
    update.inStock = update.quantity > 0;
  }
  next();
});

export const Product = mongoose.model('Products', ProductsSchema);
