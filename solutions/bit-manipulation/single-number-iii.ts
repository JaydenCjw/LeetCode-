/**
 * 只出现一次的数字 III
 * 难度：★★★☆☆
 * 恰好两个元素只出现一次，其余都出现两次。返回这两个元素。
 *
 * 思路：全体异或得到两数异或，用最低不同位分组再分别异或。
 * 时间 O(n)，空间 O(1)
 */

export function singleNumber(nums: number[]): number[] {
  let xor = 0;
  for (const num of nums) {
    xor ^= num;
  }
  const diff = xor & -xor;
  let a = 0;
  let b = 0;
  for (const num of nums) {
    if ((num & diff) === 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  }
  return [a, b];
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
