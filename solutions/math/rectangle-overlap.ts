/**
 * 矩形重叠
 * 难度：★★☆☆☆
 * 矩形用 [x1,y1,x2,y2] 表示左下角和右上角。判断两个轴对齐矩形是否有正面积的重叠。仅边相接不算重叠。
 *
 * 示例：rec1=[0,0,2,2], rec2=[1,1,3,3] => true
 *
 * 思路：在 x、y 两个方向上投影都相交，才算重叠。
 * 时间 O(1)，空间 O(1)
 */

export function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const overlapX = rec1[0] < rec2[2] && rec2[0] < rec1[2];
  const overlapY = rec1[1] < rec2[3] && rec2[1] < rec1[3];
  return overlapX && overlapY;
}

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
