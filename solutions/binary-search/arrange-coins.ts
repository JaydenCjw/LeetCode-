/**
 * 排列硬币
 * 难度：★☆☆☆☆
 * 第 k 行放 k 枚硬币。有 n 枚硬币时，能完整排成多少行。
 *
 * 示例：n = 5 => 2
 *
 * 思路：二分行数，判断 k(k+1)/2 是否不超过 n。
 * 时间 O(log n)，空间 O(1)
 */

export function arrangeCoins(n: number): number {
  let lo = 0;
  let hi = n;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const need = (mid * (mid + 1)) / 2;
    if (need === n) {
      return mid;
    }
    if (need < n) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return hi;
}

console.log(arrangeCoins(5));
