import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import EditUserProfileService from '../services/EditUserProfileService';

const editUserProfileSchema = z.object({
    description: z.string().max(2000).optional(),
});

const editUserProfileParamsSchema = z.object({
    user_id: z.coerce.number().min(1),
});

export default class EditUserProfileController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = editUserProfileParamsSchema.parse(request.params);
        const { description } = editUserProfileSchema.parse(request.body);

        const editUserProfileService = container.resolve(
            EditUserProfileService
        );

        const userProfile = await editUserProfileService.execute({
            user_id,
            description,
        });

        return response.status(200).json(userProfile);
    }
}
