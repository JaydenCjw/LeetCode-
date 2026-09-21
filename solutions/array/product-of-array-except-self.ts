/**
 * 除自身以外数组的乘积
 * 返回数组 answer，其中 answer[i] 等于 nums 中除 nums[i] 外其余元素的乘积。
 * 要求 O(n) 且不使用除法。
 *
 * 示例：nums = [1,2,3,4] => [24,12,8,6]
 *
 * 思路：先从左到右累积前缀积，再从右到左乘后缀积。
 * 时间 O(n)，空间 O(1)（输出数组不计）
 */

export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array<number>(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));
