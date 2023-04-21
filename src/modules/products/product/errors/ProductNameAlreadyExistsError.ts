import { AppError } from '../../../../shared/http/errors/AppError';

export default class ProductNameAlreadyExistsError extends AppError {
    constructor() {
        super('Product name already exists!');
    }
}
