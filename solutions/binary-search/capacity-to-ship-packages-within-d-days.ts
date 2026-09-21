/**
 * 在 D 天内送达包裹的能力
 * 难度：★★★☆☆
 * 包裹必须按顺序装船，船每天运一段连续包裹，求 D 天内运完的最小运载能力。
 *
 * 思路：二分运载能力，贪心模拟所需天数。
 * 时间 O(n log S)，空间 O(1)
 */

export function shipWithinDays(weights: number[], days: number): number {
  let left = Math.max(...weights);
  let right = weights.reduce((sum, value) => sum + value, 0);

  const needDays = (capacity: number): number => {
    let used = 1;
    let current = 0;
    for (const weight of weights) {
      if (current + weight > capacity) {
        used++;
        current = 0;
      }
      current += weight;
    }
    return used;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (needDays(mid) <= days) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
