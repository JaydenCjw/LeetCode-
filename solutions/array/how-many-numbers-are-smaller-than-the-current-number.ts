/**
 * 有多少小于当前数字的数字
 * 难度：★☆☆☆☆
 * 对每个 nums[i]，统计数组中严格小于它的元素个数。
 *
 * 示例：nums = [8,1,2,2,3] => [4,0,1,1,3]
 *
 * 思路：排序后记录每个值第一次出现的下标，即更小元素的个数。
 * 时间 O(n log n)，空间 O(n)
 */

export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sorted = [...nums].sort((left, right) => left - right);
  const firstIndex = new Map<number, number>();
  for (let i = 0; i < sorted.length; i++) {
    if (!firstIndex.has(sorted[i])) {
      firstIndex.set(sorted[i], i);
    }
  }
  return nums.map((num) => firstIndex.get(num) ?? 0);
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
