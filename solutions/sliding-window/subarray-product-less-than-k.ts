/**
 * 乘积小于 K 的子数组
 * 返回元素都为正数的数组中，乘积小于 k 的连续子数组个数。
 *
 * 示例：nums = [10,5,2,6], k = 100 => 8
 *
 * 思路：滑动窗口维护乘积，窗口内均可作为右端点子数组。
 * 时间 O(n)，空间 O(1)
 */

export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let product = 1;
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    count += right - left + 1;
  }

  return count;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
