/**
 * 引爆最多的炸弹
 * 难度：★★★☆☆
 * 每个炸弹是 [x, y, 半径]。引爆一颗炸弹会连锁引爆范围内的炸弹。返回单次引爆能炸掉的最多数量。
 *
 * 示例：bombs = [[2,1,3],[6,1,4]] => 2
 *
 * 思路：若炸弹 j 落在 i 的半径内则连一条 i→j 的边，对每个起点 DFS 统计可达数。
 * 时间 O(n^2)，空间 O(n^2)
 */

export function maximumDetonation(bombs: number[][]): number {
  const n = bombs.length;
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (let from = 0; from < n; from++) {
    for (let to = 0; to < n; to++) {
      if (from === to) {
        continue;
      }
      const dx = bombs[from][0] - bombs[to][0];
      const dy = bombs[from][1] - bombs[to][1];
      const radius = bombs[from][2];
      if (dx * dx + dy * dy <= radius * radius) {
        graph[from].push(to);
      }
    }
  }

  const visit = (start: number): number => {
    const seen = new Set<number>([start]);
    const stack = [start];
    while (stack.length > 0) {
      const node = stack.pop();
      if (node === undefined) {
        continue;
      }
      for (const next of graph[node]) {
        if (!seen.has(next)) {
          seen.add(next);
          stack.push(next);
        }
      }
    }
    return seen.size;
  };

  let best = 0;
  for (let bomb = 0; bomb < n; bomb++) {
    best = Math.max(best, visit(bomb));
  }
  return best;
}

console.log(
  maximumDetonation([
    [2, 1, 3],
    [6, 1, 4],
  ]),
);
