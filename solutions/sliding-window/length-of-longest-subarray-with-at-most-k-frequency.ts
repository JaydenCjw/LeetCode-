/**
 * 频率不超过 k 的最长子数组
 * 难度：★★★☆☆
 * 返回每个元素出现次数都不超过 k 的最长连续子数组长度。
 *
 * 示例：nums = [1,2,3,1,2,3,1,2], k = 2 => 6
 *
 * 思路：滑动窗口统计频次，新元素超限时从左端弹出。
 * 时间 O(n)，空间 O(n)
 */

export function maxSubarrayLength(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let left = 0;
  let best = 0;
  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) ?? 0) + 1);
    while ((freq.get(nums[right]) ?? 0) > k) {
      const outgoing = nums[left];
      const next = (freq.get(outgoing) ?? 0) - 1;
      if (next === 0) {
        freq.delete(outgoing);
      } else {
        freq.set(outgoing, next);
      }
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
