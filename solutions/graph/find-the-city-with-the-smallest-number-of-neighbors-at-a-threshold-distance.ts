/**
 * 阈值距离内邻居最少的城市
 * 难度：★★★☆☆
 * n 座城市和双向道路。返回在距离阈值内可到达城市数最少的城市；并列时取编号最大者。
 *
 * 示例：n = 4，edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]]，distanceThreshold = 4 => 3
 *
 * 思路：Floyd 求出全部点对最短路，再按阈值统计每个城市的邻居数。
 * 时间 O(n^3)，空间 O(n^2)
 */

export function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const dist = Array.from({ length: n }, () => new Array<number>(n).fill(Number.POSITIVE_INFINITY));
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }
  for (const [left, right, weight] of edges) {
    dist[left][right] = weight;
    dist[right][left] = weight;
  }
  for (let mid = 0; mid < n; mid++) {
    for (let from = 0; from < n; from++) {
      for (let to = 0; to < n; to++) {
        dist[from][to] = Math.min(dist[from][to], dist[from][mid] + dist[mid][to]);
      }
    }
  }

  let answer = 0;
  let fewest = n;
  for (let city = 0; city < n; city++) {
    let neighbors = 0;
    for (let other = 0; other < n; other++) {
      if (other !== city && dist[city][other] <= distanceThreshold) {
        neighbors++;
      }
    }
    if (neighbors <= fewest) {
      fewest = neighbors;
      answer = city;
    }
  }
  return answer;
}

console.log(
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4,
  ),
);
