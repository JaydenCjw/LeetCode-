/**
 * 找出临界点之间的最小和最大距离
 * 难度：★★★☆☆
 * 临界点是局部极大或局部极小。返回任意两个临界点的最小距离和最大距离；不足两个时返回 [-1,-1]。
 *
 * 示例：[5,3,1,2,5,1,2] => [1,3]
 *
 * 思路：一次扫描记录临界点的下标（从 1 开始）。相邻下标差的最小值是最小距离，首尾之差是最大距离。
 * 时间 O(n)，空间 O(n)
 */

import { ListNode, buildList } from "@/types";

export function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  if (!head?.next?.next) {
    return [-1, -1];
  }
  let prev = head;
  let current = head.next;
  let index = 1;
  const points: number[] = [];
  while (current?.next) {
    index += 1;
    const next = current.next;
    const isPeak = current.val > prev.val && current.val > next.val;
    const isValley = current.val < prev.val && current.val < next.val;
    if (isPeak || isValley) {
      points.push(index);
    }
    prev = current;
    current = next;
  }
  if (points.length < 2) {
    return [-1, -1];
  }
  let minDistance = Number.POSITIVE_INFINITY;
  for (let i = 1; i < points.length; i += 1) {
    minDistance = Math.min(minDistance, points[i] - points[i - 1]);
  }
  return [minDistance, points[points.length - 1] - points[0]];
}

console.log(nodesBetweenCriticalPoints(buildList([5, 3, 1, 2, 5, 1, 2])));
console.log(nodesBetweenCriticalPoints(buildList([1, 3, 2])));
