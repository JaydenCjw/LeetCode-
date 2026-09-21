/**
 * 乘积最大子数组
 * 难度：★★★☆☆
 * 找出数组中乘积最大的非空连续子数组，返回其乘积。
 *
 * 示例：[2,3,-2,4] => 6
 *
 * 思路：同时维护以当前位置结尾的最大、最小乘积（负数会翻转）。
 * 时间 O(n)，空间 O(1)
 */

export function maxProduct(nums: number[]): number {
  let best = nums[0];
  let maxEnding = nums[0];
  let minEnding = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];
    const candidates = [value, maxEnding * value, minEnding * value];
    maxEnding = Math.max(...candidates);
    minEnding = Math.min(...candidates);
    best = Math.max(best, maxEnding);
  }

  return best;
}

console.log(maxProduct([2, 3, -2, 4]));
