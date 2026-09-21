/**
 * 两数相除
 * 难度：★★★☆☆
 * 不使用乘除和 mod，实现两整数相除（向零截断）。
 *
 * 示例：dividend = 10, divisor = 3 => 3
 *
 * 思路：倍增减法（位运算快速逼近）。
 * 时间 O(log^2 n)，空间 O(1)
 */

export function divide(dividend: number, divisor: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  if (dividend === INT_MIN && divisor === -1) return INT_MAX;

  const negative = dividend > 0 !== divisor > 0;
  let remaining = Math.abs(dividend);
  const div = Math.abs(divisor);
  let result = 0;

  while (remaining >= div) {
    let multiple = 1;
    let value = div;
    while (remaining >= value + value) {
      value += value;
      multiple += multiple;
    }
    remaining -= value;
    result += multiple;
  }

  return negative ? -result : result;
}

console.log(divide(10, 3));
console.log(divide(7, -3));
