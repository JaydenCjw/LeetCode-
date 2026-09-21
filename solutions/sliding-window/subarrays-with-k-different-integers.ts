/**
 * K 个不同整数的子数组
 * 难度：★★★★☆
 * 统计恰好包含 k 个不同整数的连续子数组个数。
 *
 * 示例：nums = [1,2,1,2,3], k = 2 => 7
 *
 * 思路：至多 k 种的子数组个数减去至多 k-1 种。
 * 时间 O(n)，空间 O(k)
 */

function atMostDistinct(nums: number[], k: number): number {
  if (k < 0) {
    return 0;
  }
  const freq = new Map<number, number>();
  let left = 0;
  let count = 0;
  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) ?? 0) + 1);
    while (freq.size > k) {
      const outgoing = nums[left];
      const next = (freq.get(outgoing) ?? 0) - 1;
      if (next === 0) {
        freq.delete(outgoing);
      } else {
        freq.set(outgoing, next);
      }
      left++;
    }
    count += right - left + 1;
  }
  return count;
}

export function subarraysWithKDistinct(nums: number[], k: number): number {
  return atMostDistinct(nums, k) - atMostDistinct(nums, k - 1);
}

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
