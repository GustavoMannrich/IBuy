import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import DeleteProductService from '../services/DeleteProductService';

const deleteProductParamsSchema = z.object({
    product_id: z.coerce.number().min(1),
});

export default class DeleteProductController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { product_id } = deleteProductParamsSchema.parse(request.params);

        const deleteProductService = container.resolve(DeleteProductService);

        await deleteProductService.execute(product_id);

        return response.status(204).send();
    }
}
