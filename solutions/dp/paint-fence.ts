/**
 * 粉刷篱笆
 * 难度：★★☆☆☆
 * n 个篱笆、k 种颜色，相邻最多两个颜色相同。求涂色方案数。
 *
 * 示例：n = 3, k = 2 => 6
 *
 * 思路：same 表示与前一根同色，diff 表示不同色。
 * diff[i] = (same + diff) * (k - 1)，same[i] = 上一轮的 diff。
 * 时间 O(n)，空间 O(1)
 */

export function numWays(n: number, k: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return k;
  }

  let same = k;
  let diff = k * (k - 1);
  for (let i = 3; i <= n; i++) {
    const prevDiff = diff;
    diff = (same + prevDiff) * (k - 1);
    same = prevDiff;
  }
  return same + diff;
}

console.log(numWays(3, 2));
