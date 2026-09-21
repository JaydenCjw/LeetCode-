/**
 * 缺失数字
 * 难度：★☆☆☆☆
 * 数组包含 [0, n] 中 n 个不同数字，找出缺失的那个。
 *
 * 示例：[3,0,1] => 2
 *
 * 思路：高斯求和减去数组元素和。
 * 时间 O(n)，空间 O(1)
 */

export function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expected = (n * (n + 1)) / 2;
  const actual = nums.reduce((sum, value) => sum + value, 0);
  return expected - actual;
}

console.log(missingNumber([3, 0, 1]));
