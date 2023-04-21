import { inject, injectable } from 'tsyringe';
import Product from '../entities/Product';
import ProductRepository from '../repositories/ProductRepository';
import ProductNotFoundError from '../errors/ProductNotFoundError';

@injectable()
export default class GetProductService {
    constructor(
        @inject('ProductRepository')
        private productRepository: ProductRepository
    ) {}

    async execute(id: number): Promise<Product> {
        const product = await this.productRepository.findById(id);

        if (!product) {
            throw new ProductNotFoundError();
        }

        return product;
    }
}
