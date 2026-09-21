/**
 * 找到最终的安全状态
 * 难度：★★★☆☆
 * 有向图中，从某点出发的所有路径都能走到终端节点（出度为 0），则该点是安全的。按升序返回安全节点。
 *
 * 示例：graph = [[1,2],[2,3],[5],[0],[5],[],[]] => [2,4,5,6]
 *
 * 思路：反转边后，从出度为 0 的点做拓扑，能被删光出边的点都是安全的。
 * 时间 O(n+m)，空间 O(n+m)
 */

export function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  const reversed: number[][] = Array.from({ length: n }, () => []);
  const outdegree = new Array<number>(n).fill(0);
  for (let node = 0; node < n; node++) {
    outdegree[node] = graph[node].length;
    for (const next of graph[node]) {
      reversed[next].push(node);
    }
  }

  const queue: number[] = [];
  for (let node = 0; node < n; node++) {
    if (outdegree[node] === 0) {
      queue.push(node);
    }
  }

  const safe = new Array<boolean>(n).fill(false);
  let head = 0;
  while (head < queue.length) {
    const node = queue[head];
    head++;
    if (node === undefined) {
      continue;
    }
    safe[node] = true;
    for (const previous of reversed[node]) {
      outdegree[previous]--;
      if (outdegree[previous] === 0) {
        queue.push(previous);
      }
    }
  }

  const answer: number[] = [];
  for (let node = 0; node < n; node++) {
    if (safe[node]) {
      answer.push(node);
    }
  }
  return answer;
}

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
