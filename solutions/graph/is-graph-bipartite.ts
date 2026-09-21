/**
 * 判断二分图
 * 难度：★★★☆☆
 * 无向图用邻接表给出，判断能否二分染色。
 *
 * 思路：BFS 交替染色，相邻同色则不是二分图。
 * 时间 O(V+E)，空间 O(V)
 */

export function isBipartite(graph: number[][]): boolean {
  const color = new Array<number>(graph.length).fill(0);
  for (let start = 0; start < graph.length; start++) {
    if (color[start] !== 0) {
      continue;
    }
    const queue = [start];
    color[start] = 1;
    let head = 0;
    while (head < queue.length) {
      const node = queue[head++];
      for (const next of graph[node]) {
        if (color[next] === color[node]) {
          return false;
        }
        if (color[next] === 0) {
          color[next] = -color[node];
          queue.push(next);
        }
      }
    }
  }
  return true;
}

console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]));
