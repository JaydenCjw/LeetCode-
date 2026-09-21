/**
 * 统计各位数字都不同的数字个数
 * 难度：★★☆☆☆
 * 统计 [0, 10^n) 内各位数字互不相同的整数个数（含 0）。
 *
 * 示例：n = 2 => 91
 *
 * 思路：一位有 10 个。更长的数字首位 9 种选择，之后每位可选数字递减。
 * 时间 O(n)，空间 O(1)
 */

export function countNumbersWithUniqueDigits(n: number): number {
  if (n === 0) {
    return 1;
  }
  let answer = 10;
  let unique = 9;
  let available = 9;
  for (let length = 2; length <= n; length++) {
    unique *= available;
    available--;
    answer += unique;
  }
  return answer;
}

console.log(countNumbersWithUniqueDigits(2));
