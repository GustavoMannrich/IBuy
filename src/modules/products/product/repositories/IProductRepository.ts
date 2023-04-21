import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IEditProductDTO from '../dtos/IEditProductDTO';
import Product from '../entities/Product';

export default interface IProductRepository {
    create({
        user_id,
        name,
        description,
        price,
    }: ICreateProductDTO): Promise<Product>;
    edit({ id, name, description, price }: IEditProductDTO): Promise<Product>;
    findById(id: number): Promise<Product>;
    findByName(user_id: number, name: string): Promise<Product>;
    delete(product: Product): Promise<void>;
}
