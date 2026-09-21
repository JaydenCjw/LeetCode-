/**
 * 和为 K 的子数组
 * 难度：★★★☆☆
 * 返回数组中和为 k 的连续子数组个数。
 *
 * 示例：nums = [1,1,1], k = 2 => 2
 *
 * 思路：前缀和 + 哈希，查 prefix - k 出现次数。
 * 时间 O(n)，空间 O(n)
 */

export function subarraySum(nums: number[], k: number): number {
  const prefixCount = new Map<number, number>([[0, 1]]);
  let prefix = 0;
  let count = 0;

  for (const num of nums) {
    prefix += num;
    count += prefixCount.get(prefix - k) ?? 0;
    prefixCount.set(prefix, (prefixCount.get(prefix) ?? 0) + 1);
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
