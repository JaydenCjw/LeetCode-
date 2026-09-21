/**
 * 任务调度器
 * 难度：★★★☆☆
 * 相同任务之间至少间隔 n 个单位时间，可插入空闲。求完成所有任务的最短时间。
 *
 * 示例：tasks = ["A","A","A","B","B","B"], n = 2 => 8
 *
 * 思路：出现最多的任务决定框架，(max-1)*(n+1)+maxCount。
 * 时间 O(n)，空间 O(1)
 */

export function leastInterval(tasks: string[], n: number): number {
  const count = new Array<number>(26).fill(0);
  for (const task of tasks) {
    count[task.charCodeAt(0) - 65]++;
  }
  const max = Math.max(...count);
  const maxCount = count.filter((value) => value === max).length;
  return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
