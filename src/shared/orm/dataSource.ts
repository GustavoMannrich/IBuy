import { DataSource } from "typeorm";
import { env } from "../../env";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "docker",
  password: "admin",
  database: "ibuy",
  synchronize: true,
  logging: env.NODE_ENV !== "prod",
  entities: [],
  subscribers: [],
  migrations: [],
});
