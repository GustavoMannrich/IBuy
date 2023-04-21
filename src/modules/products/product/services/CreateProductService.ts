import { inject, injectable } from 'tsyringe';
import Product from '../entities/Product';
import IUserRepository from '../../../users/user/repositories/IUserRepository';
import ProductNameAlreadyExistsError from '../errors/ProductNameAlreadyExistsError';
import IProductRepository from '../repositories/IProductRepository';
import UserNotFoundError from '../../../users/user/errors/UserNotFoundError';

interface IRequest {
    user_id: number;
    name: string;
    description: string;
    price: number;
}

@injectable()
export default class CreateProductService {
    constructor(
        @inject('ProductRepository')
        private productRepository: IProductRepository,
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) {}

    async execute({
        user_id,
        name,
        description,
        price,
    }: IRequest): Promise<Product> {
        const userExists = await this.userRepository.findById(user_id);

        if (!userExists) {
            throw new UserNotFoundError();
        }

        const productExists = await this.productRepository.findByName(
            user_id,
            name
        );

        if (productExists) {
            throw new ProductNameAlreadyExistsError();
        }

        const product = this.productRepository.create({
            user_id,
            name,
            description,
            price,
        });

        return product;
    }
}
