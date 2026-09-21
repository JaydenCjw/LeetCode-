/**
 * 3 的幂
 * 难度：★☆☆☆☆
 * 判断整数是否为 3 的幂。
 *
 * 示例：27 => true；0 => false
 *
 * 思路：3^19 是 32 位整数内最大的 3 的幂，能被 n 整除则 n 是 3 的幂。
 * 时间 O(1)，空间 O(1)
 */

export function isPowerOfThree(n: number): boolean {
  return n > 0 && 1162261467 % n === 0;
}

console.log(isPowerOfThree(27), isPowerOfThree(0));
