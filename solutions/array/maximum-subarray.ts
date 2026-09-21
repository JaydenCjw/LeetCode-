/**
 * 最大子数组和
 * 给你一个整数数组 nums，找出具有最大和的连续子数组，并返回其最大和。
 *
 * 示例：nums = [-2,1,-3,4,-1,2,1,-5,4] => 6（子数组 [4,-1,2,1]）
 *
 * 思路：Kadane 算法，维护以当前下标结尾的最大子段和。
 * 时间 O(n)，空间 O(1)
 */

export function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
