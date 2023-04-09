import { Request, Response, Router } from "express";
import SaveUserController from "../../../modules/users/user/controllers/SaveUserController";

const userRouter = Router();

const saveUserController = new SaveUserController();

userRouter.post("/", saveUserController.handle);

export default userRouter;
