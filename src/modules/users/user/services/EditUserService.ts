import { inject, injectable } from 'tsyringe';
import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';
import UserNotFoundError from '../errors/UserNotFoundError';

interface IRequest {
    id: number;
    name: string;
}

@injectable()
export default class EditUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository
    ) {}

    async execute({ id, name }: IRequest): Promise<User> {
        let user = await this.userRepository.findById(id);

        if (!user) {
            throw new UserNotFoundError();
        }

        user.name = name;

        const updated_user = await this.userRepository.edit(user);

        return updated_user;
    }
}
