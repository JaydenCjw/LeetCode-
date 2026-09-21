/**
 * 两数之和小于 K
 * 难度：★★☆☆☆
 * 返回数组中和小于 k 的两个数的最大和；不存在则返回 -1。
 *
 * 示例：nums = [34,23,1,24,75,33,54,8], k = 60 => 58
 *
 * 思路：排序后双指针，和小于 k 时尝试更大的左端，否则缩小右端。
 * 时间 O(n log n)，空间 O(1)
 */

export function twoSumLessThanK(nums: number[], k: number): number {
  nums.sort((left, right) => left - right);
  let left = 0;
  let right = nums.length - 1;
  let best = -1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < k) {
      best = Math.max(best, sum);
      left++;
    } else {
      right--;
    }
  }
  return best;
}

console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));
