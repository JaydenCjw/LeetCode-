/**
 * 153. 寻找旋转排序数组中的最小值
 * 已知升序数组可能被旋转，找出其中最小元素。要求 O(log n)。
 *
 * 示例：nums = [3,4,5,1,2] => 1
 *
 * 思路：二分，比较 mid 与 right，缩小无序侧。
 * 时间 O(log n)，空间 O(1)
 */

export function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2]));
