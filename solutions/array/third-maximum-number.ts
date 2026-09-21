/**
 * 第三大的数
 * 难度：★☆☆☆☆
 * 返回去重后的第三大数字；若不存在第三大，则返回最大数。
 *
 * 示例：nums = [3,2,1] => 1
 *
 * 思路：用集合去重后降序排序，长度不足 3 时取最大。
 * 时间 O(n log n)，空间 O(n)
 */

export function thirdMax(nums: number[]): number {
  const distinct = [...new Set(nums)].sort((left, right) => right - left);
  return distinct.length >= 3 ? distinct[2] : distinct[0];
}

console.log(thirdMax([3, 2, 1]));
