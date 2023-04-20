import { inject, injectable } from 'tsyringe';
import User from '../entities/User';
import IUserRepository from '../repositories/IUserRepository';
import UserAlreadyExistsError from '../errors/UserAlreadyExistsError';

interface IRequest {
    name: string;
    cpf_cnpj: string;
}

@injectable()
export default class CreateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) {}

    async execute({ name, cpf_cnpj }: IRequest): Promise<User> {
        const userExists = await this.userRepository.findByCpfCnpj(cpf_cnpj);

        if (userExists) {
            throw new UserAlreadyExistsError();
        }

        const user = this.userRepository.create({ name, cpf_cnpj });

        return user;
    }
}
