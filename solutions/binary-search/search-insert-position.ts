/**
 * 搜索插入位置
 * 难度：★☆☆☆☆
 * 给定升序数组与目标值，若存在返回下标；否则返回按序插入的位置。
 *
 * 示例：nums = [1,3,5,6], target = 5 => 2；target = 2 => 1
 *
 * 思路：二分找第一个 >= target 的位置。
 * 时间 O(log n)，空间 O(1)
 */

export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
