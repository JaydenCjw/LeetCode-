/**
 * 跳跃游戏
 * 每个元素表示该位置可跳跃的最大长度，判断能否到达最后一个下标。
 *
 * 示例：nums = [2,3,1,1,4] => true；[3,2,1,0,4] => false
 *
 * 思路：贪心维护当前能到达的最远位置。
 * 时间 O(n)，空间 O(1)
 */

export function canJump(nums: number[]): boolean {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    }
    farthest = Math.max(farthest, i + nums[i]);
  }

  return true;
}

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
