/**
 * 雇佣 K 位工人的总代价
 * 难度：★★★☆☆
 * 每次只能从代价数组开头或结尾的 candidates 名工人里选代价最小的一位，选完后窗口向中间补人。返回雇佣 k 人的总代价。
 *
 * 示例：costs = [17,12,10,2,7,2,11,20,8]，k = 3，candidates = 4 => 11
 *
 * 思路：左右各维护一个小根堆，每次取两边更小的代价。
 * 时间 O((candidates + k) log candidates)，空间 O(candidates)
 */

import { Heap } from "@/heap";

export function totalCost(costs: number[], k: number, candidates: number): number {
  const left = new Heap<number>((a, b) => a < b);
  const right = new Heap<number>((a, b) => a < b);
  let i = 0;
  let j = costs.length - 1;
  for (let count = 0; count < candidates && i <= j; count += 1) {
    left.push(costs[i]);
    i += 1;
  }
  for (let count = 0; count < candidates && i <= j; count += 1) {
    right.push(costs[j]);
    j -= 1;
  }

  let sum = 0;
  for (let hired = 0; hired < k; hired += 1) {
    const leftPeek = left.size > 0 ? left.peek() : Number.POSITIVE_INFINITY;
    const rightPeek = right.size > 0 ? right.peek() : Number.POSITIVE_INFINITY;
    if (leftPeek <= rightPeek) {
      sum += left.pop();
      if (i <= j) {
        left.push(costs[i]);
        i += 1;
      }
    } else {
      sum += right.pop();
      if (i <= j) {
        right.push(costs[j]);
        j -= 1;
      }
    }
  }
  return sum;
}

console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4));
