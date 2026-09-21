/**
 * 按奇偶排序数组 II
 * 难度：★★☆☆☆
 * 偶数下标放偶数，奇数下标放奇数。数组中奇偶个数相等。
 *
 * 示例：nums = [4,2,5,7] => [4,5,2,7]
 *
 * 思路：偶数位、奇数位各走一步，错位时交换。
 * 时间 O(n)，空间 O(1)
 */

export function sortArrayByParityII(nums: number[]): number[] {
  let even = 0;
  let odd = 1;
  while (even < nums.length && odd < nums.length) {
    if (nums[even] % 2 === 0) {
      even += 2;
    } else if (nums[odd] % 2 === 1) {
      odd += 2;
    } else {
      const temp = nums[even];
      nums[even] = nums[odd];
      nums[odd] = temp;
      even += 2;
      odd += 2;
    }
  }
  return nums;
}

console.log(sortArrayByParityII([4, 2, 5, 7]));
