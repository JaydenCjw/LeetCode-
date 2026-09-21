/**
 * 环形子数组的最大和
 * 难度：★★★☆☆
 * 数组首尾相连，求非空子数组的最大和。
 *
 * 示例：nums = [1,-2,3,-2] => 3
 *
 * 思路：Kadane 求普通最大子数组；环形最大和等于总和减去最小子数组。全为负数时不能选空段，直接返回最大子数组。
 * 时间 O(n)，空间 O(1)
 */

export function maxSubarraySumCircular(nums: number[]): number {
  let total = 0;
  let maxEnding = nums[0];
  let maxSum = nums[0];
  let minEnding = nums[0];
  let minSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
    if (i === 0) {
      continue;
    }
    maxEnding = Math.max(num, maxEnding + num);
    maxSum = Math.max(maxSum, maxEnding);
    minEnding = Math.min(num, minEnding + num);
    minSum = Math.min(minSum, minEnding);
  }
  if (maxSum < 0) {
    return maxSum;
  }
  return Math.max(maxSum, total - minSum);
}

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
