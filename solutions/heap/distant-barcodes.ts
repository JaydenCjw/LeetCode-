/**
 * 距离条形码
 * 难度：★★★☆☆
 * 重新排列条形码，使相邻位置的值都不相同。题目保证有解。
 *
 * 示例：[1,1,1,2,2,2] => 一种相邻不同的排列，例如 [1,2,1,2,1,2]
 *
 * 思路：按剩余次数建大根堆，优先放置出现最多且与上一个不同的数字。
 * 时间 O(n log m)，空间 O(m)
 */

import { Heap } from "@/heap";

export function rearrangeBarcodes(barcodes: number[]): number[] {
  const frequency = new Map<number, number>();
  for (const code of barcodes) {
    frequency.set(code, (frequency.get(code) ?? 0) + 1);
  }
  const heap = new Heap<[number, number]>((a, b) => a[0] > b[0]);
  for (const [code, count] of frequency) {
    heap.push([count, code]);
  }

  const result: number[] = [];
  while (heap.size > 0) {
    const first = heap.pop();
    if (result.length === 0 || result[result.length - 1] !== first[1]) {
      result.push(first[1]);
      if (first[0] > 1) {
        heap.push([first[0] - 1, first[1]]);
      }
    } else {
      const second = heap.pop();
      result.push(second[1]);
      if (second[0] > 1) {
        heap.push([second[0] - 1, second[1]]);
      }
      heap.push(first);
    }
  }
  return result;
}

console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]));
