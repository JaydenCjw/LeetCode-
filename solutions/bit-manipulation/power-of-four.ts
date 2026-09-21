/**
 * 4 的幂
 * 难度：★☆☆☆☆
 * 判断整数是否为 4 的幂。
 *
 * 示例：16 => true；5 => false
 *
 * 思路：是 2 的幂，且落在奇数位上（与 0x55555555 相交）。
 * 时间 O(1)，空间 O(1)
 */

export function isPowerOfFour(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
}

console.log(isPowerOfFour(16), isPowerOfFour(5));
