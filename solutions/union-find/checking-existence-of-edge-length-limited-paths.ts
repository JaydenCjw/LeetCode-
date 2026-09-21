/**
 * 检查边长度限制的路径是否存在
 * 难度：★★★★☆
 * 无向带权图。对每个查询 [u, v, limit]，判断是否存在一条 u 到 v 的路径，其上每条边权都严格小于 limit。
 *
 * 示例：n = 3，edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]]，queries = [[0,1,2],[0,2,5]] => [false, true]
 *
 * 思路：边和查询都按限制从小到大处理。查询时只并入权值更小的边，再看两端是否连通。
 * 时间 O((m+q) log (m+q))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {
  const edges = edgeList.slice().sort((a, b) => a[2] - b[2]);
  const order = queries.map((query, index) => [query[0], query[1], query[2], index]);
  order.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n);
  const answer = new Array<boolean>(queries.length).fill(false);
  let edgeIndex = 0;
  for (const query of order) {
    while (edgeIndex < edges.length && edges[edgeIndex][2] < query[2]) {
      uf.union(edges[edgeIndex][0], edges[edgeIndex][1]);
      edgeIndex++;
    }
    answer[query[3]] = uf.connected(query[0], query[1]);
  }
  return answer;
}

console.log(
  distanceLimitedPathsExist(
    3,
    [
      [0, 1, 2],
      [1, 2, 4],
      [2, 0, 8],
      [1, 0, 16],
    ],
    [
      [0, 1, 2],
      [0, 2, 5],
    ],
  ),
);
