/**
 * 概率最大的路径
 * 难度：★★★☆☆
 * 无向图每条边有成功概率。求从 start 到 end 的路径中，概率乘积最大的那条。
 *
 * 示例：n = 3，edges = [[0,1],[1,2],[0,2]]，succProb = [0.5,0.5,0.2]，start = 0，end = 2 => 0.25
 *
 * 思路：把概率当作边权，大根堆 Dijkstra 优先扩展当前概率更大的节点。
 * 时间 O(m log n)，空间 O(n+m)
 */

import { Heap } from "@/heap";

export function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number,
): number {
  const graph: Array<Array<[number, number]>> = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const prob = succProb[i];
    graph[edge[0]].push([edge[1], prob]);
    graph[edge[1]].push([edge[0], prob]);
  }

  const best = new Array<number>(n).fill(0);
  best[start] = 1;
  const heap = new Heap<[number, number]>((a, b) => a[0] > b[0]);
  heap.push([1, start]);

  while (heap.size > 0) {
    const current = heap.pop();
    const prob = current[0];
    const node = current[1];
    if (prob < best[node]) {
      continue;
    }
    if (node === end) {
      return prob;
    }
    for (const [next, weight] of graph[node]) {
      const nextProb = prob * weight;
      if (nextProb > best[next]) {
        best[next] = nextProb;
        heap.push([nextProb, next]);
      }
    }
  }
  return 0;
}

console.log(
  maxProbability(
    3,
    [
      [0, 1],
      [1, 2],
      [0, 2],
    ],
    [0.5, 0.5, 0.2],
    0,
    2,
  ),
);
