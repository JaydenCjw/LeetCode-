/**
 * 最大三角形面积
 * 难度：★★☆☆☆
 * 给定平面上的点，返回任意三点能构成的最大三角形面积。
 *
 * 示例：points=[[0,0],[0,1],[1,0],[0,2],[2,0]] => 2
 *
 * 思路：枚举三点，用鞋带公式计算面积，取最大值。
 * 时间 O(n^3)，空间 O(1)
 */

function triangleArea(a: number[], b: number[], c: number[]): number {
  return Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) / 2;
}

export function largestTriangleArea(points: number[][]): number {
  let best = 0;
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      for (let k = j + 1; k < points.length; k += 1) {
        best = Math.max(best, triangleArea(points[i], points[j], points[k]));
      }
    }
  }
  return best;
}

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ]),
);
