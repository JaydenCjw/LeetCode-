/**
 * 统计优美子数组
 * 难度：★★★☆☆
 * 优美子数组含有恰好 k 个奇数。返回这样的连续子数组个数。
 *
 * 示例：nums = [1,1,2,1,1], k = 3 => 2
 *
 * 思路：把奇数看成 1、偶数看成 0，转化为和恰好为 k 的子数组计数。
 * 时间 O(n)，空间 O(1)
 */

function atMost(nums: number[], goal: number): number {
  if (goal < 0) {
    return 0;
  }
  let left = 0;
  let sum = 0;
  let count = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right] % 2;
    while (sum > goal) {
      sum -= nums[left] % 2;
      left++;
    }
    count += right - left + 1;
  }
  return count;
}

export function numberOfSubarrays(nums: number[], k: number): number {
  return atMost(nums, k) - atMost(nums, k - 1);
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
