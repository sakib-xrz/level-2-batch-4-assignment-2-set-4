import { z } from 'zod';

const CreateValidation = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({
        message: 'Email is invalid',
      }),
    product: z.string({
      required_error: 'Product id is required',
      invalid_type_error: 'Product id must be a string',
    }),
    quantity: z.number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    }),
    totalPrice: z.number({
      required_error: 'Total price is required',
      invalid_type_error: 'Total price must be a number',
    }),
  }),
});

export const OrdersValidation = { CreateValidation };
