import { ProductsInterface } from './products.interface';
import { Product } from './products.model';

const createProduct = async (productData: ProductsInterface) => {
  const result = await Product.create(productData);
  return result;
};

export const ProductsService = {
  createProduct,
};
