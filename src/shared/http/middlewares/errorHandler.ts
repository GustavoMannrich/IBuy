import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError';
import Logger from '../../../utils/Logger';
import { ZodError } from 'zod';
import { ErrorMessageOptions, generateErrorMessage } from 'zod-error';

const zodOptions: ErrorMessageOptions = {
    code: {
        enabled: false,
    },
    path: {
        enabled: true,
        type: 'breadcrumbs',
        label: 'Param: ',
    },
    message: {
        enabled: true,
        label: '',
    },
    delimiter: {
        error: ' | ',
        component: ' - ',
    },
};

export default (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let errorMessage = error.message;
    let res: Response;

    if (error instanceof AppError) {
        // Erros gerados pela API
        res = response.status(error.statusCode).json({
            message: errorMessage,
        });
    } else if (error instanceof ZodError) {
        // Erros de validação do Zod
        errorMessage = generateErrorMessage(error.issues, zodOptions);

        res = response.status(400).json({
            message: errorMessage,
        });
    } else {
        // Erros inesperados
        res = response.status(500).json({
            status: 'error',
            message: `Internal server error - ${errorMessage}`,
        });
    }

    Logger.error(errorMessage);
    return res;
};
