import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import GetUserProfileService from '../services/GetUserProfileService';

const getUserProfileParamsSchema = z.object({
    user_id: z.coerce.number().min(1),
});

export default class GetUserProfileController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = getUserProfileParamsSchema.parse(request.params);

        const getUserProfileService = container.resolve(GetUserProfileService);

        const userProfile = await getUserProfileService.execute(user_id);

        return response.status(200).json(userProfile);
    }
}
