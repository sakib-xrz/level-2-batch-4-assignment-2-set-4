"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersValidation = void 0;
const zod_1 = require("zod");
const CreateValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email({
            message: 'Email is invalid',
        }),
        product: zod_1.z.string({
            required_error: 'Product id is required',
            invalid_type_error: 'Product id must be a string',
        }),
        quantity: zod_1.z.number({
            required_error: 'Quantity is required',
            invalid_type_error: 'Quantity must be a number',
        }),
        totalPrice: zod_1.z.number({
            required_error: 'Total price is required',
            invalid_type_error: 'Total price must be a number',
        }),
    }),
});
exports.OrdersValidation = { CreateValidation };
