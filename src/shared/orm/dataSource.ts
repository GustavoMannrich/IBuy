import { DataSource } from "typeorm";
import User from "../../modules/users/user/entities/User";

export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "docker",
  password: "admin",
  database: "ibuy",
  synchronize: true,
  logging: false, //env.NODE_ENV !== "prod",
  entities: [User],
  subscribers: [],
  migrations: ["./src/shared/orm/migrations/*.ts"],
});
