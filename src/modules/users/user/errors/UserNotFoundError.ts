import { AppError } from '../../../../shared/http/errors/AppError';

export default class UserNotFoundError extends AppError {
    constructor() {
        super('User not found!');
    }
}
