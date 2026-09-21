/**
 * 最小高度树
 * 难度：★★★☆☆
 * n 个节点的无向树，求作为根时树高最小的全部节点。
 *
 * 示例：n = 4，edges = [[1,0],[1,2],[1,3]] => [1]
 *
 * 思路：反复剥掉当前叶子，最后剩下的 1 或 2 个节点就是最小高度树的根。
 * 时间 O(n)，空间 O(n)
 */

export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) {
    return [0];
  }
  const graph: number[][] = Array.from({ length: n }, () => []);
  const degree = new Array<number>(n).fill(0);
  for (const [left, right] of edges) {
    graph[left].push(right);
    graph[right].push(left);
    degree[left]++;
    degree[right]++;
  }

  let leaves: number[] = [];
  for (let node = 0; node < n; node++) {
    if (degree[node] <= 1) {
      leaves.push(node);
    }
  }

  let remaining = n;
  while (remaining > 2) {
    remaining -= leaves.length;
    const next: number[] = [];
    for (const node of leaves) {
      for (const neighbor of graph[node]) {
        degree[neighbor]--;
        if (degree[neighbor] === 1) {
          next.push(neighbor);
        }
      }
    }
    leaves = next;
  }
  return leaves;
}

console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ]),
);
