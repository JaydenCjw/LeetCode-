/**
 * 天际线问题
 * 难度：★★★★★
 * 建筑用 [左边界, 右边界, 高度] 表示。返回天际线的关键点 [x, 高度]。
 *
 * 示例：[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
 * => [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
 *
 * 思路：扫描线。左端点高度取负以便同一横坐标先处理更高的起点。大根堆配合计数做延迟删除，同一横坐标处理完再记录高度变化。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function getSkyline(buildings: number[][]): number[][] {
  const events: Array<[number, number]> = [];
  for (const building of buildings) {
    events.push([building[0], -building[2]]);
    events.push([building[1], building[2]]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const heap = new Heap<number>((a, b) => a > b);
  const count = new Map<number, number>();
  heap.push(0);
  count.set(0, 1);
  let previous = 0;
  const result: number[][] = [];

  for (let i = 0; i < events.length; ) {
    const x = events[i][0];
    while (i < events.length && events[i][0] === x) {
      const height = events[i][1];
      if (height < 0) {
        const buildingHeight = -height;
        count.set(buildingHeight, (count.get(buildingHeight) ?? 0) + 1);
        heap.push(buildingHeight);
      } else {
        count.set(height, (count.get(height) ?? 1) - 1);
      }
      i += 1;
    }
    while (heap.size > 0 && (count.get(heap.peek()) ?? 0) <= 0) {
      heap.pop();
    }
    const current = heap.size > 0 ? heap.peek() : 0;
    if (current !== previous) {
      result.push([x, current]);
      previous = current;
    }
  }
  return result;
}

console.log(
  getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ]),
);
