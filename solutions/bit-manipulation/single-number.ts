/**
 * 只出现一次的数字
 * 非空数组中除一个元素只出现一次外，其余都出现两次。找出那个只出现一次的。
 *
 * 示例：nums = [4,1,2,1,2] => 4
 *
 * 思路：异或，成对抵消。
 * 时间 O(n)，空间 O(1)
 */

export function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
