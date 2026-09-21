/**
 * 阶乘后的零
 * 难度：★★☆☆☆
 * 返回 n! 末尾连续零的个数。
 *
 * 思路：零来自因子 10，即 2*5，由 5 的个数决定。
 * 时间 O(log n)，空间 O(1)
 */

export function trailingZeroes(n: number): number {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

console.log(trailingZeroes(25));
