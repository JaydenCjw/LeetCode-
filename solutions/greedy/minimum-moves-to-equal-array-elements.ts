/**
 * 最少移动次数使数组元素相等
 * 难度：★★☆☆☆
 * 每次给 n - 1 个元素加 1，求使全部元素相等的最少次数。
 *
 * 示例：[1,2,3] => 3
 *
 * 思路：给 n-1 个元素加 1 等价于给一个元素减 1。答案是每个元素减到最小值的次数之和。
 * 时间 O(n)，空间 O(1)
 */

export function minMoves(nums: number[]): number {
  const min = Math.min(...nums);
  let answer = 0;
  for (const value of nums) {
    answer += value - min;
  }
  return answer;
}

console.log(minMoves([1, 2, 3]));
