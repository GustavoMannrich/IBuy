import { inject, injectable } from 'tsyringe';
import UserProfileNotFoundError from '../errors/UserProfileNotFoundError';
import UserProfileRepository from '../repositories/UserProfileRepository';

@injectable()
export default class DeleteUserProfileService {
    constructor(
        @inject('UserProfileRepository')
        private userProfileRepository: UserProfileRepository
    ) {}

    async execute(id: number): Promise<void> {
        const userProfile = await this.userProfileRepository.findById(id);

        if (!userProfile) {
            throw new UserProfileNotFoundError();
        }

        await this.userProfileRepository.delete(userProfile);
    }
}
