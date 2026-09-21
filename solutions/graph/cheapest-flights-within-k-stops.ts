/**
 * K 站中转内最便宜的航班
 * 难度：★★★☆☆
 * 有 n 个城市和航班 [from, to, price]。求从 src 到 dst、最多经 k 次中转的最低价格，不可达返回 -1。
 *
 * 示例：n = 4，flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]，src = 0，dst = 3，k = 1 => 700
 *
 * 思路：Bellman-Ford 最多松弛 k+1 轮，每轮只使用上一轮的距离，避免同一轮多次中转。
 * 时间 O(k*m)，空间 O(n)
 */

export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  let dist = new Array<number>(n).fill(Number.POSITIVE_INFINITY);
  dist[src] = 0;

  for (let stop = 0; stop <= k; stop++) {
    const next = dist.slice();
    for (const flight of flights) {
      const from = flight[0];
      const to = flight[1];
      const price = flight[2];
      if (dist[from] !== Number.POSITIVE_INFINITY && dist[from] + price < next[to]) {
        next[to] = dist[from] + price;
      }
    }
    dist = next;
  }
  return dist[dst] === Number.POSITIVE_INFINITY ? -1 : dist[dst];
}

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1,
  ),
);
