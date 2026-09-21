/**
 * 最小差值 I
 * 难度：★☆☆☆☆
 * 每个元素可以加上 [-k, k] 中的一个整数，求调整后最大值与最小值之差的最小可能。
 *
 * 示例：nums = [1], k = 0 => 0；nums = [0,10], k = 2 => 6
 *
 * 思路：只有整体极差能被压缩，答案是 max(0, max - min - 2k)。
 * 时间 O(n)，空间 O(1)
 */

export function smallestRangeI(nums: number[], k: number): number {
  let min = nums[0];
  let max = nums[0];
  for (const value of nums) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  return Math.max(0, max - min - 2 * k);
}

console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 2));
