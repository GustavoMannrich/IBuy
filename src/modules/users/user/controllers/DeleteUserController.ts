import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import DeleteUserService from '../services/DeleteUserService';

const deleteUserParamsSchema = z.object({
    user_id: z.coerce.number().min(1),
});

export default class DeleteUserController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = deleteUserParamsSchema.parse(request.params);

        const deleteUserService = container.resolve(DeleteUserService);

        await deleteUserService.execute(user_id);

        return response.status(204).send();
    }
}
