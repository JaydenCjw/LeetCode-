/**
 * 团队的最大表现值
 * 难度：★★★★☆
 * 至多选 k 名工程师。表现值是速度之和乘以其中最低效率，答案对 10^9+7 取模。
 *
 * 示例：n = 6，speed = [2,10,3,1,5,8]，efficiency = [5,4,3,9,7,2]，k = 2 => 60
 *
 * 思路：按效率从高到低加入。小根堆只保留速度最大的 k 个人，当前效率就是队内最低效率。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function maxPerformance(
  n: number,
  speed: number[],
  efficiency: number[],
  k: number,
): number {
  const engineers: Array<[number, number]> = [];
  for (let i = 0; i < n; i += 1) {
    engineers.push([efficiency[i], speed[i]]);
  }
  engineers.sort((a, b) => b[0] - a[0]);

  const slowest = new Heap<number>((a, b) => a < b);
  let speedSum = 0n;
  let best = 0n;
  const mod = 1_000_000_007n;
  for (const engineer of engineers) {
    const currentEfficiency = engineer[0];
    const currentSpeed = engineer[1];
    speedSum += BigInt(currentSpeed);
    slowest.push(currentSpeed);
    if (slowest.size > k) {
      speedSum -= BigInt(slowest.pop());
    }
    const performance = speedSum * BigInt(currentEfficiency);
    if (performance > best) {
      best = performance;
    }
  }
  return Number(best % mod);
}

console.log(maxPerformance(6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2));
