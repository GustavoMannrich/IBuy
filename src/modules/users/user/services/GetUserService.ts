import { inject, injectable } from 'tsyringe';
import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';
import UserNotFoundError from '../errors/UserNotFoundError';

@injectable()
export default class GetUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository
    ) {}

    async execute(id: number): Promise<User> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new UserNotFoundError();
        }

        return user;
    }
}
