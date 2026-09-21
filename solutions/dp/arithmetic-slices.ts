/**
 * 等差数列划分
 * 难度：★★☆☆☆
 * 统计数组中等差（至少 3 个数）的连续子数组个数。
 *
 * 示例：[1,2,3,4] => 3
 *
 * 思路：以 i 结尾的新增等差段数等于前一段加 1。
 * 时间 O(n)，空间 O(1)
 */

export function numberOfArithmeticSlices(nums: number[]): number {
  let current = 0;
  let total = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      current++;
      total += current;
    } else {
      current = 0;
    }
  }
  return total;
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
