import { inject, injectable } from 'tsyringe';
import UserRepository from '../repositories/UserRepository';
import UserNotFoundError from '../errors/UserNotFoundError';

@injectable()
export default class DeleteUserService {
    constructor(
        @inject('UserRepository') private userRepository: UserRepository
    ) {}

    async execute(id: number): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new UserNotFoundError();
        }

        await this.userRepository.delete(user);
    }
}
