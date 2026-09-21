/**
 * 最后一块石头的重量 II
 * 难度：★★★☆☆
 * 每次选两块石头碰撞，重量差为新石头。返回最后可能剩下的最小重量。
 *
 * 示例：[2,7,4,1,8,1] => 1
 *
 * 思路：等价于把石头分成两堆，使和的差最小。用背包求不超过总重一半的最大子集和。
 * 时间 O(n * sum)，空间 O(sum)
 */

export function lastStoneWeightII(stones: number[]): number {
  const sum = stones.reduce((total, stone) => total + stone, 0);
  let target = Math.floor(sum / 2);
  const can = new Array<boolean>(target + 1).fill(false);
  can[0] = true;
  for (const stone of stones) {
    for (let weight = target; weight >= stone; weight -= 1) {
      if (can[weight - stone]) {
        can[weight] = true;
      }
    }
  }
  while (target > 0 && !can[target]) {
    target -= 1;
  }
  return sum - 2 * target;
}

console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));
