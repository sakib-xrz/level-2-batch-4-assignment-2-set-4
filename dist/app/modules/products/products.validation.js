"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const CreateValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        brand: zod_1.z.string({
            required_error: 'Brand is required',
            invalid_type_error: 'Brand must be a string',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
            invalid_type_error: 'Price must be a number',
        }),
        type: zod_1.z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
            required_error: 'Type is required',
            invalid_type_error: 'Type must be one of Mountain, Road, Hybrid, BMX, Electric',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        }),
        quantity: zod_1.z.number({
            required_error: 'Quantity is required',
            invalid_type_error: 'Quantity must be a number',
        }),
        inStock: zod_1.z.boolean({
            required_error: 'In Stock is required',
            invalid_type_error: 'In Stock must be a either true or false',
        }),
    }),
});
const UpdateValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            invalid_type_error: 'Name must be a string',
        })
            .optional(),
        brand: zod_1.z
            .string({
            invalid_type_error: 'Brand must be a string',
        })
            .optional(),
        price: zod_1.z
            .number({
            invalid_type_error: 'Price must be a number',
        })
            .optional(),
        type: zod_1.z
            .enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
            invalid_type_error: 'Type must be one of Mountain, Road, Hybrid, BMX, Electric',
        })
            .optional(),
        description: zod_1.z
            .string({
            invalid_type_error: 'Description must be a string',
        })
            .optional(),
        quantity: zod_1.z
            .number({
            invalid_type_error: 'Quantity must be a number',
        })
            .optional(),
        inStock: zod_1.z
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
exports.default = ProductsValidation;
