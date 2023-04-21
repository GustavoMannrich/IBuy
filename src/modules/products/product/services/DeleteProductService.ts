import { inject, injectable } from 'tsyringe';
import ProductNotFoundError from '../errors/ProductNotFoundError';
import ProductRepository from '../repositories/ProductRepository';

@injectable()
export default class DeleteProductService {
    constructor(
        @inject('ProductRepository')
        private productRepository: ProductRepository
    ) {}

    async execute(id: number): Promise<void> {
        const product = await this.productRepository.findById(id);

        if (!product) {
            throw new ProductNotFoundError();
        }

        await this.productRepository.delete(product);
    }
}
