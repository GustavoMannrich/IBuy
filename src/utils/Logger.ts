import chalk from 'chalk';
import { env } from '../env';

class Logger {
    static log(message?: any, ...optionalParams: any[]) {
        const date = new Date().toLocaleString();
        console.log(`${date} ${message}`, ...optionalParams);
    }

    static request(message?: any, ...optionalParams: any[]) {
        Logger.log(chalk.green(`[REQUEST] ${message}`), ...optionalParams);
    }

    static info(message?: any, ...optionalParams: any[]) {
        Logger.log(chalk.cyanBright(`[INFO] ${message}`), ...optionalParams);
    }

    static warning(message?: any, ...optionalParams: any[]) {
        Logger.log(chalk.yellow(`[WARNING] ${message}`), ...optionalParams);
    }

    static error(message?: any, ...optionalParams: any[]) {
        Logger.log(chalk.red(`[ERROR] ${message}`), ...optionalParams);
    }

    static debug(message?: any, ...optionalParams: any[]) {
        if (env.NODE_ENV === 'prod') return;

        Logger.log(
            chalk.magentaBright(`[DEBUG] ${message}`),
            ...optionalParams
        );
    }
}

export default Logger;
