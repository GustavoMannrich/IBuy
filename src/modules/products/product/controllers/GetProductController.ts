import { Request, Response } from 'express';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';
import { z } from 'zod';
import { container } from 'tsyringe';
import GetProductService from '../services/GetProductService';

const getProductParamsSchema = z.object({
    product_id: z.coerce.number().min(1),
});

export default class GetProductController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { product_id } = getProductParamsSchema.parse(request.params);

        const getProductService = container.resolve(GetProductService);

        const product = await getProductService.execute(product_id);

        return response.status(200).json(product);
    }
}
