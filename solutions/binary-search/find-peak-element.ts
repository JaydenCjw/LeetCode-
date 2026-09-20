/**
 * 寻找峰值
 * 峰值元素严格大于左右邻居。返回任一峰值下标。要求 O(log n)。
 *
 * 示例：nums = [1,2,3,1] => 2
 *
 * 思路：二分，向更大邻居一侧走必有峰。
 * 时间 O(log n)，空间 O(1)
 */

export function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
