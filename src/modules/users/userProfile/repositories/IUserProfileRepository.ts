import ICreateUserProfileDTO from '../dtos/ICreateUserProfileDTO';
import IEditUserProfileDTO from '../dtos/IEditUserProfileDTO';
import UserProfile from '../entities/UserProfile';

export default interface IUserProfileRepository {
    create({
        user_id,
        description,
    }: ICreateUserProfileDTO): Promise<UserProfile>;
    edit(userProfile: IEditUserProfileDTO): Promise<UserProfile>;
    findById(user_id: number): Promise<UserProfile>;
    delete(userProfile: UserProfile): Promise<void>;
}
