/**
 * 最大网络秩
 * 难度：★★★☆☆
 * n 座城市和双向道路。两座不同城市的网络秩是两者道路数之和，若它们直接相连则再减 1。返回最大网络秩。
 *
 * 示例：n = 4，roads = [[0,1],[0,3],[1,2],[1,3]] => 4
 *
 * 思路：统计度数并记录相邻关系，枚举每一对城市计算秩。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function maximalNetworkRank(n: number, roads: number[][]): number {
  const degree = new Array<number>(n).fill(0);
  const linked = Array.from({ length: n }, () => new Array<boolean>(n).fill(false));
  for (const [left, right] of roads) {
    degree[left]++;
    degree[right]++;
    linked[left][right] = true;
    linked[right][left] = true;
  }

  let best = 0;
  for (let left = 0; left < n; left++) {
    for (let right = left + 1; right < n; right++) {
      const rank = degree[left] + degree[right] - (linked[left][right] ? 1 : 0);
      best = Math.max(best, rank);
    }
  }
  return best;
}

console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ]),
);
