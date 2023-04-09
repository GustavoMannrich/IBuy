import { Repository, getRepository } from "typeorm";
import User from "../entities/User";
import IUserRepository from "./IUserRepository";
import { appDataSource } from "../../../../shared/orm/dataSource";

export default class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async create(name: string): Promise<User> {
    const user = this.repository.create({
      name,
    });

    await this.repository.save(user);

    return user;
  }
}
