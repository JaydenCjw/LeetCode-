/**
 * 使用最小花费爬楼梯
 * 难度：★☆☆☆☆
 * 从下标 0 或 1 起步，每次爬 1 或 2 阶并支付该台阶费用，求到达楼顶的最小花费。
 *
 * 思路：到第 i 阶的最小花费是前一阶或前两阶的较小值加上当前费用。
 * 时间 O(n)，空间 O(1)
 */

export function minCostClimbingStairs(cost: number[]): number {
  let prev2 = 0;
  let prev1 = 0;
  for (const value of cost) {
    const current = value + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = current;
  }
  return Math.min(prev1, prev2);
}

console.log(minCostClimbingStairs([10, 15, 20]));
