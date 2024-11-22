"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const products_validation_1 = __importDefault(require("./products.validation"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router
    .route('/')
    .post((0, validateRequest_1.default)(products_validation_1.default.CreateValidation), products_controller_1.ProductsController.createProduct)
    .get(products_controller_1.ProductsController.getAllProducts);
router
    .route('/:id')
    .get(products_controller_1.ProductsController.getProductById)
    .put((0, validateRequest_1.default)(products_validation_1.default.UpdateValidation), products_controller_1.ProductsController.updateProduct)
    .delete(products_controller_1.ProductsController.deleteProduct);
exports.ProductsRoutes = router;
