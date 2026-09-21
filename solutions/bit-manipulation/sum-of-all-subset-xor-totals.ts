/**
 * 所有子集的异或总和
 * 难度：★★☆☆☆
 * 返回数组每个子集异或值的总和。
 *
 * 示例：[1,3] => 6
 *
 * 思路：每个出现过的二进制位会在一半子集里为 1，贡献 该位 * 2^(n-1)。
 * 时间 O(n)，空间 O(1)
 */

export function subsetXORSum(nums: number[]): number {
  let orAll = 0;
  for (const num of nums) {
    orAll |= num;
  }
  return orAll << (nums.length - 1);
}

console.log(subsetXORSum([1, 3]));
