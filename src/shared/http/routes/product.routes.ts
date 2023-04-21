import { Router } from 'express';
import CreateProductController from '../../../modules/products/product/controllers/CreateProductController';
import GetProductController from '../../../modules/products/product/controllers/GetProductController';
import EditProductController from '../../../modules/products/product/controllers/EditProductController';
import DeleteProductController from '../../../modules/products/product/controllers/DeleteProductController';

const productRouter = Router();

const createProductController = new CreateProductController();
const editProductController = new EditProductController();
const getProductController = new GetProductController();
const deleteProductController = new DeleteProductController();

productRouter.post('/', createProductController.handle);
productRouter.put('/:product_id', editProductController.handle);
productRouter.get('/:product_id', getProductController.handle);
productRouter.delete('/:product_id', deleteProductController.handle);

export default productRouter;
