import { Request, Response } from 'express';

export default interface IDefaultController {
    /* async */ handle(request: Request, response: Response): Promise<Response>;
}
