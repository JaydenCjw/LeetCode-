/**
 * 日志速率限制器
 * 难度：★★☆☆☆
 * Logger：同一条消息至少间隔 10 秒才能再次打印。shouldPrintMessage 在允许打印时返回 true 并记下时间。
 *
 * 示例：1 foo true，2 bar true，3 foo false，8 bar false，10 foo false，11 foo true
 *
 * 思路：哈希表记录每条消息上次打印时间。
 * 时间 O(1)，空间 O(不同消息数)
 */

export class Logger {
  private readonly last = new Map<string, number>();

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const prev = this.last.get(message);
    if (prev !== undefined && timestamp - prev < 10) {
      return false;
    }
    this.last.set(message, timestamp);
    return true;
  }
}

const logger = new Logger();
console.log([
  logger.shouldPrintMessage(1, "foo"),
  logger.shouldPrintMessage(2, "bar"),
  logger.shouldPrintMessage(3, "foo"),
  logger.shouldPrintMessage(8, "bar"),
  logger.shouldPrintMessage(10, "foo"),
  logger.shouldPrintMessage(11, "foo"),
]);
