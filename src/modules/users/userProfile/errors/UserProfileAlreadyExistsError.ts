import { AppError } from '../../../../shared/http/errors/AppError';

export default class UserProfileAlreadyExistsError extends AppError {
    constructor() {
        super('User profile already exists!');
    }
}
