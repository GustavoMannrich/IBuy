import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../services/CreateUserService';
import { z } from 'zod';
import { CPF_CNPJ_REGEX } from '../../../../utils/const';
import IDefaultController from '../../../../shared/interfaces/IDefaultController';

const createUserSchema = z.object({
    name: z.string().min(2).max(200),
    cpf_cnpj: z.string().regex(CPF_CNPJ_REGEX),
});

export default class CreateUserController implements IDefaultController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, cpf_cnpj } = createUserSchema.parse(request.body);

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({
            name,
            cpf_cnpj,
        });

        return response.status(201).json(user);
    }
}
