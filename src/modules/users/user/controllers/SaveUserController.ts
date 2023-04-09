import { Request, Response } from "express";
import { container } from "tsyringe";
import SaveUserService from "../services/SaveUserService";
import { z } from "zod";

export default class SaveUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const saveUserSchema = z.object({
      name: z.string().max(200),
    });

    const { name } = saveUserSchema.parse(request.body);

    const saveUserService = container.resolve(SaveUserService);

    const user = await saveUserService.execute({
      name,
    });

    return response.status(201).json(user);
  }
}
