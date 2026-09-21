/**
 * 重新排列数组
 * 难度：★☆☆☆☆
 * nums 由 x1..xn 与 y1..yn 拼接而成，返回 [x1,y1,...,xn,yn]。
 *
 * 示例：nums = [2,5,1,3,4,7], n = 3 => [2,3,5,4,1,7]
 *
 * 思路：按下标成对取出前后两半。
 * 时间 O(n)，空间 O(n)
 */

export function shuffle(nums: number[], n: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
