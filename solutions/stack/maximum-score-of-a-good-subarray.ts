/**
 * 好子数组的最大分数
 * 难度：★★★★☆
 * 好子数组必须包含下标 k。分数是子数组最小值乘以长度。返回最大分数。
 *
 * 示例：[1,4,3,7,4,5]，k = 3 => 15
 *
 * 思路：从 k 向两边扩展，每次吃进更大的邻居，并维护当前最小值。
 * 时间 O(n)，空间 O(1)
 */

export function maximumScore(nums: number[], k: number): number {
  let left = k;
  let right = k;
  let minValue = nums[k];
  let best = minValue;
  while (left > 0 || right < nums.length - 1) {
    if (left === 0) {
      right += 1;
    } else if (right === nums.length - 1) {
      left -= 1;
    } else if (nums[left - 1] > nums[right + 1]) {
      left -= 1;
    } else {
      right += 1;
    }
    minValue = Math.min(minValue, nums[left], nums[right]);
    best = Math.max(best, minValue * (right - left + 1));
  }
  return best;
}

console.log(maximumScore([1, 4, 3, 7, 4, 5], 3));
