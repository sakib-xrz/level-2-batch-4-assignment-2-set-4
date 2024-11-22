"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const products_model_1 = require("../products/products.model");
const orders_model_1 = require("./orders.model");
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_model_1.Product.findById(orderData.product);
    if (!product) {
        throw new Error('Product not found');
    }
    if (product.quantity < orderData.quantity) {
        throw new ApiError_1.default(400, 'Insufficient stock');
    }
    product.quantity -= orderData.quantity;
    yield product.save();
    const result = yield orders_model_1.Orders.create(orderData);
    return result;
});
const getRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.Orders.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1,
            },
        },
    ]);
    return result[0] || { totalRevenue: 0 };
});
exports.OrdersService = { createOrder, getRevenue };
