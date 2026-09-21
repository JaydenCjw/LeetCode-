/**
 * 单线程 CPU
 * 难度：★★★☆☆
 * 任务用 [入队时间, 处理时间] 表示。CPU 每次从已到达任务里选处理时间最短的，相同则选下标最小的。返回处理顺序。
 *
 * 示例：[[1,2],[2,4],[3,2],[4,1]] => [0,2,3,1]
 *
 * 思路：按入队时间排序，小根堆存放可执行任务的处理时间和原下标。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function getOrder(tasks: number[][]): number[] {
  const indexed = tasks.map((task, index) => [task[0], task[1], index]);
  indexed.sort((a, b) => a[0] - b[0]);
  const ready = new Heap<[number, number]>(
    (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]),
  );
  const order: number[] = [];
  let time = 0;
  let index = 0;
  while (order.length < indexed.length) {
    if (ready.size === 0 && time < indexed[index][0]) {
      time = indexed[index][0];
    }
    while (index < indexed.length && indexed[index][0] <= time) {
      ready.push([indexed[index][1], indexed[index][2]]);
      index += 1;
    }
    const next = ready.pop();
    order.push(next[1]);
    time += next[0];
  }
  return order;
}

console.log(
  getOrder([
    [1, 2],
    [2, 4],
    [3, 2],
    [4, 1],
  ]),
);
