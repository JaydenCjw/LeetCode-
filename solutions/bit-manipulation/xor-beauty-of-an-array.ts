/**
 * 数组的异或美丽值
 * 难度：★★☆☆☆
 * 对所有三元组 (i,j,k)，计算 (nums[i] | nums[j]) & nums[k] 的异或，返回这个异或美丽值。
 *
 * 示例：[1,4] => 5
 *
 * 思路：化简后等于数组所有元素的异或。
 * 时间 O(n)，空间 O(1)
 */

export function xorBeauty(nums: number[]): number {
  return nums.reduce((xor, value) => xor ^ value, 0);
}

console.log(xorBeauty([1, 4]));
