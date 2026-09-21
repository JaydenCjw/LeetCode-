/**
 * 转化时间需要的最少操作数
 * 难度：★☆☆☆☆
 * 当前时间 current 变成 correct，每次可以加 1、5、15 或 60 分钟。求最少操作数。
 *
 * 示例：current = "02:30", correct = "04:35" => 3
 *
 * 思路：先算分钟差，再按 60、15、5、1 从大到小贪心取。
 * 时间 O(1)，空间 O(1)
 */

function toMinutes(time: string): number {
  const parts = time.split(":");
  return Number(parts[0]) * 60 + Number(parts[1]);
}

export function convertTime(current: string, correct: string): number {
  let diff = toMinutes(correct) - toMinutes(current);
  let ops = 0;
  for (const step of [60, 15, 5, 1]) {
    ops += Math.floor(diff / step);
    diff %= step;
  }
  return ops;
}

console.log(convertTime("02:30", "04:35"));
