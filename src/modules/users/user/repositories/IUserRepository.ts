import User from "../entities/User";

export default interface IUserRepository {
  create(name: string): Promise<User>;
}
