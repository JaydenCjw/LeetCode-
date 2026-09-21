/**
 * 有效的回旋镖
 * 难度：★★☆☆☆
 * 三点构成回旋镖，当且仅当它们两两不重合且不在同一条直线上。
 *
 * 示例：[[1,1],[2,3],[3,2]] => true
 *
 * 思路：向量叉积不为 0 则不共线。
 * 时间 O(1)，空间 O(1)
 */

export function isBoomerang(points: number[][]): boolean {
  const [x1, y1] = points[0];
  const [x2, y2] = points[1];
  const [x3, y3] = points[2];
  return (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1) !== 0;
}

console.log(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ]),
);
