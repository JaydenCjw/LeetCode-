/**
 * 只出现一次的数字 II
 * 难度：★★★☆☆
 * 除一个元素只出现一次外，其余都出现三次。找出只出现一次的数。
 *
 * 思路：统计每一位 1 的个数，模 3 剩下的就是答案。
 * 时间 O(n)，空间 O(1)
 */

export function singleNumber(nums: number[]): number {
  let result = 0;
  for (let bit = 0; bit < 32; bit++) {
    let count = 0;
    for (const num of nums) {
      count += (num >> bit) & 1;
    }
    if (count % 3 !== 0) {
      result |= 1 << bit;
    }
  }
  return result | 0;
}

console.log(singleNumber([2, 2, 3, 2]));
