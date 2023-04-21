import { Repository } from 'typeorm';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IEditProductDTO from '../dtos/IEditProductDTO';
import Product from '../entities/Product';
import IProductRepository from './IProductRepository';
import { appDataSource } from '../../../../shared/orm/dataSource';

export default class ProductRepository implements IProductRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = appDataSource.getRepository(Product);
    }

    async create({
        user_id,
        name,
        description,
        price,
    }: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({
            user_id,
            name,
            description,
            price,
        });

        await this.repository.save(product);

        return product;
    }

    async edit({
        id,
        name,
        description,
        price,
    }: IEditProductDTO): Promise<Product> {
        const updated_product = await this.repository.save({
            id,
            name,
            description,
            price,
        });

        return updated_product;
    }

    async findById(id: number): Promise<Product> {
        const product = await this.repository.findOneBy({ id });

        return product;
    }

    async findByName(user_id: number, name: string): Promise<Product> {
        const product = await this.repository.findOneBy({ user_id, name });

        return product;
    }

    async delete(product: Product): Promise<void> {
        await this.repository.remove(product);
    }
}
