/**
 * 使结果不超过阈值的最小除数
 * 难度：★★★☆☆
 * 选一个正整数除数，把每个数向上取整除后求和。求使和不超过 threshold 的最小除数。
 *
 * 示例：nums = [1,2,5,9], threshold = 6 => 5
 *
 * 思路：除数越大，和越小。二分除数，检查向上取整和是否不超过阈值。
 * 时间 O(n log M)，空间 O(1)
 */

function ceilDiv(a: number, b: number): number {
  return Math.floor((a + b - 1) / b);
}

export function smallestDivisor(nums: number[], threshold: number): number {
  let lo = 1;
  let hi = Math.max(...nums);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    let sum = 0;
    for (const value of nums) {
      sum += ceilDiv(value, mid);
    }
    if (sum <= threshold) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

console.log(smallestDivisor([1, 2, 5, 9], 6));
