/**
 * 制作 m 束花所需的最少天数
 * 难度：★★★☆☆
 * bloomDay[i] 是第 i 朵花开放的日子。一束花需要相邻的 k 朵。返回凑满 m 束的最早一天，不可能则 -1。
 *
 * 示例：bloomDay = [1,10,3,10,2], m = 3, k = 1 => 3
 *
 * 思路：二分天数，贪心检查能否切出 m 段连续已开的花。
 * 时间 O(n log D)，空间 O(1)
 */

export function minDays(bloomDay: number[], m: number, k: number): number {
  if (m * k > bloomDay.length) {
    return -1;
  }
  let left = 1;
  let right = Math.max(...bloomDay);

  const canMake = (day: number): boolean => {
    let bouquets = 0;
    let adjacent = 0;
    for (const bloom of bloomDay) {
      if (bloom <= day) {
        adjacent++;
        if (adjacent === k) {
          bouquets++;
          adjacent = 0;
        }
      } else {
        adjacent = 0;
      }
    }
    return bouquets >= m;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canMake(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(minDays([1, 10, 3, 10, 2], 3, 1));
