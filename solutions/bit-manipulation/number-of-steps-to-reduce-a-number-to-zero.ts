/**
 * 将数字变成 0 的操作次数
 * 难度：★☆☆☆☆
 * 偶数除以 2，奇数减 1，返回变成 0 的步数。
 *
 * 示例：14 => 6
 *
 * 思路：偶数右移，奇数减一，也可以数位：每位 1 需要一次减法，每位需要一次右移（最高位除外已含在减法后）。
 * 时间 O(log n)，空间 O(1)
 */

export function numberOfSteps(num: number): number {
  let steps = 0;
  while (num > 0) {
    if ((num & 1) === 0) {
      num >>= 1;
    } else {
      num--;
    }
    steps++;
  }
  return steps;
}

console.log(numberOfSteps(14));
