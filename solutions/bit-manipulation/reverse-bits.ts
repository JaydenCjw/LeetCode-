/**
 * 颠倒二进制位
 * 难度：★☆☆☆☆
 * 颠倒 32 位无符号整数的二进制位。
 *
 * 思路：逐位取出放到对面位置。
 * 时间 O(1)，空间 O(1)
 */

export function reverseBits(n: number): number {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n >>>= 1;
  }
  return result >>> 0;
}

console.log(reverseBits(43261596));
