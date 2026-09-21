/**
 * 消灭怪物的最大数量
 * 难度：★★★☆☆
 * 第 i 只怪物距城市 dist[i]，速度 speed[i]。每分钟开始时可以消灭一只怪物，怪物同时向城市移动，到达时刻小于等于当前分钟就会失败。返回最多消灭数量。
 *
 * 示例：dist = [1,3,4]，speed = [1,1,1] => 3
 *
 * 思路：按到达时间升序。第 minute 分钟必须还能赶在怪物到达前消灭它。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function eliminateMaximum(dist: number[], speed: number[]): number {
  const arrival = new Heap<number>((a, b) => a < b);
  for (let i = 0; i < dist.length; i += 1) {
    arrival.push(dist[i] / speed[i]);
  }
  let killed = 0;
  while (arrival.size > 0) {
    const time = arrival.pop();
    if (time <= killed) {
      break;
    }
    killed += 1;
  }
  return killed;
}

console.log(eliminateMaximum([1, 3, 4], [1, 1, 1]));
