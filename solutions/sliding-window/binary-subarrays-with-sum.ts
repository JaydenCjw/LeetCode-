/**
 * 和为 k 的二元子数组
 * 难度：★★★☆☆
 * 数组只含 0 和 1，统计和正好为 goal 的连续子数组个数。
 *
 * 示例：nums = [1,0,1,0,1], goal = 2 => 4
 *
 * 思路：和不超过 x 的子数组个数之差，得到和正好为 goal 的个数。
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
    sum += nums[right];
    while (sum > goal) {
      sum -= nums[left];
      left++;
    }
    count += right - left + 1;
  }
  return count;
}

export function numSubarraysWithSum(nums: number[], goal: number): number {
  return atMost(nums, goal) - atMost(nums, goal - 1);
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
