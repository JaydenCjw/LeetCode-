/**
 * 最少移动次数使数组元素相等 II
 * 难度：★★☆☆☆
 * 每次可以把一个元素加 1 或减 1，求使全部元素相等的最少次数。
 *
 * 示例：[1,2,3] => 2
 *
 * 思路：最优目标是中位数。答案为所有元素到中位数的绝对差之和。
 * 时间 O(n log n)，空间 O(1)
 */

export function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  let answer = 0;
  for (const value of nums) {
    answer += Math.abs(value - median);
  }
  return answer;
}

console.log(minMoves2([1, 2, 3]));
