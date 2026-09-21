/**
 * 好数对的数目
 * 难度：★☆☆☆☆
 * 好数对指 i < j 且 nums[i] == nums[j]，返回这样的数对个数。
 *
 * 示例：nums = [1,2,3,1,1,3] => 4
 *
 * 思路：遍历时累加该值已经出现的次数。
 * 时间 O(n)，空间 O(n)
 */

export function numIdenticalPairs(nums: number[]): number {
  const count = new Map<number, number>();
  let pairs = 0;
  for (const num of nums) {
    const seen = count.get(num) ?? 0;
    pairs += seen;
    count.set(num, seen + 1);
  }
  return pairs;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
