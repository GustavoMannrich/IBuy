import chalk from "chalk";

class Logger {
  static log(message: string | undefined) {
    const date = new Date().toLocaleString();
    console.log(`${date} ${message}`);
  }

  static request(message: string | undefined) {
    Logger.log(chalk.green(`[REQUEST] ${message}`));
  }

  static info(message: string | undefined) {
    Logger.log(chalk.blue(`[INFO] ${message}`));
  }

  static warning(message: string | undefined) {
    Logger.log(chalk.yellow(`[WARNING] ${message}`));
  }

  static error(message: string | undefined) {
    Logger.log(chalk.red(`[ERROR] ${message}`));
  }

  static debug(message: string | undefined) {
    if (process.env.NODE_ENV === "development") {
      Logger.log(chalk.magentaBright(`[DEBUG] ${message}`));
    }
  }
}

export default Logger;
