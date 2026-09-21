/**
 * 两地调度
 * 难度：★★☆☆☆
 * 2n 个人去 A 或 B 城，costs[i] = [去 A, 去 B]。每城恰好 n 人，求最小费用。
 *
 * 思路：先都去 A，再把去 B 更划算的 n 个人改派（按差价排序）。
 * 时间 O(n log n)，空间 O(n)
 */

export function twoCitySchedCost(costs: number[][]): number {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  const n = costs.length / 2;
  let total = 0;
  for (let i = 0; i < costs.length; i++) {
    total += i < n ? costs[i][0] : costs[i][1];
  }
  return total;
}

console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]));
