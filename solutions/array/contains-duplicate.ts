/**
 * 存在重复元素
 * 难度：★☆☆☆☆
 * 若数组中任意值至少出现两次，返回 true；否则返回 false。
 *
 * 示例：nums = [1,2,3,1] => true
 *
 * 思路：用 Set 记录已见过的值。
 * 时间 O(n)，空间 O(n)
 */

export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
