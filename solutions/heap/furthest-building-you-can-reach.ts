/**
 * 你能到达的最远建筑物
 * 难度：★★★☆☆
 * 从第 0 栋楼出发。高度差可以用砖块补，或者用一架梯子直接跨过。返回能到达的最远楼下标。
 *
 * 示例：[4,2,7,6,9,14,12]，bricks = 5，ladders = 1 => 4
 *
 * 思路：梯子优先留给更高的爬升。小根堆记录已经用梯子的高度差，梯子不够时把最矮的那次改用砖块。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const climbs = new Heap<number>((a, b) => a < b);
  for (let i = 0; i < heights.length - 1; i += 1) {
    const diff = heights[i + 1] - heights[i];
    if (diff <= 0) {
      continue;
    }
    climbs.push(diff);
    if (climbs.size > ladders) {
      bricks -= climbs.pop();
      if (bricks < 0) {
        return i;
      }
    }
  }
  return heights.length - 1;
}

console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1));
