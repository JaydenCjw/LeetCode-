/**
 * 单调数列
 * 难度：★☆☆☆☆
 * 若数组整体非递减或非递增（允许相等），则返回 true。
 *
 * 示例：nums = [1,2,2,3] => true
 *
 * 思路：一次扫描同时记录是否仍保持递增、递减。
 * 时间 O(n)，空间 O(1)
 */

export function isMonotonic(nums: number[]): boolean {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
}

console.log(isMonotonic([1, 2, 2, 3]));
