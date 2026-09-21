/**
 * 一维数组的前缀和
 * 难度：★☆☆☆☆
 * 返回数组的前缀和：第 i 项是原数组前 i+1 项之和。
 *
 * 示例：nums = [1,2,3,4] => [1,3,6,10]
 *
 * 思路：从左到右累加。
 * 时间 O(n)，空间 O(n)
 */

export function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    result.push(sum);
  }
  return result;
}

console.log(runningSum([1, 2, 3, 4]));
