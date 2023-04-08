import chalk from "chalk";

class Logger {
  private static log(message: String) {
    const date = new Date().toLocaleString();
    console.log(`${date} ${message}`);
  }

  static request(message: String) {
    Logger.log(chalk.green(`[REQUEST] ${message}`));
  }

  static info(message: String) {
    Logger.log(chalk.blue(`[INFO] ${message}`));
  }

  static warning(message: String) {
    Logger.log(chalk.yellow(`[WARNING] ${message}`));
  }

  static error(message: String) {
    console.log(chalk.red(`[ERROR] ${message}`));
  }
}

export default Logger;
