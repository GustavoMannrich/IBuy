import { inject, injectable } from 'tsyringe';
import UserProfile from '../entities/UserProfile';
import UserProfileRepository from '../repositories/UserProfileRepository';
import UserRepository from '../../user/repositories/UserRepository';
import UserNotFoundError from '../../user/errors/UserNotFoundError';

interface IRequest {
    user_id: number;
    description: string;
}

@injectable()
export default class EditUserProfileService {
    constructor(
        @inject('UserProfileRepository')
        private userProfileRepository: UserProfileRepository
    ) {}

    async execute({ user_id, description }: IRequest): Promise<UserProfile> {
        let userProfile = await this.userProfileRepository.findById(user_id);

        if (!userProfile) {
            throw new UserNotFoundError();
        }

        userProfile.description = description;

        const updated_userProfile = await this.userProfileRepository.edit(
            userProfile
        );

        return updated_userProfile;
    }
}
