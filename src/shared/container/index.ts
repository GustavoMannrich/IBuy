import { container } from "tsyringe";
import IUserRepository from "../../modules/users/user/repositories/IUserRepository";
import UserRepository from "../../modules/users/user/repositories/UserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
