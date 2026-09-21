/**
 * 统计和小于目标的下标对
 * 难度：★☆☆☆☆
 * 统计 i < j 且 nums[i] + nums[j] < target 的下标对数量。
 *
 * 示例：nums = [-1,1,2,3,1], target = 2 => 3
 *
 * 思路：排序后双指针，左端与右端之和合法时，中间所有下标都能与左端配对。
 * 时间 O(n log n)，空间 O(1)
 */

export function countPairs(nums: number[], target: number): number {
  nums.sort((left, right) => left - right);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2));
