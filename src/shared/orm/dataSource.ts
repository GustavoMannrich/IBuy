import { DataSource } from 'typeorm';
import User from '../../modules/users/user/entities/User';
import UserProfile from '../../modules/users/userProfile/entities/UserProfile';
import { env } from '../../env';
import Product from '../../modules/products/product/entities/Product';

export const appDataSource = new DataSource({
    type: 'mysql',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: true,
    logging: false, //env.NODE_ENV !== "prod",
    entities: [User, UserProfile, Product],
    subscribers: [],
    migrations: ['./src/shared/orm/migrations/*.ts'],
});
