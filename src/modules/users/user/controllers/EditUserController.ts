import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import EditUserService from '../services/EditUserService';

const editUserSchema = z.object({
    name: z.string().min(2).max(200).optional(),
});

const editUserParamsSchema = z.object({
    user_id: z.coerce.number().min(1),
});

export default class EditUserController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = editUserParamsSchema.parse(request.params);
        const { name } = editUserSchema.parse(request.body);

        const editUserService = container.resolve(EditUserService);

        const user = await editUserService.execute({
            id: user_id,
            name,
        });

        return response.status(200).json(user);
    }
}
