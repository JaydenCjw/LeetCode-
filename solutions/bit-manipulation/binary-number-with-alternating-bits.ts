/**
 * 交替位二进制数
 * 难度：★☆☆☆☆
 * 判断二进制是否 0、1 交替。
 *
 * 示例：5（101）=> true；7（111）=> false
 *
 * 思路：n 与 n>>1 异或后应为全 1，即再加 1 后是 2 的幂。
 * 时间 O(1)，空间 O(1)
 */

export function hasAlternatingBits(n: number): boolean {
  const xor = n ^ (n >> 1);
  return (xor & (xor + 1)) === 0;
}

console.log(hasAlternatingBits(5), hasAlternatingBits(7));
