import { inject, injectable } from 'tsyringe';
import Product from '../entities/Product';
import ProductNotFoundError from '../errors/ProductNotFoundError';
import ProductRepository from '../repositories/ProductRepository';

interface IRequest {
    id: number;
    name: string;
    description: string;
    price: number;
}

@injectable()
export default class EditProductService {
    constructor(
        @inject('ProductRepository')
        private productRepository: ProductRepository
    ) {}

    async execute({
        id,
        name,
        description,
        price,
    }: IRequest): Promise<Product> {
        const product = await this.productRepository.findById(id);

        if (!product) {
            throw new ProductNotFoundError();
        }

        product.name = name;
        product.description = description;
        product.price = price;

        const updated_product = await this.productRepository.edit(product);

        return updated_product;
    }
}
