/**
 * 摘樱桃
 * 难度：★★★★☆
 * 两人同时从左上只向右或下走到右下，再按原路理解收集樱桃。同一格只算一次，-1 不可走。
 *
 * 示例：[[0,1,-1],[1,0,-1],[1,1,1]] => 5
 *
 * 思路：两人同步走同样步数。状态为 (r1, c1, r2)，c2 由步数差推出，记忆化取四组走法的最大值。
 * 时间 O(n^3)，空间 O(n^3)
 */

export function cherryPickup(grid: number[][]): number {
  const n = grid.length;
  const memo = new Map<string, number>();

  function dp(r1: number, c1: number, r2: number): number {
    const c2 = r1 + c1 - r2;
    if (r1 >= n || c1 >= n || r2 >= n || c2 < 0 || c2 >= n) {
      return Number.NEGATIVE_INFINITY;
    }
    if (grid[r1][c1] === -1 || grid[r2][c2] === -1) {
      return Number.NEGATIVE_INFINITY;
    }
    if (r1 === n - 1 && c1 === n - 1) {
      return grid[r1][c1];
    }
    const key = `${r1},${c1},${r2}`;
    const cached = memo.get(key);
    if (cached !== undefined) {
      return cached;
    }
    const candidates = [
      dp(r1 + 1, c1, r2 + 1),
      dp(r1 + 1, c1, r2),
      dp(r1, c1 + 1, r2 + 1),
      dp(r1, c1 + 1, r2),
    ];
    let best = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
      if (candidates[i] > best) {
        best = candidates[i];
      }
    }
    best += grid[r1][c1];
    if (r1 !== r2 || c1 !== c2) {
      best += grid[r2][c2];
    }
    memo.set(key, best);
    return best;
  }

  const answer = dp(0, 0, 0);
  return answer < 0 ? 0 : answer;
}

console.log(
  cherryPickup([
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ]),
);
