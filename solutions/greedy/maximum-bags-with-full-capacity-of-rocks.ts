/**
 * 装满石头的背包的最大数量
 * 难度：★★☆☆☆
 * 每个背包容量 capacity[i]，已有 rocks[i] 块石头。另有 additionalRocks 块，求最多能装满多少个背包。
 *
 * 示例：capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2 => 3
 *
 * 思路：计算每个背包还差多少，按缺口从小到大填满。
 * 时间 O(n log n)，空间 O(n)
 */

export function maximumBags(
  capacity: number[],
  rocks: number[],
  additionalRocks: number,
): number {
  const need = capacity.map((cap, index) => cap - rocks[index]);
  need.sort((a, b) => a - b);
  let count = 0;
  let extra = additionalRocks;
  for (const gap of need) {
    if (gap > extra) {
      break;
    }
    extra -= gap;
    count++;
  }
  return count;
}

console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2));
