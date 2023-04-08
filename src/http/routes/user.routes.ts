import { Request, Response, Router } from "express";

const userRouter = Router();

userRouter.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "nice" });
});

export default userRouter;
