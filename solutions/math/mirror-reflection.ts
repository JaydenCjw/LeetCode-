/**
 * 镜面反射
 * 难度：★★☆☆☆
 * 正方形房间四角编号：左下 0、右下 1、右上 2。从 0 沿斜率 q/p 发射光线，返回第一次碰到的角的编号。
 *
 * 示例：p=2, q=1 => 2
 *
 * 思路：把房间展开成网格。约去 p、q 的公因数 2 后：p 偶则碰到 2，q 偶则碰到 0，否则碰到 1。
 * 时间 O(log p)，空间 O(1)
 */

export function mirrorReflection(p: number, q: number): number {
  let room = p;
  let slope = q;
  while (room % 2 === 0 && slope % 2 === 0) {
    room = Math.floor(room / 2);
    slope = Math.floor(slope / 2);
  }
  if (room % 2 === 0) {
    return 2;
  }
  if (slope % 2 === 0) {
    return 0;
  }
  return 1;
}

console.log(mirrorReflection(2, 1));
