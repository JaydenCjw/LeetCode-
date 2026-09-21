/**
 * 重新规划路线
 * 难度：★★★☆☆
 * n 座城市和 n-1 条有向道路。改变最少边的方向，使从任意城市都能到达城市 0。
 *
 * 示例：n = 6，connections = [[0,1],[1,3],[2,3],[4,0],[4,5]] => 3
 *
 * 思路：把边当成无向图并标记原方向。从 0 出发 DFS，走向远离 0 的原方向就需要反转。
 * 时间 O(n)，空间 O(n)
 */

export function minReorder(n: number, connections: number[][]): number {
  const graph: Array<Array<[number, number]>> = Array.from({ length: n }, () => []);
  for (const [from, to] of connections) {
    graph[from].push([to, 1]);
    graph[to].push([from, 0]);
  }

  const seen = new Array<boolean>(n).fill(false);
  let changes = 0;
  const dfs = (node: number): void => {
    seen[node] = true;
    for (const [next, cost] of graph[node]) {
      if (seen[next]) {
        continue;
      }
      changes += cost;
      dfs(next);
    }
  };
  dfs(0);
  return changes;
}

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ]),
);
