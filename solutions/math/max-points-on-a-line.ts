/**
 * 直线上最多的点数
 * 难度：★★★★☆
 * 给定平面上的点，返回同一条直线上最多有多少个点。
 *
 * 示例：[[1,1],[2,2],[3,3]] => 3；[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]] => 4
 *
 * 思路：枚举起点，用最简分数表示斜率（gcd 约分并统一符号）。重复点单独计数，加到每条线上。
 * 时间 O(n^2)，空间 O(n)
 */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x;
}

export function maxPoints(points: number[][]): number {
  const count = points.length;
  if (count <= 2) {
    return count;
  }
  let best = 1;
  for (let i = 0; i < count; i += 1) {
    const slopes = new Map<string, number>();
    let duplicates = 1;
    let local = 0;
    for (let j = i + 1; j < count; j += 1) {
      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];
      if (dx === 0 && dy === 0) {
        duplicates += 1;
        continue;
      }
      const divisor = gcd(dx, dy);
      dx = Math.trunc(dx / divisor);
      dy = Math.trunc(dy / divisor);
      if (dx < 0 || (dx === 0 && dy < 0)) {
        dx = -dx;
        dy = -dy;
      }
      const key = `${dx},${dy}`;
      const next = (slopes.get(key) ?? 0) + 1;
      slopes.set(key, next);
      if (next > local) {
        local = next;
      }
    }
    best = Math.max(best, local + duplicates);
  }
  return best;
}

console.log([
  maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ]),
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ]),
]);
