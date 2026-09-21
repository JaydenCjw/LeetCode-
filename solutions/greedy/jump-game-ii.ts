/**
 * 跳跃游戏 II
 * 难度：★★★☆☆
 * 假设总可以到达终点，返回到达最后一个下标的最少跳跃次数。
 *
 * 示例：nums = [2,3,1,1,4] => 2
 *
 * 思路：贪心分层，当前层边界走完时跳跃 +1。
 * 时间 O(n)，空间 O(1)
 */

export function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}

console.log(jump([2, 3, 1, 1, 4]));
