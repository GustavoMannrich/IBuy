import { AppError } from '../../../../shared/http/errors/AppError';

export default class UserProfileNotFoundError extends AppError {
    constructor() {
        super('User profile not found!');
    }
}
