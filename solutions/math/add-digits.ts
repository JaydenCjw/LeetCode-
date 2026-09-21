/**
 * 各位相加
 * 难度：★☆☆☆☆
 * 反复把整数的各位相加，直到得到一位数。
 *
 * 示例：num=38 => 2（3+8=11，1+1=2）
 *
 * 思路：数字根。非 0 时结果为 1 + (n - 1) % 9。
 * 时间 O(1)，空间 O(1)
 */

export function addDigits(num: number): number {
  if (num === 0) {
    return 0;
  }
  return 1 + ((num - 1) % 9);
}

console.log(addDigits(38));
