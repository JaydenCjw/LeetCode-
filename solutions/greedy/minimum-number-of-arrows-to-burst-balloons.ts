/**
 * 用最少数量的箭引爆气球
 * 难度：★★★☆☆
 * points[i] = [xstart, xend]，一支箭可引爆所有覆盖该 x 的气球，求最少箭数。
 *
 * 示例：[[10,16],[2,8],[1,6],[7,12]] => 2
 *
 * 思路：按终点排序，贪心射当前终点。
 * 时间 O(n log n)，空间 O(1)
 */

export function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0;

  const sorted = [...points].sort((a, b) => a[1] - b[1]);
  let arrows = 1;
  let end = sorted[0][1];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] > end) {
      arrows++;
      end = sorted[i][1];
    }
  }

  return arrows;
}

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ]),
);
