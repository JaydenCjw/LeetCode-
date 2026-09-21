/**
 * 函数的独占时间
 * 难度：★★★☆☆
 * 日志格式为 "id:start/end:timestamp"。同一时刻只有一个函数在执行，结束时间包含该时刻。返回每个函数的独占时间。
 *
 * 示例：n = 2，logs = ["0:start:0","1:start:2","1:end:5","0:end:6"] => [3,4]
 *
 * 思路：栈保存正在执行的函数。遇到 start 先给栈顶结算到当前时刻之前；遇到 end 结算到当前时刻（含）。
 * 时间 O(日志条数)，空间 O(n)
 */

export function exclusiveTime(n: number, logs: string[]): number[] {
  const result = new Array<number>(n).fill(0);
  const stack: number[] = [];
  let previous = 0;
  for (const log of logs) {
    const [idText, kind, timeText] = log.split(":");
    const id = Number(idText);
    const time = Number(timeText);
    if (kind === "start") {
      if (stack.length > 0) {
        result[stack[stack.length - 1]] += time - previous;
      }
      stack.push(id);
      previous = time;
    } else {
      result[stack.pop() ?? id] += time - previous + 1;
      previous = time + 1;
    }
  }
  return result;
}

console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));
