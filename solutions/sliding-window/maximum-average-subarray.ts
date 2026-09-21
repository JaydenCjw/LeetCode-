/**
 * 子数组最大平均数 I
 * 难度：★☆☆☆☆
 * 找出长度为 k 的连续子数组，返回其最大平均数。
 *
 * 示例：nums = [1,12,-5,-6,50,3], k = 4 => 12.75
 *
 * 思路：固定窗口滑动求和。
 * 时间 O(n)，空间 O(1)
 */

export function findMaxAverage(nums: number[], k: number): number {
  let window = 0;
  for (let i = 0; i < k; i++) {
    window += nums[i];
  }
  let best = window;
  for (let i = k; i < nums.length; i++) {
    window += nums[i] - nums[i - k];
    best = Math.max(best, window);
  }
  return best / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
