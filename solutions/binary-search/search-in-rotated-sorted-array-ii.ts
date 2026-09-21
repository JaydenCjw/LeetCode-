/**
 * 搜索旋转排序数组 II
 * 难度：★★☆☆☆
 * 升序数组在某处旋转，可能有重复元素，判断 target 是否存在。
 *
 * 思路：二分；左右与中点相等时收缩边界。
 * 时间 O(n) 最坏，空间 O(1)
 */

export function search(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target && target <= nums[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
