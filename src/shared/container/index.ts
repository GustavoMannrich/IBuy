import { container } from 'tsyringe';
import IUserRepository from '../../modules/users/user/repositories/IUserRepository';
import UserRepository from '../../modules/users/user/repositories/UserRepository';
import UserProfileRepository from '../../modules/users/userProfile/repositories/UserProfileRepository';
import IUserProfileRepository from '../../modules/users/userProfile/repositories/IUserProfileRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IUserProfileRepository>(
    'UserProfileRepository',
    UserProfileRepository
);
