/**
 * 长度为 k 的不同元素子数组最大和
 * 难度：★★★☆☆
 * 在长度为 k 且元素互不相同的连续子数组中，返回最大和；不存在则返回 0。
 *
 * 示例：nums = [1,5,4,2,9,9,9], k = 3 => 15
 *
 * 思路：定长窗口维护和与频次，窗口内元素种类等于 k 时更新答案。
 * 时间 O(n)，空间 O(k)
 */

export function maximumSubarraySum(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let sum = 0;
  let best = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1);
    if (i >= k) {
      const outgoing = nums[i - k];
      sum -= outgoing;
      const next = (freq.get(outgoing) ?? 0) - 1;
      if (next === 0) {
        freq.delete(outgoing);
      } else {
        freq.set(outgoing, next);
      }
    }
    if (i >= k - 1 && freq.size === k) {
      best = Math.max(best, sum);
    }
  }
  return best;
}

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
