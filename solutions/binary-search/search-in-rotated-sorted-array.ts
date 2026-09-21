/**
 * 搜索旋转排序数组
 * 数组原本升序，可能在未知点旋转。在 O(log n) 内搜索 target。
 *
 * 示例：nums = [4,5,6,7,0,1,2], target = 0 => 4
 *
 * 思路：二分时判断哪一半有序，再决定搜索区间。
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

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
