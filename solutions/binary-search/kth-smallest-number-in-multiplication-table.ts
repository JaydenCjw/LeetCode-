/**
 * 乘法表中第 k 小的数
 * 难度：★★★★☆
 * m 行 n 列乘法表，第 i 行第 j 列是 i * j（从 1 计）。求其中第 k 小的数。
 *
 * 示例：m = 3, n = 3, k = 5 => 3
 *
 * 思路：二分数值。不超过 x 的个数是各行 min(n, floor(x / i)) 之和。
 * 时间 O(m log(mn))，空间 O(1)
 */

export function findKthNumber(m: number, n: number, k: number): number {
  const count = (value: number): number => {
    let total = 0;
    for (let i = 1; i <= m; i++) {
      total += Math.min(n, Math.floor(value / i));
    }
    return total;
  };
  let lo = 1;
  let hi = m * n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (count(mid) >= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

console.log(findKthNumber(3, 3, 5));
