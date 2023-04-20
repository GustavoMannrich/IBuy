import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import DeleteUserProfileService from '../services/DeleteUserProfileService';

const deleteUserProfileParamsSchema = z.object({
    user_id: z.coerce.number().min(1),
});

export default class DeleteUserProfileController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = deleteUserProfileParamsSchema.parse(request.params);

        const deleteUserProfileService = container.resolve(
            DeleteUserProfileService
        );

        await deleteUserProfileService.execute(user_id);

        return response.status(204).send();
    }
}
