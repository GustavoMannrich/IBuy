import { inject, injectable } from 'tsyringe';
import UserProfile from '../entities/UserProfile';
import UserProfileRepository from '../repositories/UserProfileRepository';
import UserProfileNotFoundError from '../errors/UserProfileNotFoundError';

@injectable()
export default class GetUserProfileService {
    constructor(
        @inject('UserProfileRepository')
        private userProfileRepository: UserProfileRepository
    ) {}

    async execute(user_id: number): Promise<UserProfile> {
        const user = await this.userProfileRepository.findById(user_id);

        if (!user) {
            throw new UserProfileNotFoundError();
        }

        return user;
    }
}
