export default class InvalidEnvVariablesError extends Error {
    constructor() {
        super('Invalid environment variables');
    }
}
