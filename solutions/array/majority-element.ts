/**
 * 多数元素
 * 找出数组中出现次数超过 ⌊n/2⌋ 的元素（保证一定存在）。
 *
 * 示例：nums = [2,2,1,1,1,2,2] => 2
 *
 * 思路：Boyer-Moore 投票算法。
 * 时间 O(n)，空间 O(1)
 */

export function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
