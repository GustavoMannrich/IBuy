import { Repository } from 'typeorm';
import ICreateUserProfileDTO from '../dtos/ICreateUserProfileDTO';
import IEditUserProfileDTO from '../dtos/IEditUserProfileDTO';
import UserProfile from '../entities/UserProfile';
import IUserProfileRepository from './IUserProfileRepository';
import { appDataSource } from '../../../../shared/orm/dataSource';

export default class UserProfileRepository implements IUserProfileRepository {
    private repository: Repository<UserProfile>;

    constructor() {
        this.repository = appDataSource.getRepository(UserProfile);
    }

    async create(userProfileDTO: ICreateUserProfileDTO): Promise<UserProfile> {
        const userProfile = this.repository.create(userProfileDTO);

        await this.repository.save(userProfile);

        return userProfile;
    }

    async edit(userProfileDTO: IEditUserProfileDTO): Promise<UserProfile> {
        const updated_userProfile = await this.repository.save(userProfileDTO);

        return updated_userProfile;
    }
    async findById(user_id: number): Promise<UserProfile> {
        const user = await this.repository.findOneBy({ user_id });

        return user;
    }
    async delete(userProfile: UserProfile): Promise<void> {
        await this.repository.remove(userProfile);
    }
}
