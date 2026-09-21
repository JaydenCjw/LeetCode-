/**
 * 存在重复元素 II
 * 难度：★★☆☆☆
 * 判断是否存在 i、j，使 nums[i] == nums[j] 且 |i-j| <= k。
 *
 * 示例：nums = [1,2,3,1], k = 3 => true
 *
 * 思路：哈希表记录最近下标。
 * 时间 O(n)，空间 O(min(n, k))
 */

export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const lastIndex = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const previous = lastIndex.get(nums[i]);
    if (previous !== undefined && i - previous <= k) {
      return true;
    }
    lastIndex.set(nums[i], i);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
