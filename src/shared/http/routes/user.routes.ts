import { Router } from 'express';
import CreateUserController from '../../../modules/users/user/controllers/CreateUserController';
import EditUserController from '../../../modules/users/user/controllers/EditUserController';
import GetUserController from '../../../modules/users/user/controllers/GetUserController';
import DeleteUserController from '../../../modules/users/user/controllers/DeleteUserController';
import userProfileRouter from './userProfile.routes';

const userRouter = Router();

const createUserController = new CreateUserController();
const editUserController = new EditUserController();
const getUserController = new GetUserController();
const deleteUserController = new DeleteUserController();

userRouter.post('/', createUserController.handle);
userRouter.put('/:user_id', editUserController.handle);
userRouter.get('/:user_id', getUserController.handle);
userRouter.delete('/:user_id', deleteUserController.handle);

userRouter.use('/', userProfileRouter); // Profile

export default userRouter;
