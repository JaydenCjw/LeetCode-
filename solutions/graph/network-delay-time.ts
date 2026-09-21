/**
 * 网络延迟时间
 * 难度：★★★☆☆
 * 有向带权图，从节点 k 发出信号，返回所有节点都收到信号的时间；有节点收不到则 -1。
 *
 * 思路：Dijkstra 求单源最短路，取最大值。
 * 时间 O((V+E) log V)，空间 O(V+E)
 */

import { Heap } from "@/heap";

export function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph = Array.from({ length: n + 1 }, () => [] as Array<[number, number]>);
  for (const [from, to, weight] of times) {
    graph[from].push([to, weight]);
  }

  const dist = new Array<number>(n + 1).fill(Infinity);
  dist[k] = 0;
  const heap = new Heap<[number, number]>((a, b) => a[0] < b[0]);
  heap.push([0, k]);

  while (heap.size > 0) {
    const [time, node] = heap.pop();
    if (time > dist[node]) {
      continue;
    }
    for (const [next, weight] of graph[node]) {
      if (time + weight < dist[next]) {
        dist[next] = time + weight;
        heap.push([dist[next], next]);
      }
    }
  }

  let answer = 0;
  for (let node = 1; node <= n; node++) {
    answer = Math.max(answer, dist[node]);
  }
  return answer === Infinity ? -1 : answer;
}

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
