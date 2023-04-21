import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import CreateProductService from '../services/CreateProductService';
import { container } from 'tsyringe';

const createProductSchema = z.object({
    user_id: z.coerce.number().min(1),
    name: z.string().min(2).max(200),
    description: z.string().max(1000),
    price: z.coerce.number().min(0).max(999999999999),
});

export default class CreateProductController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, name, description, price } = createProductSchema.parse(
            request.body
        );

        const createProductService = container.resolve(CreateProductService);

        const product = await createProductService.execute({
            user_id,
            name,
            description,
            price,
        });

        return response.status(201).json(product);
    }
}
