/**
 * 打家劫舍 II
 * 难度：★★★☆☆
 * 房屋围成一圈，相邻不能偷。求最大金额。
 *
 * 示例：nums = [2,3,2] => 3
 *
 * 思路：拆成「不偷首」与「不偷尾」两段线性打家劫舍取最大。
 * 时间 O(n)，空间 O(1)
 */

export function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  const robLinear = (start: number, end: number): number => {
    let prev2 = 0;
    let prev1 = 0;
    for (let i = start; i <= end; i++) {
      const current = Math.max(prev1, prev2 + nums[i]);
      prev2 = prev1;
      prev1 = current;
    }
    return prev1;
  };

  return Math.max(robLinear(0, nums.length - 2), robLinear(1, nums.length - 1));
}

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
