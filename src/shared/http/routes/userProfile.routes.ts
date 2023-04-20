import { Router } from 'express';
import CreateUserProfileController from '../../../modules/users/userProfile/controllers/CreateUserProfileController';
import EditUserProfileController from '../../../modules/users/userProfile/controllers/EditUserProfileController';
import GetUserProfileController from '../../../modules/users/userProfile/controllers/GetUserProfileController';
import DeleteUserProfileController from '../../../modules/users/userProfile/controllers/DeleteUserProfileController';

const userProfileRouter = Router();

const createUserProfileController = new CreateUserProfileController();
const editUserProfileController = new EditUserProfileController();
const getUserProfileController = new GetUserProfileController();
const deleteUserProfileController = new DeleteUserProfileController();

userProfileRouter.post('/:user_id/profile', createUserProfileController.handle);
userProfileRouter.put('/:user_id/profile', editUserProfileController.handle);
userProfileRouter.get('/:user_id/profile', getUserProfileController.handle);
userProfileRouter.delete(
    '/:user_id/profile',
    deleteUserProfileController.handle
);

export default userProfileRouter;
