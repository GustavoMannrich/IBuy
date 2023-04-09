import { inject, injectable } from "tsyringe";
import User from "../entities/User";
import IUserRepository from "../repositories/IUserRepository";

interface IRequest {
  name: string;
}

@injectable()
export default class SaveUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name }: IRequest): Promise<User> {
    const user = this.userRepository.create(name);

    return user;
  }
}
