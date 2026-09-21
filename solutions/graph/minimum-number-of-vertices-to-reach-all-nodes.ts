/**
 * 可以到达所有点的最少点数目
 * 难度：★★★☆☆
 * 有向无环图中，选出最少的起点，使沿有向边能到达所有节点。
 *
 * 示例：n = 6，edges = [[0,1],[0,2],[2,5],[3,4],[4,2]] => [0,3]
 *
 * 思路：入度为 0 的点无法被其他点到达，它们就是必须选的起点。
 * 时间 O(n+m)，空间 O(n)
 */

export function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const indegree = new Array<number>(n).fill(0);
  for (const edge of edges) {
    indegree[edge[1]]++;
  }
  const answer: number[] = [];
  for (let node = 0; node < n; node++) {
    if (indegree[node] === 0) {
      answer.push(node);
    }
  }
  return answer;
}

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ]),
);
