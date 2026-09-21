/**
 * 雇佣 K 名工人的最低成本
 * 难度：★★★★☆
 * 每组工人里，工资必须按质量成比例，且不低于各自期望工资。返回雇佣 k 人的最低成本。
 *
 * 示例：quality = [10,20,5]，wage = [70,50,30]，k = 2 => 105
 *
 * 思路：按工资/质量比升序。比例最高的人决定整组时薪。大根堆丢掉质量最大的人，使总质量最小。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  const workers: Array<[number, number]> = [];
  for (let i = 0; i < quality.length; i += 1) {
    workers.push([wage[i] / quality[i], quality[i]]);
  }
  workers.sort((a, b) => a[0] - b[0]);

  const heaviest = new Heap<number>((a, b) => a > b);
  let qualitySum = 0;
  let best = Number.POSITIVE_INFINITY;
  for (const worker of workers) {
    const ratio = worker[0];
    const currentQuality = worker[1];
    heaviest.push(currentQuality);
    qualitySum += currentQuality;
    if (heaviest.size > k) {
      qualitySum -= heaviest.pop();
    }
    if (heaviest.size === k) {
      best = Math.min(best, qualitySum * ratio);
    }
  }
  return best;
}

console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2));
