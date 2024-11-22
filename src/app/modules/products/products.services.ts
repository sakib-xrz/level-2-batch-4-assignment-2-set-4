import { ProductsInterface } from './products.interface';
import { Product } from './products.model';

const createProduct = async (productData: ProductsInterface) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

export const ProductsService = {
  createProduct,
  getAllProducts,
};
