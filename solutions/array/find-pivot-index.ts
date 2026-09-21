/**
 * 寻找数组的中心下标
 * 难度：★☆☆☆☆
 * 中心下标左侧元素和等于右侧元素和，返回最左的一个，不存在则 -1。
 *
 * 示例：[1,7,3,6,5,6] => 3
 *
 * 思路：前缀和，左边和 * 2 + 当前值 === 总和。
 * 时间 O(n)，空间 O(1)
 */

export function pivotIndex(nums: number[]): number {
  const total = nums.reduce((sum, value) => sum + value, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left * 2 + nums[i] === total) {
      return i;
    }
    left += nums[i];
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
