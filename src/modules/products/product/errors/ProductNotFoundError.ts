import { AppError } from '../../../../shared/http/errors/AppError';

export default class ProductNotFoundError extends AppError {
    constructor() {
        super('Product not found!');
    }
}
