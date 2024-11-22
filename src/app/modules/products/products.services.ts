import { productsSearchableFields } from './products.constant';
import { ProductsInterface } from './products.interface';
import { Product } from './products.model';

const createProduct = async (productData: ProductsInterface) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProducts = async (searchTerm: string) => {
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: productsSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Product.find(whereConditions);
  const total = await Product.countDocuments(whereConditions);
  return { meta: { total }, data: result };
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

export const ProductsService = {
  createProduct,
  getAllProducts,
  getProductById,
};
