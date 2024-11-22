import { z } from 'zod';

const CreateValidation = z.object({
  body: z.object({
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
  }),
});

const UpdateValidation = z.object({
  params: z.object({
    id: z.string({
      invalid_type_error: 'Id must be a string',
    }),
  }),
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be a string',
      })
      .optional(),
    brand: z
      .string({
        invalid_type_error: 'Brand must be a string',
      })
      .optional(),
    price: z
      .number({
        invalid_type_error: 'Price must be a number',
      })
      .optional(),
    type: z
      .enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
        invalid_type_error:
          'Type must be one of Mountain, Road, Hybrid, BMX, Electric',
      })
      .optional(),
    description: z
      .string({
        invalid_type_error: 'Description must be a string',
      })
      .optional(),
    quantity: z
      .number({
        invalid_type_error: 'Quantity must be a number',
      })
      .optional(),
    inStock: z
      .boolean({
        invalid_type_error: 'In Stock must be a either true or false',
      })
      .optional(),
  }),
});

const ProductsValidation = {
  CreateValidation,
  UpdateValidation,
};

export default ProductsValidation;
