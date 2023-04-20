import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import CreateUserProfileService from '../services/CreateUserProfileService';
import Logger from '../../../../utils/Logger';

const createUserProfileSchema = z.object({
    description: z.string().max(2000),
});

const createUserProfileParamsSchema = z.object({
    user_id: z.coerce.number().min(1),
});

export default class CreateUserProfileController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        Logger.debug(request.params.user_id);

        const { user_id } = createUserProfileParamsSchema.parse(request.params);

        const { description } = createUserProfileSchema.parse(request.body);

        const createUserProfileService = container.resolve(
            CreateUserProfileService
        );

        const userProfile = await createUserProfileService.execute({
            user_id,
            description,
        });

        return response.status(201).json(userProfile);
    }
}
