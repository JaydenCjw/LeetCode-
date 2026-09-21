/**
 * 相对名次
 * 难度：★☆☆☆☆
 * 分数从高到低对应 "Gold Medal"、"Silver Medal"、"Bronze Medal"，之后用名次字符串。返回与原数组同序的名次。
 *
 * 示例：[5,4,3,2,1] => ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
 *
 * 思路：大根堆按分数弹出，依次赋名次。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function findRelativeRanks(score: number[]): string[] {
  const heap = new Heap<[number, number]>((a, b) => a[0] > b[0]);
  score.forEach((value, index) => {
    heap.push([value, index]);
  });
  const result = new Array<string>(score.length);
  const titles = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  let rank = 1;
  while (heap.size > 0) {
    const top = heap.pop();
    result[top[1]] = rank <= 3 ? titles[rank - 1] : `${rank}`;
    rank += 1;
  }
  return result;
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
