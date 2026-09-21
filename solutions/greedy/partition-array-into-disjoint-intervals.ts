/**
 * 分割数组
 * 难度：★★★☆☆
 * 把数组分成左右两段，左段每个数都小于等于右段每个数，返回最短左段长度。
 *
 * 示例：[5,0,3,8,6] => 3
 *
 * 思路：维护左段最大值。一旦当前数比左段最大值更小，就把分割点推到这里，并用目前全局最大值更新左段上界。
 * 时间 O(n)，空间 O(1)
 */

export function partitionDisjoint(nums: number[]): number {
  let leftMax = nums[0];
  let currentMax = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax, nums[i]);
    if (nums[i] < leftMax) {
      index = i;
      leftMax = currentMax;
    }
  }
  return index + 1;
}

console.log(partitionDisjoint([5, 0, 3, 8, 6]));
