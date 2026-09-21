/**
 * 临界连接
 * 难度：★★★★☆
 * 无向连通图中，删掉会使图不再连通的边称为桥。返回全部桥。
 *
 * 示例：n = 4，connections = [[0,1],[1,2],[2,0],[1,3]] => [[1,3]]
 *
 * 思路：Tarjan 求桥。子树低链值高于当前发现时间时，该边是桥。
 * 时间 O(n+m)，空间 O(n+m)
 */

export function criticalConnections(n: number, connections: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [left, right] of connections) {
    graph[left].push(right);
    graph[right].push(left);
  }

  const discovered = new Array<number>(n).fill(-1);
  const low = new Array<number>(n).fill(-1);
  const bridges: number[][] = [];
  let time = 0;

  const dfs = (node: number, parent: number): void => {
    discovered[node] = time;
    low[node] = time;
    time++;
    for (const next of graph[node]) {
      if (next === parent) {
        continue;
      }
      if (discovered[next] === -1) {
        dfs(next, node);
        low[node] = Math.min(low[node], low[next]);
        if (low[next] > discovered[node]) {
          bridges.push(node < next ? [node, next] : [next, node]);
        }
      } else {
        low[node] = Math.min(low[node], discovered[next]);
      }
    }
  };

  for (let node = 0; node < n; node++) {
    if (discovered[node] === -1) {
      dfs(node, -1);
    }
  }
  return bridges;
}

console.log(
  criticalConnections(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ]),
);
