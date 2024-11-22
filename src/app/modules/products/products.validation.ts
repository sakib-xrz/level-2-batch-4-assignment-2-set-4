import { z } from 'zod';

const CreateValidation = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  brand: z.string({
    required_error: 'Brand is required',
    invalid_type_error: 'Brand must be a string',
  }),
  price: z.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a number',
  }),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    required_error: 'Type is required',
    invalid_type_error:
      'Type must be one of Mountain, Road, Hybrid, BMX, Electric',
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
  quantity: z.number({
    required_error: 'Quantity is required',
    invalid_type_error: 'Quantity must be a number',
  }),
  inStock: z.boolean({
    required_error: 'In Stock is required',
    invalid_type_error: 'In Stock must be a either true or false',
  }),
});

const ProductsValidation = {
  CreateValidation,
};

export default ProductsValidation;
