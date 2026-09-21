/**
 * 二分查找
 * 在升序数组 nums 中查找 target，存在返回下标，否则返回 -1。
 *
 * 示例：nums = [-1,0,3,5,9,12], target = 9 => 4
 *
 * 思路：标准二分。
 * 时间 O(log n)，空间 O(1)
 */

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
