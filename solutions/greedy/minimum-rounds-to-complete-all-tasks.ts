/**
 * 完成所有任务需要的最少轮数
 * 难度：★★☆☆☆
 * 每一轮可以完成 2 个或 3 个相同难度的任务。无法完成返回 -1。
 *
 * 示例：[2,2,3,3,2,4,4,4,4,4] => 4
 *
 * 思路：按难度计数。出现 1 次则不可能；否则轮数是 ceil(count / 3)。
 * 时间 O(n)，空间 O(n)
 */

export function minimumRounds(tasks: number[]): number {
  const freq = new Map<number, number>();
  for (const task of tasks) {
    freq.set(task, (freq.get(task) ?? 0) + 1);
  }
  let answer = 0;
  for (const count of freq.values()) {
    if (count === 1) {
      return -1;
    }
    answer += Math.ceil(count / 3);
  }
  return answer;
}

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
