/**
 * 最短无序连续子数组
 * 难度：★★☆☆☆
 * 找出最短的连续子数组，只排序这段就能使整个数组升序。已有序则返回 0。
 *
 * 示例：nums = [2,6,4,8,10,9,15] => 5
 *
 * 思路：从左找比历史最大值更小的最右位置，从右找比历史最小值更大的最左位置。
 * 时间 O(n)，空间 O(1)
 */

export function findUnsortedSubarray(nums: number[]): number {
  let maxSeen = Number.NEGATIVE_INFINITY;
  let minSeen = Number.POSITIVE_INFINITY;
  let right = -1;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < maxSeen) {
      right = i;
    } else {
      maxSeen = nums[i];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > minSeen) {
      left = i;
    } else {
      minSeen = nums[i];
    }
  }
  return right === -1 ? 0 : right - left + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
