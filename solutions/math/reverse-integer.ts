/**
 * 整数反转
 * 难度：★★☆☆☆
 * 反转 32 位有符号整数的数字，溢出则返回 0。
 *
 * 示例：123 => 321；-123 => -321
 *
 * 思路：逐位弹出并检查是否超出 32 位范围。
 * 时间 O(log n)，空间 O(1)
 */

export function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  let value = Math.abs(x);
  let result = 0;
  while (value > 0) {
    result = result * 10 + (value % 10);
    value = Math.floor(value / 10);
  }
  result *= sign;
  if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
    return 0;
  }
  return result;
}

console.log(reverse(123));
