/**
 * 使数组异或和等于 K 的最少操作次数
 * 难度：★★☆☆☆
 * 一次操作可以把任一元素改成任意值。返回使全体异或等于 k 的最少操作次数。
 *
 * 示例：[2,1,3,4], k = 1 => 2
 *
 * 思路：当前异或与 k 的差异有几位 1，就至少要改几位，一次操作可以改一个元素的任意位，但最少次数等于差异的 1 的个数（每次只修一位也可，实际上一次能修完一个元素上的所有差异位，次数是汉明重量）。
 * 时间 O(n)，空间 O(1)
 */

export function minOperations(nums: number[], k: number): number {
  let xor = k;
  for (const num of nums) {
    xor ^= num;
  }
  let count = 0;
  while (xor > 0) {
    count += xor & 1;
    xor >>= 1;
  }
  return count;
}

console.log(minOperations([2, 1, 3, 4], 1));
