/**
 * 寻找图中是否存在路径
 * 难度：★★☆☆☆
 * 无向图有 n 个节点，判断 source 到 destination 是否连通。
 *
 * 示例：n = 3，edges = [[0,1],[1,2],[2,0]]，source = 0，destination = 2 => true
 *
 * 思路：建无向图后从 source 做 DFS，看能否走到 destination。
 * 时间 O(n+m)，空间 O(n+m)
 */

export function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [left, right] of edges) {
    graph[left].push(right);
    graph[right].push(left);
  }

  const seen = new Array<boolean>(n).fill(false);
  const dfs = (node: number): boolean => {
    if (node === destination) {
      return true;
    }
    seen[node] = true;
    for (const next of graph[node]) {
      if (!seen[next] && dfs(next)) {
        return true;
      }
    }
    return false;
  };
  return dfs(source);
}

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2,
  ),
);
