/**
 * 爱吃香蕉的珂珂
 * piles[i] 为第 i 堆香蕉，H 小时内吃完，速度 k 根/小时。求最小 k。
 *
 * 示例：piles = [3,6,7,11], h = 8 => 4
 *
 * 思路：二分速度，check 能否在 h 小时内吃完。
 * 时间 O(n log m)，空间 O(1)
 */

export function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  const canFinish = (speed: number): boolean => {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / speed);
    }
    return hours <= h;
  };

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canFinish(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
