import { Repository } from 'typeorm';
import User from '../entities/User';
import IUserRepository from './IUserRepository';
import { appDataSource } from '../../../../shared/orm/dataSource';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IEditUserDTO from '../dtos/IEditUserDTO';

export default class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = appDataSource.getRepository(User);
    }

    async create({ name, cpf_cnpj }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            cpf_cnpj,
        });

        await this.repository.save(user);

        return user;
    }

    async edit(user: IEditUserDTO): Promise<User> {
        const updated_user = await this.repository.save(user);

        return updated_user;
    }

    async findById(id: number): Promise<User> {
        const user = await this.repository.findOneBy({ id });

        return user;
    }

    async findByCpfCnpj(cpf_cnpj: string): Promise<User> {
        const user = await this.repository.findOneBy({ cpf_cnpj });

        return user;
    }

    async delete(user: User): Promise<void> {
        await this.repository.remove(user);
    }
}
