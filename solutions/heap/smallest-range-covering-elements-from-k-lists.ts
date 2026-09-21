/**
 * 最小区间
 * 难度：★★★★☆
 * 给定 k 个升序链表，找出最短区间，使每个链表至少有一个数落在区间内。
 *
 * 示例：[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]] => [20,24]
 *
 * 思路：小根堆维护每个链表的当前指针。窗口右端是已见最大值，弹出最小端点后向该链表前进。
 * 时间 O(n log k)，空间 O(k)
 */

import { Heap } from "@/heap";

export function smallestRange(nums: number[][]): number[] {
  const heap = new Heap<[number, number, number]>((a, b) => a[0] < b[0]);
  let maxValue = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i += 1) {
    heap.push([nums[i][0], i, 0]);
    maxValue = Math.max(maxValue, nums[i][0]);
  }

  let bestLeft = 0;
  let bestRight = Number.POSITIVE_INFINITY;
  while (heap.size === nums.length) {
    const top = heap.pop();
    const value = top[0];
    const list = top[1];
    const index = top[2];
    if (maxValue - value < bestRight - bestLeft) {
      bestLeft = value;
      bestRight = maxValue;
    }
    if (index + 1 < nums[list].length) {
      const next = nums[list][index + 1];
      heap.push([next, list, index + 1]);
      maxValue = Math.max(maxValue, next);
    }
  }
  return [bestLeft, bestRight];
}

console.log(
  smallestRange([
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ]),
);
