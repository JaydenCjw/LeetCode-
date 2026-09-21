/**
 * 2 的幂
 * 难度：★☆☆☆☆
 * 判断整数是否为 2 的幂。
 *
 * 思路：正数且 n & (n-1) === 0。
 * 时间 O(1)，空间 O(1)
 */

export function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(16));
