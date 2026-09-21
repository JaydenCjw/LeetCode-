/**
 * Pow(x, n)
 * 难度：★★☆☆☆
 * 实现 pow(x, n)，即计算 x 的 n 次幂。
 *
 * 示例：x = 2.00000, n = 10 => 1024.00000
 *
 * 思路：快速幂（二分指数）。
 * 时间 O(log n)，空间 O(1)
 */

export function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  let base = x;
  let exp = n;
  if (exp < 0) {
    base = 1 / base;
    exp = -exp;
  }

  let result = 1;
  while (exp > 0) {
    if (exp % 2 === 1) {
      result *= base;
    }
    base *= base;
    exp = Math.floor(exp / 2);
  }

  return result;
}

console.log(myPow(2.0, 10));
console.log(myPow(2.0, -2));
