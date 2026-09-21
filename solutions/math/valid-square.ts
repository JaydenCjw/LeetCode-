/**
 * 有效的正方形
 * 难度：★★☆☆☆
 * 判断四个点能否构成面积为正的正方形。点的顺序任意。
 *
 * 示例：p1=[0,0], p2=[1,1], p3=[1,0], p4=[0,1] => true
 *
 * 思路：计算六条边的距离平方。应恰好有 4 条相等的边和 2 条相等且更长的对角线，且边长大于 0。
 * 时间 O(1)，空间 O(1)
 */

function dist2(a: number[], b: number[]): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return dx * dx + dy * dy;
}

export function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
  const lengths = [
    dist2(p1, p2),
    dist2(p1, p3),
    dist2(p1, p4),
    dist2(p2, p3),
    dist2(p2, p4),
    dist2(p3, p4),
  ].sort((a, b) => a - b);
  return (
    lengths[0] > 0 &&
    lengths[0] === lengths[1] &&
    lengths[1] === lengths[2] &&
    lengths[2] === lengths[3] &&
    lengths[4] === lengths[5] &&
    lengths[4] === lengths[0] * 2
  );
}

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));
