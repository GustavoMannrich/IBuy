import { AppError } from '../../../../shared/http/errors/AppError';

export default class UserAlreadyExistsError extends AppError {
    constructor() {
        super('User already exists!');
    }
}
