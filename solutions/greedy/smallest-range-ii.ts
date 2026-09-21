/**
 * 最小差值 II
 * 难度：★★★☆☆
 * 每个元素必须加上 k 或减去 k，求调整后最大值与最小值之差的最小可能。
 *
 * 示例：nums = [1], k = 0 => 0；nums = [0,10], k = 2 => 6
 *
 * 思路：排序后枚举分界：左边加 k、右边减 k，取所有分界下极差的最小值。
 * 时间 O(n log n)，空间 O(1)
 */

export function smallestRangeII(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let answer = nums[n - 1] - nums[0];
  for (let i = 0; i < n - 1; i++) {
    const high = Math.max(nums[n - 1] - k, nums[i] + k);
    const low = Math.min(nums[0] + k, nums[i + 1] - k);
    answer = Math.min(answer, high - low);
  }
  return answer;
}

console.log(smallestRangeII([1], 0));
console.log(smallestRangeII([0, 10], 2));
