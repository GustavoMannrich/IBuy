import { inject, injectable } from 'tsyringe';
import UserNotFoundError from '../../user/errors/UserNotFoundError';
import UserProfile from '../entities/UserProfile';
import IUserRepository from '../../user/repositories/IUserRepository';
import IUserProfileRepository from '../repositories/IUserProfileRepository';
import UserProfileAlreadyExistsError from '../errors/UserProfileAlreadyExistsError';

interface IRequest {
    user_id: number;
    description: string;
}

@injectable()
export default class CreateUserProfileService {
    constructor(
        @inject('UserProfileRepository')
        private userProfileRepository: IUserProfileRepository,
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) {}

    async execute({ user_id, description }: IRequest): Promise<UserProfile> {
        const userExists = await this.userRepository.findById(user_id);

        if (!userExists) {
            throw new UserNotFoundError();
        }

        const userProfileExists = await this.userProfileRepository.findById(
            user_id
        );

        if (userProfileExists) {
            throw new UserProfileAlreadyExistsError();
        }

        const userProfile = this.userProfileRepository.create({
            user_id,
            description,
        });

        return userProfile;
    }
}
