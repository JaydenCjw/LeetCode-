/**
 * 最多可以参加的会议数目
 * 难度：★★★☆☆
 * 每天只能参加一场会议。会议区间为闭区间，求最多能参加多少场。
 *
 * 示例：events = [[1,2],[2,3],[3,4]] => 3
 *
 * 思路：按开始日排序，用小根堆保存已开始会议的结束日。每一天参加结束最早的一场，并丢掉已过期的。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function maxEvents(events: number[][]): number {
  events.sort((a, b) => a[0] - b[0]);
  const heap = new Heap<number>((a, b) => a < b);
  let index = 0;
  let day = 0;
  let attended = 0;
  while (index < events.length || heap.size > 0) {
    if (heap.size === 0) {
      day = events[index][0];
    }
    while (index < events.length && events[index][0] <= day) {
      heap.push(events[index][1]);
      index++;
    }
    while (heap.size > 0 && heap.peek() < day) {
      heap.pop();
    }
    if (heap.size > 0) {
      heap.pop();
      attended++;
      day++;
    }
  }
  return attended;
}

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
);
