/**
 * IPO
 * 难度：★★★★☆
 * 最多完成 k 个项目。启动资金为 w，项目需要 capital[i] 才能启动，完成后利润 profits[i] 加入资金。返回最终最大资金。
 *
 * 示例：k = 2，w = 0，profits = [1,2,3]，capital = [0,1,1] => 4
 *
 * 思路：按启动资金排序。小根堆尚未负担得起的项目，大根堆当前能做的利润，每次选利润最大的。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[],
): number {
  const projects: Array<[number, number]> = capital.map((need, index) => [need, profits[index]]);
  projects.sort((a, b) => a[0] - b[0]);
  const available = new Heap<number>((a, b) => a > b);
  let index = 0;
  for (let done = 0; done < k; done += 1) {
    while (index < projects.length && projects[index][0] <= w) {
      available.push(projects[index][1]);
      index += 1;
    }
    if (available.size === 0) {
      break;
    }
    w += available.pop();
  }
  return w;
}

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
