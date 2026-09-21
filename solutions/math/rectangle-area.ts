/**
 * 矩形面积
 * 难度：★★☆☆☆
 * 两个轴对齐矩形用左下角和右上角表示。返回它们覆盖的总面积，重叠部分只算一次。
 *
 * 示例：(-3,0)-(3,4) 与 (0,-1)-(9,2) 的覆盖面积为 45
 *
 * 思路：两矩形面积相加，再减去交集。交集宽高为投影重叠长度，不相交则为 0。
 * 时间 O(1)，空间 O(1)
 */

export function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number,
): number {
  const areaA = (ax2 - ax1) * (ay2 - ay1);
  const areaB = (bx2 - bx1) * (by2 - by1);
  const overlapW = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  const overlapH = Math.min(ay2, by2) - Math.max(ay1, by1);
  const overlap = Math.max(0, overlapW) * Math.max(0, overlapH);
  return areaA + areaB - overlap;
}

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
