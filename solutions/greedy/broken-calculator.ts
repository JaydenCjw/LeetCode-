/**
 * 坏了的计算器
 * 难度：★★☆☆☆
 * 从 startValue 出发，只能乘 2 或减 1，求变成 target 的最少操作数。
 *
 * 示例：startValue = 2, target = 3 => 2
 *
 * 思路：从 target 倒推。偶数就除以 2，奇数就加 1，直到不超过起点，再补上差值次减 1。
 * 时间 O(log target)，空间 O(1)
 */

export function brokenCalc(startValue: number, target: number): number {
  let ops = 0;
  let current = target;
  while (current > startValue) {
    if (current % 2 === 0) {
      current = Math.floor(current / 2);
    } else {
      current++;
    }
    ops++;
  }
  return ops + (startValue - current);
}

console.log(brokenCalc(2, 3));
