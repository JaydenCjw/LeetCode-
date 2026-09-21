/**
 * 所有可能的路径
 * 难度：★★☆☆☆
 * 有向无环图，返回从 0 到 n-1 的所有路径。
 *
 * 思路：DFS 记录当前路径。
 * 时间 O(2^n * n)，空间 O(n)
 */

export function allPathsSourceTarget(graph: number[][]): number[][] {
  const result: number[][] = [];
  const path = [0];

  const dfs = (node: number): void => {
    if (node === graph.length - 1) {
      result.push([...path]);
      return;
    }
    for (const next of graph[node]) {
      path.push(next);
      dfs(next);
      path.pop();
    }
  };

  dfs(0);
  return result;
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
