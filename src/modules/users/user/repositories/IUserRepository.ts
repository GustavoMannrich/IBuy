import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IEditUserDTO from '../dtos/IEditUserDTO';
import User from '../entities/User';

export default interface IUserRepository {
    create({ name, cpf_cnpj }: ICreateUserDTO): Promise<User>;
    edit({ id, name }: IEditUserDTO): Promise<User>;
    findById(id: number): Promise<User>;
    findByCpfCnpj(cpf_cnpj: string): Promise<User>;
    delete(user: User): Promise<void>;
}
