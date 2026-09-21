/**
 * 石子游戏 II
 * 难度：★★★☆☆
 * M 从 1 开始，当前玩家可取 1 到 2M 堆，随后 M 变为 max(M, 本次取的堆数)。返回爱丽丝最多能拿到的石子。
 *
 * 示例：piles = [2,7,9,4,4] => 10
 *
 * 思路：后缀和 + 记忆化。若剩余堆数不超过 2M 则全取；否则枚举取 x 堆，自己得到后缀和减去对手最优。
 * 时间 O(n^3)，空间 O(n^2)
 */

export function stoneGameII(piles: number[]): number {
  const n = piles.length;
  const suffix = new Array<number>(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + piles[i];
  }
  const memo = new Map<string, number>();

  function dfs(index: number, m: number): number {
    if (index >= n) {
      return 0;
    }
    if (index + 2 * m >= n) {
      return suffix[index];
    }
    const key = `${index},${m}`;
    const cached = memo.get(key);
    if (cached !== undefined) {
      return cached;
    }
    let best = 0;
    for (let x = 1; x <= 2 * m; x++) {
      const opponent = dfs(index + x, Math.max(m, x));
      best = Math.max(best, suffix[index] - opponent);
    }
    memo.set(key, best);
    return best;
  }

  return dfs(0, 1);
}

console.log(stoneGameII([2, 7, 9, 4, 4]));
