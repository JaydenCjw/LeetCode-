/**
 * K 次乘法运算后的数组
 * 难度：★★☆☆☆
 * 每次把当前最小的数乘以 multiplier。相等时选更小的下标。返回 k 次操作后的数组。
 *
 * 示例：[2,1,3,5,6]，k = 5，multiplier = 2 => [8,4,6,5,6]
 *
 * 思路：小根堆按值和按下标排序。
 * 时间 O((n + k) log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  const result = nums.slice();
  const heap = new Heap<[number, number]>(
    (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]),
  );
  result.forEach((value, index) => {
    heap.push([value, index]);
  });
  for (let i = 0; i < k; i += 1) {
    const top = heap.pop();
    const value = top[0] * multiplier;
    result[top[1]] = value;
    heap.push([value, top[1]]);
  }
  return result;
}

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
