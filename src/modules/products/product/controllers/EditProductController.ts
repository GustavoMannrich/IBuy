import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import EditProductService from '../services/EditProductService';
import { container } from 'tsyringe';

const editProductSchema = z.object({
    name: z.string().min(2).max(200).optional(),
    description: z.string().max(1000).optional(),
    price: z.coerce.number().min(0).max(999999999999).optional(),
});

const editProductParamsSchema = z.object({
    product_id: z.coerce.number().min(1),
});

export default class EditProductController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { product_id } = editProductParamsSchema.parse(request.params);
        const { name, description, price } = editProductSchema.parse(
            request.body
        );

        const editProductService = container.resolve(EditProductService);

        const product = await editProductService.execute({
            id: product_id,
            name,
            description,
            price,
        });

        return response.status(200).json(product);
    }
}
