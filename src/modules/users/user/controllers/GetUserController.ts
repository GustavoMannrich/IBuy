import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import GetUserService from '../services/GetUserService';

const getUserParamsSchema = z.object({
    user_id: z.coerce.number().min(1),
});

export default class GetUserController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = getUserParamsSchema.parse(request.params);

        const getUserService = container.resolve(GetUserService);

        const user = await getUserService.execute(user_id);

        return response.status(200).json(user);
    }
}
